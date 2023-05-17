"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDocument } from "../utils/firestore";

import Steps from "./components/Steps";
import StartProjectStep from "./components/StartProjectStep";
import ProjectDetailsStep from "./components/ProjectDetailsStep";
import CreateProjectStep from "./components/CreateProjectStep";

const Home = (): JSX.Element => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [workersCount, setWorkersCount] = useState(0);
  const [productLaunch, setProductLaunch] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    addDocument({
      name,
      url,
      selectedTag,
      projectDetail,
      workersCount,
      productLaunch,
      email,
    }).then(() => {
      setName(""), setUrl(""), setSelectedTag("");
      setProjectDetail("");
      setWorkersCount(0);
      setProductLaunch("");
      setEmail("");

      router.push("/submitted");
    });
  };

  return (
    <main className="md:flex overflow-hidden">
      <Steps currentStep={step} />
      <section className="md:pl-14 flex flex-col mx-4 mt-6 md:mt-24">
        {(() => {
          switch (step) {
            case 1:
              return (
                <StartProjectStep
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
              return (
                <ProjectDetailsStep
                  projectDetail={projectDetail}
                  setProjectDetail={setProjectDetail}
                  setStep={setStep}
                />
              );
            case 3:
              return (
                <CreateProjectStep
                  workersCount={workersCount}
                  setWorkersCount={setWorkersCount}
                  productLaunch={productLaunch}
                  setProductLaunch={setProductLaunch}
                  email={email}
                  setEmail={setEmail}
                  setStep={setStep}
                  handleSubmit={handleSubmit}
                />
              );
          }
        })()}
      </section>
    </main>
  );
};

export default Home;
