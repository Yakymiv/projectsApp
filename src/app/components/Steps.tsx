interface StepsProps {
  currentStep: number;
}

const Steps: React.FC<StepsProps> = ({ currentStep = 1 }): JSX.Element => {
  return (
    <aside
      id="steps"
      className="relative md:w-64 md:shadow-rigthShadow md:h-screen md:pl-7 pl-0 md:pt-12 pt-20 flex justify-center md:justify-start"
    >
      <div className="md:flex-col flex items-center">
        <div className="flex">
          <div
            className={`rounded-full ${
              currentStep > 1 ? "bg-blue-500" : "bg-white"
            } w-2 h-2`}
          ></div>
          <span
            className={`invisible md:visible absolute translate-x-4 -translate-y-2 ${
              currentStep > 1 ? "text-blue-500" : "text-white"
            }`}
          >
            Start First Project
          </span>
        </div>
        <div
          className={`w-10 h-px md:w-px md:h-6 md:mx-0 mx-1 md:my-1 md-0 ${
            currentStep > 1 ? "bg-blue-500" : "bg-white bg-opacity-30"
          }`}
        ></div>
        <div className="flex">
          <div
            className={`rounded-full ${
              currentStep > 2 ? "bg-blue-500" : "bg-white"
            } ${currentStep >= 2 ? "" : "opacity-30"} w-2 h-2`}
          ></div>
          <span
            className={`invisible md:visible absolute translate-x-4 -translate-y-2 ${
              currentStep > 2 ? "text-blue-500" : "text-white"
            } ${currentStep >= 2 ? "" : "opacity-30"}`}
          >
            Project Details
          </span>
        </div>
        <div
          className={`w-10 h-px md:w-px md:h-6 md:mx-0 mx-1 md:my-1 md-0 ${
            currentStep > 2 ? "bg-blue-500" : "bg-white bg-opacity-30"
          }`}
        ></div>
        <div className="flex">
          <div
            className={`rounded-full ${
              currentStep < 3 ? "opacity-30" : ""
            } bg-white w-2 h-2`}
          ></div>
          <span
            className={`invisible md:visible absolute text-white translate-x-4 -translate-y-2 ${
              currentStep < 3 ? "opacity-30" : ""
            }`}
          >
            Create Project
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Steps;
