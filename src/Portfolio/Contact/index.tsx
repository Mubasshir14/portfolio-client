/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
} from "lucide-react";

// Contact data (replace with your actual details)
const contactInfo = {
  email: "your.email@example.com",
  mobile: "+1234567890",
  socials: [
    { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourusername",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourusername",
      icon: Instagram,
    },
    { name: "WhatsApp", href: "https://wa.me/1234567890", icon: MessageCircle },
  ],
  address: "1234 Your Street, City, Country",
};

const ContactMe = () => {
  
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 bg-base-100/50">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h2 className="lg:text-4xl md:text-3xl text-2xl text-primary font-bold tracking-tight font-arima">
          Contact Me
        </h2>
        {/* <p className="text-secondary font-semibold mt-2 font-sansita">
          Get in touch through any of these channels
        </p> */}
      </motion.div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
       
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 p-6"
        >
          <h3 className="text-xl font-bold text-primary font-arima mb-4">
            Contact Info
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-foreground hover:text-primary font-sansita transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <a
                href={`tel:${contactInfo.mobile}`}
                className="text-foreground hover:text-primary font-sansita transition-colors duration-300"
              >
                {contactInfo.mobile}
              </a>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 p-6"
        >
          <h3 className="text-xl font-bold text-primary font-arima mb-4">
            Follow Me
          </h3>
          <div className="flex flex-wrap gap-4">
            {contactInfo.socials.map(({ name, href, icon: Icon }, index) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity duration-300"
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

       
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 p-6"
        >
          <h3 className="text-xl font-bold text-primary font-arima mb-4">
            Visit Me
          </h3>
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-foreground font-sansita">
              {contactInfo.address}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
