import { getDocuments } from "@/utils/firestore";
import Project from "@/interfaces/Project.interface";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

interface ProjectData extends Project {
  id: string;
}

interface SubmittedProps {
  projectsData: ProjectData[];
}

const Submitted: React.FC<SubmittedProps> = ({ projectsData }): JSX.Element => {
  return (
    <section
      className={`${spaceGrotesk.className} container mx-auto mt-12 px-4 md:px-0`}
    >
      <Link href="/">
        <button className="text-white text-center py-2 px-4 border border-gray-400 rounded shadow w-44 cursor-pointer">
          Create Project
        </button>
      </Link>
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left border-white border-2 border-opacity-30 text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                URL
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Product Launch
              </th>
              <th scope="col" className="px-6 py-3">
                Project Detail
              </th>
              <th scope="col" className="px-6 py-3">
                Tag
              </th>
              <th scope="col" className="px-6 py-3">
                Workers
              </th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((el) => (
              <tr
                key={el.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.name}
                </th>
                <td className="px-6 py-4">{el.url}</td>
                <td className="px-6 py-4">{el.email}</td>
                <td className="px-6 py-4">{el.productLaunch}</td>
                <td className="px-6 py-4">{el.projectDetail}</td>
                <td className="px-6 py-4">{el.selectedTag}</td>
                <td className="px-6 py-4">{el.workersCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const projectsData: ProjectData[] = [];

  const snapshot = await getDocuments();
  snapshot?.forEach((doc) => {
    projectsData.push({ id: doc.id, ...doc.data() } as ProjectData);
  });

  return {
    props: {
      projectsData,
    },
  };
}

export default Submitted;
