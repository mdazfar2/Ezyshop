
import { createQuestion} from "@/actions/forum/Question";
import { NextRequest, NextResponse } from "next/server";

export type Params = Promise<{
  userId: string;
}>;

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { userId } = await params;

  if (!userId) {
    return new NextResponse('User not authenticated', { status: 401 });
  }

  const { content } = await request.json();

  if (!content) {
    return new NextResponse('Content is required', { status: 400 });
  }

  try {
    const resp = await createQuestion(content);

    if (resp.success) {
      return NextResponse.json(resp.data);
    } else {
      return NextResponse.json({ err: resp.error }, { status: 400 });
    }
  } catch (err) {
    console.log('[CREATE_QUESTION]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
