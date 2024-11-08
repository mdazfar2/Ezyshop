
import { deleteQuestion } from "@/actions/forum/Question";
import { NextRequest, NextResponse } from "next/server";

export type Params = Promise<{
  adminId: string;
  questionId: string;
}>;

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { adminId, questionId } = await params;

  if (!adminId) {
    return new NextResponse('Admin not authenticated', { status: 401 });
  }

  if (!questionId) {
    return new NextResponse('Question ID is required', { status: 400 });
  }

  try {
    const resp = await deleteQuestion(questionId);

    if (resp.success) {
      return NextResponse.json(resp.data);
    } else {
      return NextResponse.json({ err: resp.error }, { status: 400 });
    }
  } catch (err) {
    console.log('[DELETE_QUESTION]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
