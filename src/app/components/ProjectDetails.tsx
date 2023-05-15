interface ProjectDetailsProps {
  name: string;
  setName: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
  selectedTag: string;
  setSelectedTag: (value: string) => void;
  setStep: (value: number) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
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
      <h2 className="text-sm md:text-xl text-blue-500 mb-2">
        To Create Quest you need firstly create Project
      </h2>
      <h1 className="text-white mb-6 md:mb-7 font-medium text-3xl">
        Add New Project
      </h1>
      <label htmlFor="name" className="text-white mb-1 font-medium text-base">
        Project Name (It can be changed later)
      </label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Awesome NFT Punch"
        className="bg-dark rounded-lg border-2 border-white border-opacity-10 h-12 text-white text-opacity-30 px-4 py-3 max-w-2xl mb-6 md:mb-7"
      ></input>
      <label htmlFor="url" className="text-white mb-1 font-medium text-base">
        Project URL (It cannot be changed after creation)
      </label>
      <input
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Alphaguilty.io/awesomenftpunch"
        className="bg-dark rounded-lg border-2 border-white border-opacity-10 h-12 text-white text-opacity-30 px-4 py-3 max-w-2xl mb-6 md:mb-7"
      ></input>
      <label
        htmlFor="category"
        className="text-white mb-1 font-medium text-base"
      >
        Project Category (It cannot be changed after creation)
      </label>
      <div id="category" className="max-w-2xl mb-6 md:mb-3">
        {tags.map((tag, index) => {
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

export default ProjectDetails;
