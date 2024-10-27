"use client";

import ContributorCard from "@/components/contributorCard";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

interface Contributor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    contributions: number;
  }
  

const ContributorsPage = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/mdazfar2/Ezyshop/contributors"
        );
        const data = await response.json();
        console.log(data)
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContributors();
  }, []);

  console.log(contributors);
  return (
    <div className="bg-gray-100 dark:bg-DarkGray text-gray-900 dark:text-white transition-colors duration-300">
    
      <div className="flex justify-center flex-col items-center">
      <div className="h-full w-full">
        <div className="text-white flex items-center justify-center  bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className=" text-4xl md:text-7xl text-gray-200 font-bold font-handlee">Github Contributors</div>
        </div>
      </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner/>
          </div>
        ) : (
          <div className="flex items-center flex-col justify-center  w-full  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributorsPage;
