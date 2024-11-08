'use client';

import { createQuestion } from '@/actions/forum/Question';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const NewQuestionForm = () => {
  const [questionContent, setQuestionContent] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const session = useSession();

  useEffect(() => {
    setIsMounted(true);
    if (!(session.status === 'loading')) {
      if (session.status === 'authenticated') {
        setIsAuthenticated(true);
        // console.log("hereeeeeeeeee"+isAuthenticated+session.status)
      }
    }
  }, [session.status]);

  if (!isMounted) {
    return <Spinner />;
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await createQuestion(questionContent);
      if (!response.success && response.error) {
        setSubmissionError(response.error);
      } else {
        setQuestionContent('');
        setSubmissionError('');
      }
    } catch (error) {
      setSubmissionError(
        'An error occurred while submitting your question. Please try again.'
      );
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="space-y-4 w-2/4">
          <Label htmlFor="new-question" className="text-gray-700 font-medium">
            Your Question
          </Label>
          <Textarea
            id="new-question"
            value={questionContent}
            onChange={e => setQuestionContent(e.target.value)}
            placeholder="Type your question here..."
            className="resize-none w-full rounded-md border-gray-300 focus:border-indigo-500"
            required
          />
          {submissionError && <p className="text-red-600">{submissionError}</p>}
          <Button type="submit" className="w-full dark:bg-Green bg-customTeal text-white">
            Submit Question
          </Button>
        </form>
      ) : (
        <p className="text-red-500 text-sm">
          Please authenticate yourself to post a question.
        </p>
      )}
    </>
  );
};

export default NewQuestionForm;
