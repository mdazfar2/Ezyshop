interface Contributor {
  avatar_url: string;
  contributions: number;
  html_url: string; // GitHub profile
  login: string; // Contributor name
}

interface ContributorCardProps {
  contributor: Contributor;
  hasNextCard : boolean;
  index : number;
}

const ContributorCard: React.FC<ContributorCardProps> = ({ contributor , hasNextCard, index}) => {
  return (
    <div id={`contributor-card-${index}`} className="relative text-center w-64 mt-3 md:mb-5 md:mt-3 md:mx-5 md:mr-5 md:w-64 flex-shrink-0 order-1 md:order-2">
      <div className="hidden md:block">

      {hasNextCard &&(
        <>
        <img
        src="/diamond_green.png"
        alt="Glitter decoration"
        className="absolute bottom-1/2 -right-1/4 w-24 h-24 hidden dark:block"
      />
      <img
        src="/diamond_blue.png"
        alt="Glitter decoration"
        className="absolute bottom-1/2 -right-1/4 w-24 h-24 dark:hidden"
      />
        </>
      ) }
      </div>

      <div className="relative inline-block">
        <img
          alt={`Profile of ${contributor.login}`}
          className="rounded-full border-8 border-customTeal dark:border-Green"
          height="160"
          src={contributor.avatar_url}
          width="160"
        />
      </div>
      <div className="mt-2">
        <div className="bg-customTeal dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-black font-bold py-1 px-4 rounded-full whitespace-nowrap">
          <button onClick={() => window.open(contributor.html_url, "_blank")}>{contributor.login}</button>
          
        </div>
        <div className="bg-customBlue dark:text-black dark:bg-gradient-to-r dark:from-[#4caf50] dark:to-[#e9be1e] text-white font-bold py-1 px-4 rounded-full mt-1">
          {contributor.contributions}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
