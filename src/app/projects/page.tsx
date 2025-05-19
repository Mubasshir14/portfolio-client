/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Database } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getAllprojects } from "@/Services/Project";

// interface ProjectType {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   liveUrl: string;
//   repoFrontUrl: string;
//   repoBackUrl: string;
//   skills: string[];
// }

// const Project = () => {
//   const [projects, setProjects] = useState<ProjectType[]>([]);
//   useEffect(() => {
//     const fetchProjects = async () => {
//       const { data } = await getAllprojects();
//       setProjects(data);
//     };
//     fetchProjects();
//   }, []);

//   const titleVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const buttonVariants = {
//     hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
//     tap: { scale: 0.95, transition: { duration: 0.1 } },
//   };

//   const seeMoreVariants = {
//     pulse: {
//       scale: [1, 1.05, 1],
//       transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto py-12 px-4 bg-base-100/50">
//       <motion.div
//         className="text-center mb-12"
//         initial="hidden"
//         animate="visible"
//         variants={titleVariants}
//       >
//         <motion.h2
//           className="lg:text-4xl md:text-3xl text-2xl text-primary font-bold tracking-tight font-arima"
//           variants={titleVariants}
//         >
//           My Projects
//         </motion.h2>
//         {/* <motion.p
//           className="text-secondary font-semibold mt-2 font-sansita"
//           variants={titleVariants}
//           transition={{ delay: 0.2 }}
//         >
//           Showcase of the projects I've worked on
//         </motion.p> */}
//       </motion.div>

//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//         {projects?.slice(0, 3).map((project, index) => (
//           <motion.div
//             key={project._id}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             whileHover={{ scale: 1.05, y: -10 }}
//             transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//             className="relative bg-base-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
//           >
//             <div className="relative">
//               <Image
//                 src={project?.imageUrl}
//                 alt={project?.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100  transition-opacity duration-300" />
//               <span className="absolute top-2 left-2 bg-primary text-white dark:text-black text-xs font-sansita px-2 py-1 rounded-full">
//                 <div className="absolute top-2 left-2 flex gap-2">
//                   {project?.skills.slice(1, 3).map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="bg-primary text-white dark:text-black text-xs font-sansita px-2 py-1 rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </span>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-primary font-arima line-clamp-2">
//                 {project?.title}
//               </h3>
//               <p className="text-sm text-foreground/70 dark:text-gray-300 mt-2 font-sansita line-clamp-3">
//                 {project?.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <motion.div
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   <Link
//                     href={`/projects/${project._id}`}
//                     rel="noopener noreferrer"
//                     className="btn px-2 py-1  bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary text-oleo-script rounded-lg transition-all duration-300"
//                   >
//                     See Details
//                   </Link>
//                 </motion.div>
//                 <div className="flex items-center gap-2">
//                   <motion.a
//                     variants={buttonVariants}
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     whileTap="tap"
//                     href={project?.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm bg-accent text-accent-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
//                   >
//                     🔗
//                   </motion.a>
//                   <motion.a
//                     variants={buttonVariants}
//                     whileHover={{ scale: 1.2, rotate: -10 }}
//                     whileTap="tap"
//                     href={project?.repoFrontUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="Client Side Github"
//                     className="btn btn-sm bg-neutral text-neutral-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
//                   >
//                     <FaGithub size={20} />
//                     {/* <span className="text-xs font-sansita">FE</span> */}
//                   </motion.a>
//                   <motion.a
//                     variants={buttonVariants}
//                     whileHover={{ scale: 1.2, rotate: -10 }}
//                     whileTap="tap"
//                     href={project?.repoBackUrl}
//                     target="_blank"
//                     title="Server Side Github"
//                     rel="noopener noreferrer"
//                     className="btn btn-sm bg-neutral text-neutral-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
//                   >
//                     <Database size={20} />
//                     {/* <span className="text-xs font-sansita">BE</span> */}
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <motion.div
//         className="text-center mt-8"
//         variants={seeMoreVariants}
//         animate="pulse"
//       >
//         <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//           <Link
//             href="/projects"
//             className="btn bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary text-lg font-sansita px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             Explore All Projects
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Project;

"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllprojects } from "@/Services/Project";

interface ProjectType {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoFrontUrl: string;
  repoBackUrl: string;
  skills: string[];
}

const ProjectPages = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data } = await getAllprojects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 bg-base-100/50">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <motion.h2
          className="lg:text-4xl md:text-3xl text-2xl text-primary font-bold tracking-tight font-arima"
          variants={titleVariants}
        >
          My Projects
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-base-100/80 backdrop-blur-sm rounded-xl h-80 shadow-xl border border-primary/20"
              >
                <div className="h-48 bg-gray-300 rounded-t-xl"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))
          : projects?.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative bg-base-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={project?.imageUrl}
                    alt={project?.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {project?.skills
                      .slice(1, 4)
                      .map((skill: any, idx: number) => (
                        <span
                          key={idx}
                          className="bg-primary text-white dark:text-black text-xs font-sansita px-2 py-1 rounded-full"
                        >
                          {typeof skill === "object" ? skill.name : skill}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary font-arima line-clamp-2">
                    {project?.title}
                  </h3>
                  <p className="text-sm text-justify text-foreground/70 dark:text-gray-300 mt-2 font-sansita line-clamp-3">
                    {project?.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        href={`/projects/${project._id}`}
                        rel="noopener noreferrer"
                        className="btn px-2 py-1 bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary text-oleo-script rounded-lg transition-all duration-300"
                      >
                        See Details
                      </Link>
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <motion.a
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap="tap"
                        href={project?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm bg-accent text-accent-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
                      >
                        🔗
                      </motion.a>
                      <motion.a
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap="tap"
                        href={project?.repoFrontUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Client Side Github"
                        className="btn btn-sm bg-neutral text-neutral-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap="tap"
                        href={project?.repoBackUrl}
                        target="_blank"
                        title="Server Side Github"
                        rel="noopener noreferrer"
                        className="btn btn-sm bg-neutral text-neutral-content hover:bg-secondary hover:text-secondary-content rounded-lg transition-all duration-300"
                      >
                        <Database size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default ProjectPages;
