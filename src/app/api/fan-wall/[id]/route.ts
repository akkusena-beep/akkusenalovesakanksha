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
  fs.writeFileSync(DB_PATH, JSON.stringify(messages, null, 2), 'utf-8');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { fanId } = body;

    if (!fanId) {
      return Response.json({ error: 'Missing fanId' }, { status: 400 });
    }

    const messages = readMessages();
    const messageIndex = messages.findIndex(m => m.id === id);

    if (messageIndex === -1) {
      return Response.json({ error: 'Message not found' }, { status: 404 });
    }

    // Verify ownership — only the original author can delete
    if (messages[messageIndex].fanId !== fanId) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    messages.splice(messageIndex, 1);
    writeMessages(messages);

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
