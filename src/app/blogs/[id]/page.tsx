import BlogDetails from '@/Portfolio/BlogDetails';
import { getSingleblog } from '@/Services/Project/Blog';
import React from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const blog = await getSingleblog(id);
    return (
        <div>
            <BlogDetails blog={blog.data}/>
        </div>
    );
};

export default BlogDetailsPage;