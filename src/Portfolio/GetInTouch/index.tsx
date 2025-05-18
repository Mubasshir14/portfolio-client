// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { toast } from "sonner";
// import { Send } from "lucide-react";
// import Image from "next/image";
// import { Sansita } from "next/font/google";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import contactImage from "../../assets/cnt.png"; // Verify this path

// const sansita = Sansita({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// // Define form schema with Zod
// const formSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   subject: z.string().min(1, { message: "Subject is required" }),
//   message: z.string().min(1, { message: "Message is required" }),
// });

// type FormData = z.infer<typeof formSchema>;

// const GetInTouch = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   // Initialize react-hook-form with Zod resolver
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   const sendEmail = async (data: FormData) => {
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Message sent successfully!");
//         form.reset();
//       } else {
//         toast.error(result.message || "Failed to send message. Please try again!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again!");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section
//       className={`max-w-screen-xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 ${sansita.className}`}
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
//         Get in Touch
//       </h2>
//       <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg">
//         <div className="w-full md:w-1/2">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="email"
//                         placeholder="Your Email"
//                         className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//                         disabled={isLoading}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="subject"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Subject</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="text"
//                         placeholder="Subject"
//                         className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//                         disabled={isLoading}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Message</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Your Message"
//                         rows={5}
//                         className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500"
//                         disabled={isLoading}
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white"
//               >
//                 {isLoading ? (
//                   <>
//                     <svg
//                       className="animate-spin h-5 w-5"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" aria-hidden="true" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </Form>
//         </div>
//         <div className="w-full md:w-1/2">
//           <Image
//             src={contactImage}
//             alt="Contact illustration"
//             width={400}
//             height={400}
//             className="w-full h-auto rounded-xl shadow-lg object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetInTouch;

// src/Portfolio/GetInTouch/index.tsx
"use client";
import React, { useState, useEffect, useRef } from "react"; // Add useEffect, useRef
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import Image from "next/image";
import { Sansita } from "next/font/google";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImage from "../../assets/cnt.png";

const sansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof formSchema>;

const GetInTouch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null); 

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (emailInputRef.current) {
      // Remove specific attributes added by extensions
      emailInputRef.current.removeAttribute("data-temp-mail-org");
      emailInputRef.current.style.backgroundImage = "";
      emailInputRef.current.style.backgroundRepeat = "";
      emailInputRef.current.style.backgroundSize = "";
    }
  }, []);

  const sendEmail = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.message || "Failed to send message. Please try again!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`max-w-screen-xl mx-auto py-16 px-4 bg-white dark:bg-gray-900 ${sansita.className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg">
        <div className="w-full md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                        // ref={emailInputRef} 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Subject"
                        className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 "
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary text-lg font-sansita px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={contactImage}
            alt="Contact illustration"
            width={400}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;