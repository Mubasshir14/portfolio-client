"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  PenTool,
  // MessageSquare,
  // LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
// import Image from "next/image";
// import image from "../../assets/logo4-removebg-preview1.png";
import ThemeTogolloging from "../Theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Project", icon: Briefcase },
    { href: "/blogs", label: "Blog", icon: PenTool },
    // { href: "/contact", label: "Contact", icon: MessageSquare },
    // { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`relative z-50 transition-all duration-300 font-sansita ${
        isScrolled
          ? "bg-base-100/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="relative group">
          {/* <Image src={image} alt="logo image" width={150} height={150} />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" /> */}
           <h1 className=" font-bold text-3xl bg-gradient-to-r from-primary font-arima to-primary/50 bg-clip-text text-transparent uppercase tracking-wide">Mubasshir</h1>
        </Link>

        <div className="hidden lg:flex items-center text-primary space-x-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg group transition-all duration-300 font-sansita ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-100" />
                )}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeTogolloging />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-l transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 bg-gradient-to-r from-primary to-secondary text-white text-xl rounded-md" />
            ) : (
              <Menu className="w-6 h-6 bg-gradient-to-r from-primary to-secondary text-white text-xl rounded-md" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-secondary  shadow-lg z-50">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 font-sansita ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              );
            })}
            {/* <ThemeTogolloging /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
