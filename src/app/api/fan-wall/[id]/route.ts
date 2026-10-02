import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

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

    const docRef = doc(db, 'fanMessages', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    const messageData = docSnap.data();

    // Verify ownership
    if (messageData.fanId !== fanId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await deleteDoc(docRef);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
