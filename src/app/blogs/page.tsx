// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { getAllblogs } from "@/Services/Project/Blog";

// const BlogsPages = () => {
//   const [blogs, setBlogs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const { data } = await getAllblogs();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error loading blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[50vh]">
//         <div className="text-center space-y-2">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-opacity-50 mx-auto" />
//           <p className="text-primary font-bold text-lg font-sansita">Loading Blogs...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-screen-xl mx-auto py-12 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h2 className="lg:text-4xl md:text-3xl text-2xl text-primary font-bold bg-clip-text bg-gradient-to-b from-primary to-secondary tracking-tight font-arima">
//           My Blogs
//         </h2>
//       </motion.div>

//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//         {blogs?.map((blog, index) => (
//           <motion.div
//             key={blog._id}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative bg-base-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary/20 hover:border-primary/50"
//           >
//             <div className="relative">
//               <Image
//                 src={blog?.imageUrl}
//                 alt={blog?.title}
//                 height={300}
//                 width={500}
//                 className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
//               />
//               <span className="absolute top-2 left-2 bg-primary dark:text-black text-white text-xs font-sansita px-2 py-1 rounded-full">
//                 {blog?.topic}
//               </span>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-primary font-arima line-clamp-2">
//                 {blog?.title}
//               </h3>
//               <p className="text-sm text-foreground/70 dark:text-gray-300 mt-2 font-sansita line-clamp-3">
//                 {blog?.content}
//               </p>
//               <Button
//                 asChild
//                 className="mt-4 w-full bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary transition-all duration-300 font-sansita"
//               >
//                 <Link
//                   href={`/blogs/${blog._id}`}
//                   rel="noopener noreferrer"
//                   className="text-oleo-script"
//                 >
//                   Read More
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default BlogsPages;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAllblogs } from "@/Services/Project/Blog";
import { htmlToText } from "html-to-text";
import { toast } from "sonner";

interface Blog {
  _id: string;
  title: string;
  topic: string;
  content: string;
  imageUrl?: string;
  createdAt?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await getAllblogs();
        setBlogs(data || []);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setError("Failed to load blogs. Please try again later.");
        toast.error("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="text-center space-y-2">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-opacity-50 mx-auto" />
          <p className="text-primary font-bold text-lg font-sansita">
            Loading Blogs...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-red-500 font-sansita text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="lg:text-4xl md:text-3xl text-2xl text-primary font-bold bg-clip-text bg-gradient-to-b from-primary to-secondary tracking-tight font-arima">
          My Blogs
        </h2>
      </motion.div>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 font-sansita text-lg">
          No blogs found.
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-base-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary/20 hover:border-primary/50"
            >
              <div className="relative">
                <Image
                  src={blog.imageUrl || "/default-image.jpg"}
                  alt={`Cover image for ${blog.title}`}
                  height={300}
                  width={500}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-primary dark:text-black text-white text-xs font-sansita px-2 py-1 rounded-full">
                  {blog.topic}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary font-arima line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-foreground/70 dark:text-gray-300 mt-2 font-sansita line-clamp-3">
                  {htmlToText(blog.content, {
                    wordwrap: 130,
                    preserveNewlines: false,
                  }).slice(0, 150) + (blog.content.length > 150 ? "..." : "")}
                </p>
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-primary to-primary/60 text-white dark:text-black hover:from-secondary hover:to-primary transition-all duration-300 font-sansita"
                >
                  <Link href={`/blogs/${blog._id}`} rel="noopener noreferrer">
                    Read More
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
