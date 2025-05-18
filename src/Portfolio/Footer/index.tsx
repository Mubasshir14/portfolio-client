"use client";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import image from "../../assets/m_black.png";
import image2 from "../../assets/m_white.png";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme } = useTheme();
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mubasshiralkasshaf",
      title: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Mubasshir14",
      title: "Github",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/mubasshir.alkasshaf.5?mibextid=ZbWKwL",
      title: "Facebook",
    },
  ];

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];
  const logoImage = theme === "dark" ? image2 : image;

  return (
    <footer className="bg-base-200/50 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-md border-t border-primary/20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-base-content">
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="group relative w-fit">
              <Image
                src={logoImage}
                alt="Logo"
                width={150}
                height={150}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* <h1 className=" font-bold text-3xl bg-gradient-to-r from-primary font-arima to-primary/50 bg-clip-text text-transparent uppercase tracking-wide">Mubasshir</h1> */}
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse rounded-full group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary font-arima to-primary/50 bg-clip-text text-transparent uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base-content font-medium font-sansita">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="relative group hover:text-primary transition-colors duration-300"
                    aria-label={`Go to ${link.text}`}
                  >
                    {link.text}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary font-arima to-primary/50 bg-clip-text text-transparent uppercase tracking-wide">
              Connect With Me
            </h3>

            <div className="flex gap-4 text-2xl">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  aria-label={`Visit my ${social.title}`}
                  className="hover:text-primary transition-colors duration-300 "
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="space-y-3 text-sm text-base-content font-sansita">
              <a
                href="mailto:mubasshiralkasshaf22@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                aria-label="Send an email"
              >
                <HiMail className="text-xl font-sansita" />
                mubasshiralkasshaf22@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <BsTelephone className="text-lg font-sansita" />
                01317110909
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm pt-8 border-t border-primary/20 mt-6 text-base-content/60 font-sansita">
          &copy; {new Date().getFullYear()} Mubasshir Al Kasshaf. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
