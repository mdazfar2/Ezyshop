"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast"; // Assuming you're using React Hot Toast for notifications
import { createAnswer } from "@/actions/forum/Answer"; // Import the server action

interface UnansweredQuestionCardProps {
  question: {
    id: string;
    content: string;
  };
}

const UnansweredQuestionCard: React.FC<UnansweredQuestionCardProps> = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { status: sessionStatus } = useSession();

  useEffect(() => {
    setIsMounted(true);
    if (sessionStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [sessionStatus]);

  if (!isMounted) {
    return <Spinner />;
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await createAnswer(question.id, answer);

      if (response.success) {
        toast.success("Answer submitted successfully!");
        setAnswer(""); // Clear the textarea on success
      } else {
        toast.error(response.error || "An error occurred while submitting your answer.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting your answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card key={question.id} className="bg-gray-200 dark:bg-gray-700">
      <CardHeader>
        <CardTitle>{question.content}</CardTitle>
      </CardHeader>
      <CardContent>
        {isAuthenticated ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Label htmlFor={`answer-${question.id}`} className="block text-sm font-medium text-gray-600">
                Your Answer
              </Label>
              <Textarea
                id={`answer-${question.id}`}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="resize-none w-full rounded-md border-gray-300 focus:border-indigo-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="mt-4 w-full bg-customTeal dark:bg-Green text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </Button>
          </form>
        ) : (
          <p className="text-red-500 text-sm">Please authenticate yourself to answer the question.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default UnansweredQuestionCard;
