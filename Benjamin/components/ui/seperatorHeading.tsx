const SeperatorHeading = (label:{label:string}) => {
  return (
    <div className="flex items-center justify-center my-5 gap-5">

      <div className="w-24 h-1 bg-Green" />
      <div className="text-Yellow text-lg md:text-xl font-bold  font-nunito">
        {label.label}
      </div>
      <div className="w-24 h-1 bg-Green" />
    </div>
  );
};

export default SeperatorHeading;
