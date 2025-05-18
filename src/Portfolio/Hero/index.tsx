/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import image from "../../assets/mub.png";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [greeting, setGreeting] = useState("");

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

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-10 md:py-16 gap-8 md:gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left animate-slideUp">
          <div className="space-y-2">
            <div className="text-xl  font-sansita">
              {greeting}, I'm
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-arima">
              <span className="">
                MUBASSHIR
              </span>
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
                className=" "
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
                href="https://drive.google.com/uc?export=download&id=18IiIDRN9jU7JW1BvWYG4xrI1dng3L7B0"
                download="Mubasshir_CV.pdf"
                className="flex  items-center gap-2 font-sansita"
              >
                Resume <GoDownload className="font-bold  text-lg" />
              </a>
            </Button>

            <Button>
              <Link
                href="/contact"
                className=" font-sansita"
              >
                Contact Me
              </Link>
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
    </div>
  );
};

export default HeroSection;
