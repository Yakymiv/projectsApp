"use client";

import { useState } from "react";

import Steps from "./components/Steps";
import ProjectDetails from "./components/ProjectDetails";

const Home = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <main className="md:flex">
      <Steps currentStep={step} />
      <section className="md:pl-14 flex flex-col mx-4 mt-6 md:mt-24">
        {(() => {
          switch (step) {
            case 1:
              return (
                <ProjectDetails
                  name={name}
                  setName={setName}
                  url={url}
                  setUrl={setUrl}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  setStep={setStep}
                />
              );
            case 2:
              return <h1>Case 2</h1>;
            case 3:
              return <h1>Case 3</h1>;
          }
        })()}
      </section>
    </main>
  );
};

export default Home;
