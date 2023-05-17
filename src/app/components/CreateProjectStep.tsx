import StepTitles from "./base/StepTitles";

interface CreateProjectStepProps {
  workersCount: number;
  setWorkersCount: (value: number) => void;
  productLaunch: string;
  setProductLaunch: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  setStep: (value: number) => void;
  handleSubmit: () => void;
}

const CreateProjectStep: React.FC<CreateProjectStepProps> = ({
  workersCount,
  setWorkersCount,
  productLaunch,
  setProductLaunch,
  email,
  setEmail,
  setStep,
  handleSubmit,
}): JSX.Element => {
  const productLaunchValues = ["Pre Product", "Post Product"];

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const isDisabled =
    workersCount <= 0 || !productLaunch || !emailRegex.test(email);

  return (
    <>
      <StepTitles
        title="Create Project"
        subtitle="How many full-time workers on the project?"
        smallMb={true}
      />
      <div className="flex mb-7">
        <button
          onClick={() => setWorkersCount(Math.max(workersCount - 1, 0))}
          className={`bg-neutral-50 bg-opacity-10 text-neutral-50 font-medium text-base p-3 rounded-lg h-12 w-12`}
        >
          -
        </button>
        <input
          id="name"
          type="number"
          value={workersCount}
          inputMode="none"
          min={0}
          onChange={(e) => setWorkersCount(+e.target.value)}
          className="bg-dark rounded-lg border-2 border-white border-opacity-10 text-xs h-12 grow sm:flex-none sm:w-36 text-white text-center mx-4"
        ></input>
        <button
          onClick={() => setWorkersCount(workersCount + 1)}
          className={`bg-neutral-50 bg-opacity-10 text-neutral-50 font-medium text-base p-3 rounded-lg h-12 w-12`}
        >
          +
        </button>
      </div>
      <StepTitles
        subtitle="Are you pre or post product launch?"
        smallMb={true}
      />
      <div>
        {productLaunchValues.map((value, index): JSX.Element => {
          if (value === productLaunch) {
            return (
              <div key={index} className="flex items-center mb-6">
                <input
                  id={value}
                  type="radio"
                  value={value}
                  name="productLaunch"
                  onClick={() => setProductLaunch(value)}
                  defaultChecked
                  className="relative appearance-none w-6 h-6 rounded-full bg-dark border-2 border-white border-opacity-10"
                />
                <label htmlFor={value} className="ml-2 text-base text-white ">
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
                  name="productLaunch"
                  onClick={() => setProductLaunch(value)}
                  className="relative appearance-none w-6 h-6 rounded-full bg-dark border-2 border-white border-opacity-10"
                />
                <label htmlFor={value} className="ml-2 text-base text-white ">
                  {value}
                </label>
              </div>
            );
          }
        })}
      </div>
      <StepTitles subtitle="Contact Email" smallMb={true} />
      <input
        id="name"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="awesomenft@gmail.com"
        className="bg-dark rounded-lg border-2 border-white border-opacity-10 h-12 text-white px-4 py-3 max-w-2xl mb-6 md:mb-7"
      />
      <div className="flex mb-5">
        <button
          onClick={() => setStep(2)}
          className={`bg-neutral-50 bg-opacity-10 text-neutral-50 font-medium text-base py-2 px-4 rounded-lg h-12 w-1/2 md:w-32 mr-4 md:mr-8`}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className={`bg-bgButton ${
            isDisabled && "cursor-default"
          } text-dark font-medium text-base py-2 px-4 rounded-lg w-1/2 md:w-80 h-12`}
          disabled={isDisabled}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default CreateProjectStep;
