// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getAllSkills } from "@/Services/Skill";

// const Skills = () => {
//   const [skills, setSkills] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchSkill = async () => {
//       const { data } = await getAllSkills();
//       setSkills(data);
//     };
//     fetchSkill();
//   }, []);

//   const half = Math.ceil(skills?.length / 2);
//   const topRow = skills?.slice(0, half);
//   const bottomRow = skills?.slice(half);

//   const renderRow = (row: typeof skills, direction: "left" | "right") => {
//     const animationClass =
//       direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

//     return (
//       <div className="max-w-screen-xl mx-auto overflow-hidden whitespace-nowrap w-full mb-8">
//         <div className={`flex ${animationClass} my-3`}>
//           {[...row, ...row].map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center mx-4 bg-opacity-90 ring ring-primary/30 ring-offset-2 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 min-w-[120px]"
//             >
//               <Image
//                 src={skill?.imageUrl}
//                 alt={skill?.name}
//                 width={60}
//                 height={60}
//                 className="mb-2 rounded-full border-2 border-white"
//               />
//               <h3 className="text-sm font-semibold text-primary text-center font-sansita">
//                 {skill?.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="skill" className="py-10">
//       <div className="text-center mb-8">
//         <h2 className="lg:text-4xl text-2xl text-primary font-extrabold font-arima">
//           My Tech Skills
//         </h2>
//         {/* <p className="text-secondary font-semibold mt-2 font-sansita">
//           Technologies I have experience with
//         </p> */}
//       </div>

//       {renderRow(topRow, "right")}
//       {renderRow(bottomRow, "left")}
//     </section>
//   );
// };

// export default Skills;


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllSkills } from "@/Services/Skill";
import { Loader2 } from "lucide-react";

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // loading state

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const { data } = await getAllSkills();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkill();
  }, []);

  const half = Math.ceil(skills?.length / 2);
  const topRow = skills?.slice(0, half);
  const bottomRow = skills?.slice(half);

  const renderRow = (row: typeof skills, direction: "left" | "right") => {
    const animationClass =
      direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

    return (
      <div className="max-w-screen-xl mx-auto overflow-hidden whitespace-nowrap w-full mb-8">
        <div className={`flex ${animationClass} my-3`}>
          {[...row, ...row].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center mx-4 bg-opacity-90 ring ring-primary/30 ring-offset-2 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 min-w-[120px]"
            >
              <Image
                src={skill?.imageUrl}
                alt={skill?.name}
                width={60}
                height={60}
                className="mb-2 rounded-full border-2 border-white"
              />
              <h3 className="text-sm font-semibold text-primary text-center font-sansita">
                {skill?.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skill" className="py-10">
      <div className="text-center mb-8">
        <h2 className="lg:text-4xl text-2xl text-primary font-extrabold font-arima">
          My Tech Skills
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : (
        <>
          {renderRow(topRow, "right")}
          {renderRow(bottomRow, "left")}
        </>
      )}
    </section>
  );
};

export default Skills;
