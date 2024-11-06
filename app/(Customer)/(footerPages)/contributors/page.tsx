"use client";

import ContributorCard from "@/components/contributorCard";
import { Spinner } from "@/components/ui/spinner";
import ReactConfetti from "react-confetti";
import { useEffect, useState, useRef } from "react";

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
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/mdazfar2/Ezyshop/contributors"
        );
        const data = await response.json();
        console.log(data);
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 6000);
      
      }
    };
    fetchContributors();
  }, []);
  const [rowEnds, setRowEnds] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const cardElements = document.querySelectorAll(
        '[id^="contributor-card-"]'
      );
      const endIndices: number[] = [];

      let currentRowStartIndex = 0; // Index where the current row starts

      cardElements.forEach((card, index) => {
        const cardElement = card as HTMLElement; // Cast to HTMLElement
        const cardRect = cardElement.getBoundingClientRect(); // Get position of the card

        // Check if the card is in the same row based on Y position
        if (index > 0) {
          const previousCardElement = cardElements[index - 1] as HTMLElement;
          const previousCardRect = previousCardElement.getBoundingClientRect();

          // If the current card's top is greater than the previous card's bottom, we are in a new row
          if (cardRect.top > previousCardRect.bottom) {
            endIndices.push(index - 1); // Last card in the previous row
            currentRowStartIndex = index; // Update the start index for the new row
          }
        }

        // Optionally: add logic to accumulate the height of the cards in the same row, if needed
      });

      // Include the last card of the last row if necessary
      if (currentRowStartIndex < cardElements.length) {
        endIndices.push(cardElements.length - 1); // Last card in the final row
      }

      setRowEnds(endIndices);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [contributors]);

  console.log(contributors);
  return (
    <>
      <div className="bg-gray-100 dark:bg-DarkGray pb-10 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex justify-center flex-col items-center">
          <div className="h-full w-full">
            <div className="text-center my-8">
              <h1 className="text-4xl font-bold text-customTeal dark:text-Green">
                Meet Our Contributors
              </h1>
              <p className="text-lg mt-2 text-center w-1/2 mx-auto">
                &quot;Meet our GitHub contributors who work around the clock,
                blending day and night to add features, fix bugs, and make
                Ezyshop a success!
                {/* <i className="fas fa-heart">
    </i> */}
                &quot;
              </p>
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mt-10">
                <div className="flex w-full justify-between items-center">
                  {/* First Image on the Left */}
                  <div className="flex md:w-1/4 md:mr-auto hidden md:block">
                    <img
                      src="/left_green.png"
                      className="hidden dark:block"
                      alt=""
                    />
                    <img src="/left_blue.png" className="dark:hidden" />
                  </div>
                  <div className="flex flex-col items-center md:flex-row  h-full md:pt-1">
                    {/* First Contributor (index 2) */}

                    <div className="text-center mt-5 w-64 mx-auto md:mx-3 md:w-48 md:mt-10 order-2 md:order-1">
                      <div className="relative inline-block transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <img
                          alt=""
                          className="rounded-full border-8 border-customTeal dark:border-Green"
                          onClick={() =>
                            window.open(contributors[2].html_url, "_blank")
                          }
                          height="140"
                          src={contributors[2].avatar_url}
                          width="140"
                        />
                        <div className="absolute bottom-0 right-0 bg-customTeal dark:bg-[#e9be1e] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                          2
                        </div>
                      </div>
                      <div className="mt-2">
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            window.open(
                              `https://github.com/mdazfar2/Ezyshop/commits/main/?author=${contributors[2].login}`,
                              "_blank"
                            )
                          }
                        >
                          Contributions {contributors[2].contributions}
                        </span>
                        <div className="bg-customTeal md:mt-2 dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-black font-bold py-1 px-4 rounded-full whitespace-nowrap">
                          <button
                            onClick={() =>
                              window.open(contributors[2].html_url, "_blank")
                            }
                          >
                            {contributors[2].login}
                          </button>
                        </div>
                        <div className="bg-customBlue text-sm whitespace-nowrap dark:text-black dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-white font-bold py-1 px-4 rounded-full mt-1">
                          Open-Source Contributor
                        </div>
                      </div>
                    </div>

                    {/* Second Contributor (index 1) */}
                    <div className="relative text-center w-64 mx-auto md:mx-5  md:w-64 flex-shrink-0 order-1 md:order-2">
                      <img
                        src="/glitter_green_right.png"
                        alt="Glitter decoration"
                        className="absolute -top-10 -right-10 w-16 h-16 hidden dark:block"
                      />
                      <img
                        src="/glitter_blue_right.png"
                        alt="Glitter decoration"
                        className="absolute -top-10 -right-10 w-16 h-16 dark:hidden"
                      />
                      <img
                        src="/glitter_green_left.png"
                        alt="Glitter decoration"
                        className="absolute -top-10 -left-10 w-16 h-16 hidden dark:block"
                      />
                      <img
                        src="/glitter_blue_left.png"
                        alt="Glitter decoration"
                        className="absolute -top-10 -left-10 w-16 h-16 dark:hidden"
                      />

                      <div className="relative inline-block transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <img
                          alt="A person in a suit working on a laptop and holding a phone"
                          className="rounded-full border-8 border-customTeal dark:border-Green"
                          onClick={() =>
                            window.open(contributors[1].html_url, "_blank")
                          }
                          height="180"
                          src={contributors[1].avatar_url}
                          width="180"
                        />
                        <div className="absolute bottom-0 right-0 bg-customTeal dark:bg-[#e9be1e] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
                          1
                        </div>
                      </div>
                      <div className="mt-2">
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            window.open(
                              `https://github.com/mdazfar2/Ezyshop/commits/main/?author=${contributors[1].login}`,
                              "_blank"
                            )
                          }
                        >
                          Contributions {contributors[1].contributions}
                        </span>
                        <div className="bg-customTeal md:mt-2 dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e]  text-black font-bold py-1 px-4 rounded-full whitespace-nowrap">
                          <button
                            onClick={() =>
                              window.open(contributors[1].html_url, "_blank")
                            }
                          >
                            {contributors[1].login}
                          </button>
                        </div>
                        <div className="bg-customBlue text-sm whitespace-nowrap dark:text-black dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e]  text-white font-bold py-1 px-4 rounded-full mt-1">
                          Open-Source Contributor
                        </div>
                      </div>
                    </div>

                    {/* Third Contributor (index 3) */}
                    <div className="text-center mt-5 w-64 mx-auto md:mx-3 md:w-48 md:mt-10 order-3 md:order-3">
                      <div className="relative inline-block transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <img
                          alt="A person in a suit working on a laptop and holding a phone"
                          className="rounded-full border-8 border-customTeal dark:border-Green"
                          onClick={() =>
                            window.open(contributors[3].html_url, "_blank")
                          }
                          height="140"
                          src={contributors[3].avatar_url}
                          width="140"
                        />
                        <div className="absolute bottom-0 right-0 bg-customTeal dark:bg-[#e9be1e] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                          3
                        </div>
                      </div>
                      <div className="mt-2">
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            window.open(
                              `https://github.com/mdazfar2/Ezyshop/commits/main/?author=${contributors[3].login}`,
                              "_blank"
                            )
                          }
                        >
                          Contributions {contributors[3].contributions}
                        </span>
                        <div className="bg-customTeal md:mt-2 dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-black font-bold py-1 px-4 rounded-full whitespace-nowrap">
                          <button
                            onClick={() =>
                              window.open(contributors[3].html_url, "_blank")
                            }
                          >
                            {contributors[3].login}
                          </button>
                        </div>
                        <div className="bg-customBlue text-sm whitespace-nowrap dark:text-black dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-white font-bold py-1 px-4 rounded-full mt-1">
                          Open-Source Contributor
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:h-auto md:w-1/4 hidden md:block">
                    <img
                      src="/right_green.png"
                      className="hidden dark:block"
                      alt=""
                    />
                    <img src="/right_blue.png" className="dark:hidden" />
                  </div>
                </div>
              </div>

              <div
                ref={containerRef}
                id="contributor-container"
                className="grid grid-cols-1 gap-4 md:grid-cols-4 md:mt-16"
              >
                {contributors.slice(4).map((contributor, index) => {
                  const isRowEnd = rowEnds.includes(index);
                  const hasNextCard =
                    index < contributors.length - 1 && !isRowEnd;
                  return (
                    <ContributorCard
                      key={contributor.id}
                      contributor={contributor}
                      hasNextCard={hasNextCard}
                      index={index}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      {showConfetti && (

      <ReactConfetti width={windowDimension.width} height={2*windowDimension.height} 
      tweenDuration={6000}/>
      )}
    </>
  );
};

export default ContributorsPage;
