import StepTitles from "./base/StepTitles";

interface StartProjectStepProps {
  name: string;
  setName: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
  selectedTag: string;
  setSelectedTag: (value: string) => void;
  setStep: (value: number) => void;
}

const StartProjectStep: React.FC<StartProjectStepProps> = ({
  name,
  setName,
  url,
  setUrl,
  selectedTag,
  setSelectedTag,
  setStep,
}): JSX.Element => {
  const tags = [
    "NFT",
    "GameFi",
    "DeFi",
    "DAO",
    "SocialFi",
    "Metaverse",
    "Tools",
    "Ecosystem",
    "Others",
  ];

  const isDisable = !name || !url || !selectedTag;

  return (
    <>
      <StepTitles
        title="To Create Quest you need firstly create Project"
        subtitle="Add New Project"
      />
      <label htmlFor="name" className="text-white mb-1 font-medium text-base">
        Project Name (It can be changed later)
      </label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Awesome NFT Punch"
        className="bg-dark rounded-lg border-2 text-base border-white border-opacity-10 h-12 text-white px-4 py-3 max-w-2xl mb-6 md:mb-7"
      ></input>
      <label htmlFor="url" className="text-white mb-1 font-medium text-base">
        Project URL (It cannot be changed after creation)
      </label>
      <input
        id="url"
        type="url"
        defaultValue={`alphaguilty.io/${url}`}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Alphaguilty.io/awesomenftpunch"
        className="bg-dark rounded-lg border-2 text-base border-white border-opacity-10 h-12 text-white px-4 py-3 max-w-2xl mb-6 md:mb-7"
      />
      <label
        htmlFor="category"
        className="text-white mb-1 font-medium text-base"
      >
        Project Category (It cannot be changed after creation)
      </label>
      <div id="category" className="max-w-2xl mb-6 md:mb-3">
        {tags.map((tag, index): JSX.Element => {
          if (selectedTag === tag) {
            return (
              <span
                key={index}
                className="cursor-default inline-block w-auto bg-blue-800 bg-opacity-10 text-tagSelected text-base mr-3 px-3 py-1 rounded-2xl mb-4"
              >
                {tag}
              </span>
            );
          } else {
            return (
              <span
                key={index}
                onClick={() => setSelectedTag(tag)}
                className="cursor-pointer inline-block w-auto bg-white bg-opacity-10 text-neutral-50 text-base mr-3 px-3 py-1 rounded-2xl mb-4"
              >
                {tag}
              </span>
            );
          }
        })}
      </div>
      <button
        onClick={() => setStep(2)}
        className={`bg-bgButton ${
          isDisable && "cursor-default"
        } text-dark font-medium text-base py-2 px-4 rounded-lg max-w-2xl h-12 md:max-w-xs mb-5`}
        disabled={isDisable}
      >
        Add Project
      </button>
    </>
  );
};

export default StartProjectStep;
