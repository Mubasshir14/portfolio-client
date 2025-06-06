/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { ThumbsUp, BookmarkPlus, Clock } from "lucide-react";
// import Image from "next/image"; 
// import moment from "moment";
// import CopyButton from "./CopyButton";
// import ShareButton from "./ShareButton";
// import { Button } from "@/components/ui/button";

// interface Blog {
//   blog: {
//     _id: string;
//     title: string;
//     topic: string;
//     content: string;
//     imageUrl?: string;
//     createdAt?: string;
//   } | null;
// }

// const BlogDetails = ({ blog }: Blog) => {
//   if (!blog) return <p className="text-center py-10">Blog not found.</p>;

//   const currentUrl = typeof window !== "undefined" ? window.location.href : "";
// const timeAgo = moment(blog?.createdAt).fromNow();

//   return (
//     <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sansita">
//       <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />

//       <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
//           <Button className="p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 group">
//             <ThumbsUp className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary" />
//           </Button>
//           <Button className="p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 group">
//             <BookmarkPlus className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary" />
//           </Button>
//           <CopyButton url={currentUrl} />
//           <ShareButton url={currentUrl} />
//         </div>

//         <header className="text-center mb-20 max-w-4xl mx-auto">
//           <div className="mb-8 space-y-4">
//             <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary ring-1 ring-primary/20 backdrop-blur-sm">
//               {blog.topic}
//             </span>
//             <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 capitalize">
//               <Clock className="w-4 h-4" />
//               <span>{timeAgo}</span>
//             </div>
//           </div>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary leading-tight">
//             {blog.title}
//           </h1>
//         </header>

//         {blog.imageUrl && (
//           <div className="relative mb-20">
//             <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-20 animate-pulse" />
//             <div className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video shadow-2xl ring-1 ring-gray-900/5">
//               <Image
//                 src={blog.imageUrl}
//                 alt={blog.title}
//                 width={1920}
//                 height={1080}
//                 className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
//                 priority
//               />
//             </div>
//           </div>
//         )}

//         <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
//           <div className="relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-10" />
//             <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 mb-12 ring-1 ring-gray-900/5">
//               <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                 {blog.content}
//               </p>
//             </div>
//           </div>

//           <div className="mt-20">
//             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-px">
//               <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12">
//                 <div className="grid md:grid-cols-2 gap-8 items-center">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-4">
//                       Subscribe to Our Newsletter
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Get the latest articles and insights delivered straight
//                       to your inbox.
//                     </p>
//                   </div>
//                   <div className="lg:flex-row flex-col space-y-3 gap-4">
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="flex-1 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 outline-none dark:bg-gray-800"
//                     />
//                     <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
//                       Subscribe
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default BlogDetails;

"use client";

import React, { useState } from "react";
import { ThumbsUp, BookmarkPlus, Clock } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import { formatDistanceToNow } from "date-fns";
import DOMPurify from "dompurify";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Blog {
  blog: {
    _id: string;
    title: string;
    topic: string;
    content: string;
    imageUrl?: string;
    createdAt?: string;
  } | null;
}

interface NewsletterForm {
  email: string;
}

const BlogDetails = ({ blog }: Blog) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>();

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-500">Blog not found.</p>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const timeAgo = blog.createdAt
    ? formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })
    : "Unknown date";

  const sanitizedContent = DOMPurify.sanitize(blog.content);

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Like removed!" : "Blog liked!");
    // TODO: Add API call to save like status
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? "Bookmark removed!" : "Blog bookmarked!");
    // TODO: Add API call to save bookmark status
  };

  const onSubscribe = async (data: NewsletterForm) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with real API call (e.g., Mailchimp)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API
      toast.success("Subscribed successfully!");
      reset();
    } catch (error:any) {
      toast.error("Failed to subscribe. Please try again.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.slice(0, 160)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content.slice(0, 160)} />
        <meta property="og:image" content={blog.imageUrl || "/default-image.jpg"} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sansita">
        <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
            <Button
              onClick={handleLike}
              aria-label={isLiked ? "Remove like" : "Like blog"}
              className={`p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 group ${
                isLiked ? "bg-primary/20" : ""
              }`}
            >
              <ThumbsUp
                className={`w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary ${
                  isLiked ? "text-primary" : ""
                }`}
              />
            </Button>
            <Button
              onClick={handleBookmark}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark blog"}
              className={`p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 ENSUREgroup ${
                isBookmarked ? "bg-primary/20" : ""
              }`}
            >
              <BookmarkPlus
                className={`w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary ${
                  isBookmarked ? "text-primary" : ""
                }`}
              />
            </Button>
            <CopyButton url={currentUrl} />
            <ShareButton url={currentUrl} />
          </div>

          <header className="text-center mb-20 max-w-4xl mx-auto">
            <div className="mb-8 space-y-4">
              <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                {blog.topic}
              </span>
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 capitalize">
                <Clock className="w-4 h-4" />
                <span>{timeAgo}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary leading-tight">
              {blog.title}
            </h1>
          </header>

          {blog.imageUrl && (
            <div className="relative mb-20">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video shadow-2xl ring-1 ring-gray-900/5">
                <Image
                  src={blog.imageUrl}
                  alt={`Cover image for ${blog.title}`}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-10" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 mb-12 ring-1 ring-gray-900/5">
                <div
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />
              </div>
            </div>

            <div className="mt-20">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-px">
                <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12">
                  <form
                    onSubmit={handleSubmit(onSubscribe)}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Subscribe to Our Newsletter
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Get the latest articles and insights delivered straight to
                        your inbox.
                      </p>
                    </div>
                    <div className="lg:flex-row flex-col space-y-3 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="sr-only"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className={`flex-1 px-6 py-3 rounded-xl dark:bg-gray-800 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogDetails;