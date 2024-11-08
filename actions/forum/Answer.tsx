"use server"

import prismadb from "@/lib/prismadb";
import { Answer } from "@prisma/client";
import { UUID } from "crypto";

type CreateAnswerResponse = {
  success: boolean;
  data?: Answer
  error?: string;
};

export async function createAnswer(
  questionId: string,
  content: string
): Promise<CreateAnswerResponse> {
  try {

    const newAnswer = await prismadb.answer.create({
      data: {
        content,
        questionId,
      },
    });

    await prismadb.question.update({
      where: { id: questionId },
      data: { answered: true },
    });

    return {
      success: true,
      data: newAnswer
    };
  } catch (error) {
    console.error("Error creating answer:", error);
    return {
      success: false,
      error: "Failed to create answer",
    };
  }
}




type DeleteAnswerResponse = {
  success: boolean;
  data?: Answer;
  error?: string;
};

export async function deleteSpecificAnswer(answerId: string): Promise<DeleteAnswerResponse> {
  try {
    const deletedAnswer = await prismadb.answer.delete({
      where: {
        id: answerId,
      },
    });

    if (!deletedAnswer) {
      return {
        success: false,
        error: "Error in deleting the answer",
      };
    }

    return {
      success: true,
      data: deletedAnswer,
    };
  } catch (error) {
    console.error("Error deleting specific answer:", error);
    return {
      success: false,
      error: "Failed to delete specific answer",
    };
  }
}