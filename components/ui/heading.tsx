interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="dark:text-gray-200 text-center ">
      <h2 className="text-4xl font-bold tracking-tight font-handlee text-customTeal dark:text-Green">{title}</h2>
      <p className="text-lg text-muted-foreground"> {description}</p>
    </div>
  );
};
