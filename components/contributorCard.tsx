import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

interface Contributor {
  avatar_url: string;
  contributions: number;
  html_url: string; // GitHub profile
  login: string; // Contributor name
}

interface ContributorCardProps {
  contributor: Contributor;
}

const ContributorCard: React.FC<ContributorCardProps> = ({ contributor }) => {
  return (
    <div className="flex  items-center justify-center w-full">
    <Card className="w-full bg-gradient-to-r from-1%  to-99% from-customTeal via-gray-200 to-customTeal dark:bg-gray-700 dark:bg-gradient-to-t dark:from-gray-700 to:gray-700 max-w-sm shadow-lg border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105">
      <CardHeader className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={contributor.avatar_url} alt={contributor.login} />
          <AvatarFallback>{contributor.login.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl text-customBlue dark:text-Green font-bold font-handlee">{contributor.login}</CardTitle>
          <CardDescription className="text-sm dark:text-gray-200 font-bold text-gray-500 ">
            {contributor.contributions} Contributions
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 dark:text-gray-200">
          Thank you for your valuable contributions to our community! 
        </p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-customTeal dark:hover:text-Yellow"
          onClick={() => window.open(contributor.html_url, "_blank")}
        >
          <Github fill="black" className="h-5 text-customTeal dark:text-Yellow font-bold font-nunito w-5" />
          GitHub Profile
        </Button>
        {/* <Button variant="outline" className="hover:bg-blue-500 hover:text-white">
          <Linkedin className="h-5 w-5" />
          LinkedIn
        </Button> */}
      </CardFooter>
    </Card>
    </div>
  );
};

export default ContributorCard;
