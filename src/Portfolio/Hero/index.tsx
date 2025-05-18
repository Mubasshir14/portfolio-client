// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import React, { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
// import Image from "next/image";
// import image from "../../assets/mub.png";
// import { GoCodeReview, GoDownload } from "react-icons/go";
// import { Button } from "@/components/ui/button";

// const HeroSection = () => {
//   const [greeting, setGreeting] = useState("");

//   useEffect(() => {
//     const getGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour >= 5 && hour < 12) return "Good Morning";
//       if (hour >= 12 && hour < 17) return "Good Afternoon";
//       if (hour >= 17 && hour < 22) return "Good Evening";
//       return "Good night";
//     };

//     setGreeting(getGreeting());
//   }, []);

//   return (
//     <div className="">
//       <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-10 md:py-16 gap-8 md:gap-12">
//         <div className="flex-1 space-y-6 text-center md:text-left animate-slideUp">
//           <div className="space-y-2">
//             <div className="text-xl  font-sansita">{greeting}, I'm</div>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-arima">
//               <span className="">MUBASSHIR</span>
//             </h1>
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-4">
//               <TypeAnimation
//                 sequence={[
//                   "Full Stack Developer",
//                   1000,
//                   "MERN Stack Developer",
//                   1000,
//                   "UI/UX Designer",
//                   1000,
//                   "React Expert",
//                   1000,
//                   "Next.js Developer",
//                   1000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 className=" "
//               />
//             </div>
//           </div>

//           <p className="text-lg text-primary max-w-xl leading-relaxed mx-auto md:mx-0 font-sansita">
//             Crafting beautiful and functional web experiences with modern
//             technologies. Turning complex problems into elegant solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
//             <Button>
//               <a
//                 href="https://drive.google.com/uc?export=download&id=18IiIDRN9jU7JW1BvWYG4xrI1dng3L7B0"
//                 download="Mubasshir_CV.pdf"
//                 className="flex  items-center gap-2 font-sansita"
//               >
//                 Resume <GoDownload className="font-bold  text-lg" />
//               </a>
//             </Button>

//             <Button>
//               <a
//                 href="https://drive.google.com/uc?export=download&id=18IiIDRN9jU7JW1BvWYG4xrI1dng3L7B0"
//                 download="Mubasshir_CV.pdf"
//                 className="flex  items-center gap-2 font-sansita"
//               >
//                View Resume <GoCodeReview className="font-bold  text-lg" />
//               </a>
//             </Button>
//           </div>
//         </div>

//         <div className="relative">
//           <div className="avatar group relative">
//             <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-spin-slow" />

//               <div className="absolute inset-[3px] rounded-full overflow-hidden bg-base-100">
//                 <Image
//                   src={image}
//                   alt="Profile"
//                   width={400}
//                   height={400}
//                   className="object-cover bg-gradient-to-b from-primary/10 to-transparent w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   priority
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import image from "../../assets/mub.png";
import { GoCodeReview, GoDownload } from "react-icons/go";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [greeting, setGreeting] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return "Good Morning";
      if (hour >= 12 && hour < 17) return "Good Afternoon";
      if (hour >= 17 && hour < 22) return "Good Evening";
      return "Good night";
    };

    setGreeting(getGreeting());
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-10 md:py-16 gap-8 md:gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left animate-slideUp">
          <div className="space-y-2">
            <div className="text-xl font-sansita">{greeting}, I'm</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-arima">
              <span className="">MUBASSHIR</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-4">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "React Expert",
                  1000,
                  "Next.js Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className=""
              />
            </div>
          </div>

          <p className="text-lg text-primary max-w-xl leading-relaxed mx-auto md:mx-0 font-sansita">
            Crafting beautiful and functional web experiences with modern
            technologies. Turning complex problems into elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <Button>
              <a
                href="https://drive.google.com/uc?export=download&id=13eJ7M9AeGReG-zwv136SkzBnSgZohIaT"
                // href="https://drive.google.com/uc?export=download&id=18IiIDRN9jU7JW1BvWYG4xrI1dng3L7B0"
                download="Mubasshir_CV.pdf"
                className="flex items-center gap-2 font-sansita"
              >
                Resume <GoDownload className="font-bold text-lg" />
              </a>
            </Button>

            <Button onClick={openModal}>
              <span className="flex items-center gap-2 font-sansita">
                View Resume <GoCodeReview className="font-bold text-lg" />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="avatar group relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-spin-slow" />
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-base-100">
                <Image
                  src={image}
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover bg-gradient-to-b from-primary/10 to-transparent w-full h-full transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing resume */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold font-sansita">Resume</h2>
              <Button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <iframe
                src="https://drive.google.com/file/d/13eJ7M9AeGReG-zwv136SkzBnSgZohIaT/preview"
                // src="https://drive.google.com/file/d/18IiIDRN9jU7JW1BvWYG4xrI1dng3L7B0/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;