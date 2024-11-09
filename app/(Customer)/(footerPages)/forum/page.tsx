import {
  getAnsweredQuestions,
  getUnansweredQuestions,
} from "@/actions/forum/Question";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NewQuestionForm from "./components/NewQuestionForm";
import UnansweredQuestionCard from "./components/unAnsweredQuestions";

const Forum = async () => {
  const unansweredResp = await getUnansweredQuestions();
  const answeredResp = await getAnsweredQuestions();

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Page Title */}
      <div className="h-full">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold text-gray-200 font-handlee">
            Forum
          </div>
        </div>
      </div>

      {/* Ask a New Question Section */}
      <section className="space-y-4 flex items-center justify-center flex-col">
        <h2 className="text-2xl font-semibold font-handlee flex items-center justify-center text-gray-700">Ask a Question</h2>
        <NewQuestionForm />
      </section>

      {/* Unanswered Questions Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Unanswered Questions
        </h2>

        {unansweredResp.success ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {unansweredResp.data?.map((question) => (
              <UnansweredQuestionCard key={question.id} question={question} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            {unansweredResp.error || "No unanswered questions available."}
          </p>
        )}
      </section>

      {/* Answered Questions Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Answered Questions
        </h2>

        {answeredResp.success ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {answeredResp.data?.map((question) => (
              <Card key={question.id} className="bg-gray-200 dark:bg-gray-700 ">
                <CardHeader>
                  <CardTitle>{question.content}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Answers:
                    </p>
                    {question.answers?.map((answer) => (
                      <div
                        key={answer.id}
                        className="p-3 bg-gray-100 rounded-md"
                      >
                        <p className="text-gray-800">{answer.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            {answeredResp.error || "No answered questions available."}
          </p>
        )}
      </section>
    </div>
  );
};

export default Forum;
