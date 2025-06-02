import React from "react";
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/assets/blog-bg.jpeg")' }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen px-4 py-12">
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogPage;