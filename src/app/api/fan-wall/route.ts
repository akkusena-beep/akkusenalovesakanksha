import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const PROJECT_ID = 'akankshafanwall';
const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/fanMessages`;

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
    const response = await fetch(FIRESTORE_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch from Firestore');
    }
    const data = await response.json();
    
    const messages: FanMessage[] = (data.documents || []).map((doc: any) => {
      const fields = doc.fields || {};
      return {
        id: fields.id?.stringValue || '',
        fanId: fields.fanId?.stringValue || '',
        displayName: fields.displayName?.stringValue || '',
        message: fields.message?.stringValue || '',
        createdAt: fields.createdAt?.stringValue || '',
        cardSize: fields.cardSize?.stringValue || 'medium',
      };
    });

    // Sort descending by createdAt
    messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
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
    const now = new Date().toISOString();
    const cardSize = getCardSize(sanitizedMessage);

    const firestorePayload = {
      fields: {
        id: { stringValue: newId },
        fanId: { stringValue: fanId },
        displayName: { stringValue: sanitizedName },
        message: { stringValue: sanitizedMessage },
        createdAt: { stringValue: now },
        cardSize: { stringValue: cardSize }
      }
    };

    const docUrl = `${FIRESTORE_URL}?documentId=${newId}`;
    const response = await fetch(docUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(firestorePayload)
    });

    if (!response.ok) {
      console.error("Firestore Error:", await response.text());
      return NextResponse.json({ error: 'Database rejected the request. Check Security Rules.' }, { status: 500 });
    }

    const newMessage: FanMessage = {
      id: newId,
      fanId,
      displayName: sanitizedName,
      message: sanitizedMessage,
      createdAt: now,
      cardSize
    };

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
