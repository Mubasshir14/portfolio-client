import ProjectDetails from "@/Portfolio/ProjectDetails";
import { getSingleproject } from "@/Services/Project";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const ProjectDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = await getSingleproject(id);
  return <div>
    <ProjectDetails project={project.data} />
  </div>;
};

export default ProjectDetailsPage;
