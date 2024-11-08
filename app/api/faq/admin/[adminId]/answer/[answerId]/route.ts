
import { deleteSpecificAnswer } from "@/actions/forum/Answer";
import { NextRequest, NextResponse } from "next/server";

export type Params = Promise<{
  userId: string;
  answerId: string;
}>;

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { userId, answerId } = await params;

  if (!userId) {
    return new NextResponse('User not authenticated', { status: 401 });
  }

  if (!answerId) {
    return new NextResponse('Answer ID is required', { status: 400 });
  }

  try {
    const resp = await deleteSpecificAnswer(answerId);

    if (resp.success) {
      return NextResponse.json(resp.data);
    } else {
      return NextResponse.json({ err: resp.error }, { status: 400 });
    }
  } catch (err) {
    console.log('[DELETE_ANSWER]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
