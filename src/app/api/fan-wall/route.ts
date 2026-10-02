import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const DB_PATH = path.join(process.cwd(), 'data', 'fan-messages.json');

interface FanMessage {
  id: string;
  fanId: string;
  displayName: string;
  message: string;
  createdAt: string;
  cardSize: 'small' | 'medium' | 'large';
}

function readMessages(): FanMessage[] {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeMessages(messages: FanMessage[]) {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(messages, null, 2), 'utf-8');
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
  const messages = readMessages();
  messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return Response.json(messages);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fanId, displayName, message } = body;

    if (!fanId || typeof fanId !== 'string') {
      return Response.json({ error: 'Missing fanId' }, { status: 400 });
    }
    if (!displayName || typeof displayName !== 'string' || displayName.trim().length === 0) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }
    if (message.length > 500) {
      return Response.json({ error: 'Message too long' }, { status: 400 });
    }
    if (displayName.length > 50) {
      return Response.json({ error: 'Name too long' }, { status: 400 });
    }

    const sanitizedName = sanitize(displayName);
    const sanitizedMessage = sanitize(message);

    const newMessage: FanMessage = {
      id: generateId(),
      fanId: fanId,
      displayName: sanitizedName,
      message: sanitizedMessage,
      createdAt: new Date().toISOString(),
      cardSize: getCardSize(sanitizedMessage),
    };

    const messages = readMessages();
    messages.push(newMessage);
    writeMessages(messages);

    return Response.json(newMessage, { status: 201 });
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
