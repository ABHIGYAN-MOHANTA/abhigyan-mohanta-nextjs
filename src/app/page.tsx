"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Raindrops from "@/components/Raindrops";
import { Soulsucker } from "@/components/Soulsucker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <Raindrops />
      <div
        className="hero min-h-screen bg-black"
        style={
          {
            backgroundImage: "url(background.jpg)"
          }
        }
      >
        <div className="hero-overlay bg-opacity-40 bg-black inset-0"></div>
        <div className="hero-content text-center text-neutral-content z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Hello there</h1>
            <h1 className="mb-5 text-5xl font-bold">
              I&apos;m Abhigyan Mohanta
              <p className="text-sm">( Software Developer )</p>
            </h1>
            <p className="mb-5">
              FullStack Dev at Arthur Digital | Full Stack Dev | AI/ML |
              Built UnbreakableMe on Google Play | Building lots of stuff |
              Loves geeking out!
            </p>
            <div className="absolute -z-20 inset-0 flex items-center justify-center">
              <Soulsucker />
            </div>

            <a href="http://github.com/ABHIGYAN-MOHANTA" target="_blank">
              <button className="btn btn-primary mr-2 z-10">Github</button>
            </a>
            <a href="https://abhigyan.hashnode.dev/">
              <button className="btn btn-primary ml-2 z-10">Blogs</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
