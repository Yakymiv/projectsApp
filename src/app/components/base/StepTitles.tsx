interface StepTitlesProps {
  title?: string;
  subtitle: string;
  smallMb?: boolean;
}

const StepTitles: React.FC<StepTitlesProps> = ({
  title,
  subtitle,
  smallMb = false,
}): JSX.Element => {
  return (
    <>
      {title && (
        <h2 className="text-sm md:text-xl text-blue-500 mb-2">{title}</h2>
      )}
      <h1
        className={`text-white ${
          smallMb ? "mb-4" : "mb-6 md:mb-7"
        } font-medium text-3xl`}
      >
        {subtitle}
      </h1>
    </>
  );
};

export default StepTitles;
