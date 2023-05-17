import StepTitles from "./base/StepTitles";

interface ProjectDetailsStepProps {
  projectDetail: string;
  setProjectDetail: (value: string) => void;
  setStep: (value: number) => void;
}

const ProjectDetailsStep: React.FC<ProjectDetailsStepProps> = ({
  projectDetail,
  setProjectDetail,
  setStep,
}): JSX.Element => {
  const projectDetailsValues = [
    "Grow My Community",
    "Activate Existing Members",
    "Understand My Members",
    "Other",
  ];

  return (
    <>
      <StepTitles
        title="Project Details"
        subtitle="What is your main goal with AlphaQuest?"
      />
      {projectDetailsValues.map((value, index): JSX.Element => {
        if (value === projectDetail) {
          return (
            <div key={index} className="flex items-center mb-6">
              <input
                id={value}
                type="radio"
                value={value}
                name="projectDetails"
                onClick={() => setProjectDetail(value)}
                className="relative appearance-none w-6 h-6 rounded-full bg-dark border-2 border-white border-opacity-10"
                defaultChecked
              />
              <label htmlFor={value} className="ml-2 text-base text-white">
                {value}
              </label>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex items-center mb-6">
              <input
                id={value}
                type="radio"
                value={value}
                name="projectDetails"
                onClick={() => setProjectDetail(value)}
                className="relative appearance-none w-6 h-6 rounded-full bg-dark border-2 border-white border-opacity-10"
              />
              <label htmlFor={value} className="ml-2 text-base text-white ">
                {value}
              </label>
            </div>
          );
        }
      })}
      <div className="flex mb-5">
        <button
          onClick={() => setStep(1)}
          className={`bg-neutral-50 bg-opacity-10 text-neutral-50 font-medium text-base py-2 px-4 rounded-lg h-12 w-1/2 md:w-32 mr-4 md:mr-8`}
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          className={`bg-bgButton ${
            !projectDetail && "cursor-default"
          } text-dark font-medium text-base py-2 px-4 rounded-lg w-1/2 md:w-80 h-12`}
          disabled={!projectDetail}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ProjectDetailsStep;
