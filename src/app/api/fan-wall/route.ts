import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc, query, orderBy } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

interface FanMessage {
  id: string;
  fanId: string;
  displayName: string;
  message: string;
  createdAt: string;
  cardSize: 'small' | 'medium' | 'large';
}

function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function getCardSize(message: string): 'small' | 'medium' | 'large' {
  const len = message.length;
  if (len <= 60) return 'small';
  if (len <= 140) return 'medium';
  return 'large';
}

function generateId(): string {
  return 'msg_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

export async function GET() {
  try {
    const messagesRef = collection(db, 'fanMessages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const messages: FanMessage[] = [];
    querySnapshot.forEach((docSnap) => {
      messages.push(docSnap.data() as FanMessage);
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    // Return empty array on error instead of failing, to not break frontend
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fanId, displayName, message } = body;

    if (!fanId || typeof fanId !== 'string') {
      return NextResponse.json({ error: 'Missing fanId' }, { status: 400 });
    }
    if (!displayName || typeof displayName !== 'string' || displayName.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (message.length > 500) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 });
    }
    if (displayName.length > 50) {
      return NextResponse.json({ error: 'Name too long' }, { status: 400 });
    }

    const sanitizedName = sanitize(displayName);
    const sanitizedMessage = sanitize(message);
    const newId = generateId();

    const newMessage: FanMessage = {
      id: newId,
      fanId: fanId,
      displayName: sanitizedName,
      message: sanitizedMessage,
      createdAt: new Date().toISOString(),
      cardSize: getCardSize(sanitizedMessage),
    };

    await setDoc(doc(db, 'fanMessages', newId), newMessage);

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
