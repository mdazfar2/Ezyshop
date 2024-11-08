'use server';

import prismadb from '@/lib/prismadb';
import { Answer, Question } from '@prisma/client';

interface QuestionWithAnswer extends Question{
  answers?:Answer[]
}

type QuestionResponse = {
  success: boolean;
  data?: Question;
  error?: string;
};

type getQuestionsResponse = {
  success: boolean;
  data?: QuestionWithAnswer[];
  error?: string;
};


export async function createQuestion(
  content: string
): Promise<QuestionResponse> {
  try {
    const newQuestion = await prismadb.question.create({
      data: {
        content,
      },
    });

    return {
      success: true,
      data: newQuestion,
    };
  } catch (error) {
    console.error('Error creating question:', error);
    return {
      success: false,
      error: 'Failed to create question',
    };
  }
}

export async function getUnansweredQuestions(
): Promise<getQuestionsResponse> {
  try {
    const unAnsweredQuestions = await prismadb.question.findMany({
      where: {
        answered: false,
      },
    });

    if (!unAnsweredQuestions.length) {
      return {
        success: false,
        error: 'No unanswered questions!',
      };
    }

    return {
      success: true,
      data: unAnsweredQuestions,
    };
  } catch (error) {
    console.error('Error fetching unanswered questions', error);
    return {
      success: false,
      error: 'Failed to fetch unanswered questions',
    };
  }
}


export async function getAnsweredQuestions(
): Promise<getQuestionsResponse> {
  try {
    const AnsweredQuestions = await prismadb.question.findMany({
      where: {
        answered: true,
      },
      include:{
        answers:true
      }
    });

    if (!AnsweredQuestions.length) {
      return {
        success: false,
        error: 'No unanswered questions!',
      };
    }

    return {
      success: true,
      data: AnsweredQuestions,
    };
  } catch (error) {
    console.error('Error fetching answered questions', error);
    return {
      success: false,
      error: 'Failed to fetch answered questions',
    };
  }
}

//  This will be only accessible by the admin

// deletes a question and all its related answers if present

export async function deleteQuestion(
  questionId: string,
): Promise<QuestionResponse> {
  try {
    const deletedQuestion = await prismadb.question.delete({
      where: {
        id:questionId
      },
    });

    if (!deletedQuestion) {
      return {
        success: false,
        error: 'error in deleting the question',
      };
    }

    return {
      success: true,
      data: deletedQuestion,
    };
  } catch (error) {
    console.error('Error deleting specific question', error);
    return {
      success: false,
      error: 'Failed to delete specific question',
    };
  }
}