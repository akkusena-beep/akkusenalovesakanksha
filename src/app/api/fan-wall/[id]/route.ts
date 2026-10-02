import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const PROJECT_ID = 'akankshafanwall';
const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/fanMessages`;

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { fanId } = body;

    if (!fanId) {
      return NextResponse.json({ error: 'Missing fanId' }, { status: 400 });
    }

    const docUrl = `${FIRESTORE_URL}/${id}`;
    
    // First fetch the document to check ownership
    const getRes = await fetch(docUrl, { cache: 'no-store' });
    
    if (!getRes.ok) {
      if (getRes.status === 404) {
        return NextResponse.json({ error: 'Message not found' }, { status: 404 });
      }
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    const docData = await getRes.json();
    const messageFanId = docData.fields?.fanId?.stringValue;

    // Verify ownership
    if (messageFanId !== fanId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Actually delete the document
    const deleteRes = await fetch(docUrl, { method: 'DELETE' });
    
    if (!deleteRes.ok) {
      return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
