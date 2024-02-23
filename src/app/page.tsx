"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Raindrops from "@/components/Raindrops";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <Raindrops />
      <div
        className="hero min-h-screen z-10"
        style={{
          backgroundImage: "url(background.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Hello there</h1>
            <h1 className="mb-5 text-5xl font-bold">
              I&apos;m Abhigyan Mohanta
              <p className="text-sm">( Software Developer )</p>
            </h1>
            <p className="mb-5">
              Developer Intern at SuperEffective | Full Stack Dev | AI/ML |
              Built UnbreakableMe on Google Play | Building lots of stuff |
              Loves geeking out!
            </p>
            <a href="http://github.com/ABHIGYAN-MOHANTA" target="_blank">
              <button className="btn btn-primary mr-2 z-10">Github</button>
            </a>
            <a href="/blogs">
              <button className="btn btn-primary ml-2 z-10">Blogs</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
