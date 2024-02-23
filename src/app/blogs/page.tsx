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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(background.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content z-10">
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
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
