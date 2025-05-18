/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  project: {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    liveUrl?: string;
    repoFrontUrl?: string;
    repoBackUrl?: string;
    skills?: string[] | any[];
  } | null;
}

const ProjectDetails = ({ project }: Project) => {
  if (!project)
    return (
      <div className="text-center py-20 font-sansita">No project found.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-16 font-sansita ">
      <div className="max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative mb-12">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <Image
              width={500}
              height={300}
              src={project.imageUrl || "/placeholder.jpg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {project.title}
        </h1>

        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {project.skills.map((skill: any, idx: number) => (
              <span
                key={idx}
                className="bg-primary text-white dark:text-black text-sm font-medium px-3 py-1 rounded-full shadow-sm"
              >
                {typeof skill === "object" ? skill.name : skill}
              </span>
            ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-justify">
          {project.description}
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              Live Site
            </a>
          )}
          {project.repoFrontUrl && (
            <a
              href={project.repoFrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              <Github className="w-5 h-5" />
              Frontend Code
            </a>
          )}
          {project.repoBackUrl && (
            <a
              href={project.repoBackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              <Github className="w-5 h-5" />
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
