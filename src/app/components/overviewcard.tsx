import { useRouter } from "next/navigation";
import projectsData from "../data/projects.json";

export default function OverViewCardPage() {
  const router = useRouter();

  const handleRedirectToProject = (projectId: string) => {
    router.push(`/projects`);
  };

  return (
    <div className="flex flex-row gap-3 w-full overflow-x-auto no-scrollbar border-r-2">
      {projectsData.projectData.map((project) => {
        return (
          <div
            key={project.id}
            onClick={() => handleRedirectToProject(project.id)}
            className="cursor-pointer p-8 w-72 rounded-lg text-black bg-blue-400 shadow-lg shadow-blue-500/50"
          >
            <p>{project.name}</p>
            <p>{project.description}</p>
            <span>{project.progress}</span>
          </div>
        );
      })}
    </div>
  );
}
