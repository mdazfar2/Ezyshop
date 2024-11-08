
import { getAnsweredQuestions, getUnansweredQuestions } from "@/actions/forum/Question";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Extract the query parameter
    const url = new URL(request.url);
    const questionStatus = url.searchParams.get("question");

    // Check if the query parameter is 'answered' or 'unanswered'
    let resp;

    if (questionStatus === "answered") {
      resp = await getAnsweredQuestions();
    } else if (questionStatus === "unanswered") {
      resp = await getUnansweredQuestions();
    } else {
      return new NextResponse("Invalid query parameter. Use '?question=answered' or '?question=unanswered'.", { status: 400 });
    }

    if (resp.success) {
      return NextResponse.json(resp.data);
    } else {
      return NextResponse.json({ err: resp.error }, { status: 400 });
    }
  } catch (err) {
    console.log('[GET_QUESTIONS]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
