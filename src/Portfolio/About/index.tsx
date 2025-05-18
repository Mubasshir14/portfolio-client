// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import React from "react";
// import Image from "next/image";
// import image from "../../assets/image.jpg";

// const AboutMe = () => {
//   return (
//     <div id="about" className="h-[400px] overflow-hidden mt-2">
//       <div className="hero h-[400px] backdrop-blur-[2px]">
//         <div className="hero-content flex-col md:flex-row justify-between gap-12">
//           <div className="flex-1 flex flex-col justify-center text-left">
//             <h2 className="text-4xl font-extrabold tracking-tight text-primary font-arima">
//               About Me
//             </h2>

//             <p className="mt-4 text-justify text-lg text-foreground font-sansita">
//               I'm an aspiring{" "}
//               <span className="text-primary font-bold">
//                 Full Stack Developer
//               </span>{" "}
//               specializing in the{" "}
//               <span className="text-primary font-bold">MERN stack</span>{" "}
//               (React.js, Next.js, Node.js, PostgreSQL, Prisma ORM). I build
//               real-world projects with{" "}
//               <strong className="text-primary">clean, efficient code</strong>,
//               focusing on modern UI/UX and robust backend solutions.
//             </p>
//             <p className="mt-3 text-justify text-lg text-foreground font-sansita">
//               Proficient in{" "}
//               <span className="text-primary font-semibold">
//                 JavaScript, Python, and Java
//               </span>
//               , I leverage tools like Git, Postman, and Jupyter Notebook to solve
//               problems and innovate. Driven by{" "}
//               <span className="text-primary font-semibold">
//                 continuous learning
//               </span>
//               , I’m passionate about creating impactful applications and
//               collaborating on meaningful projects. 
//             </p>
//           </div>

//           <div className="hidden lg:flex justify-end md:justify-start">
//             <Image
//               src={image}
//               alt="About Me"
//               width={500}
//               height={400}
//               className="rounded-2xl shadow-xl ring ring-accent/50 ring-offset-4 ring-offset-base-200"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import image from "../../assets/image.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="min-h-[400px] overflow-hidden mt-2">
      <div className="hero min-h-[400px] backdrop-blur-[2px]">
        <div className="hero-content flex flex-col md:flex-row justify-between gap-8 md:gap-12 max-w-screen-xl mx-auto px-4">
          <div className="flex-1 flex flex-col justify-center text-left order-1 md:w-1/2">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary font-arima">
              About Me
            </h2>

            <p className="mt-4 text-justify text-lg text-foreground font-sansita">
              I'm an aspiring{" "}
              <span className="text-primary font-bold">
                Full Stack Developer
              </span>{" "}
              specializing in the{" "}
              <span className="text-primary font-bold">MERN stack</span>{" "}
              (React.js, Next.js, Node.js, PostgreSQL, Prisma ORM). I build
              real-world projects with{" "}
              <strong className="text-primary">clean, efficient code</strong>,
              focusing on modern UI/UX and robust backend solutions.
            </p>
            <p className="mt-3 text-justify text-lg text-foreground font-sansita">
              Proficient in{" "}
              <span className="text-primary font-semibold">
                JavaScript, Python, and Java
              </span>
              , I leverage tools like Git, Postman, and Jupyter Notebook to solve
              problems and innovate. Driven by{" "}
              <span className="text-primary font-semibold">
                continuous learning
              </span>
              , I’m passionate about creating impactful applications and
              collaborating on meaningful projects.
            </p>
          </div>

          <div className="flex justify-center md:justify-end order-2 md:w-1/2 md:flex">
            <Image
              src={image}
              alt="About Me"
              width={400}
              height={300}
              className="rounded-2xl shadow-xl ring ring-accent/50 ring-offset-4 ring-offset-base-200 max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;