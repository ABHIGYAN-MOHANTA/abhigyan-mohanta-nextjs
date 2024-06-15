import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import blogs from "../blogs";
const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="hero flex flex-wrap justify-center items-center">
        {blogs.blogs.map((blog: any) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="m-4">
              <Cards
                title={blog.title}
                badge={blog.badge}
                desc={blog.description}
                tag1={blog.tag1}
                tag2={blog.tag2}
                pic={blog.coverImage}
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </main>
  );
};
export default HomePage;
