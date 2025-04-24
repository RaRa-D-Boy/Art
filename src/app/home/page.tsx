"use client";
import React, { useContext } from "react";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import { ThemeContext } from "../utils/theme/theme";
// import { IoIosArrowRoundForward } from "react-icons/io";
const IoIosArrowRoundForward = React.lazy(() => import("react-icons/io").then(module => ({ default: module.IoIosArrowRoundForward })));

const HomePage = () => {
    const { theme } = useContext(ThemeContext);
    
  return (
    <section className={` h-screen w-full  ${ theme === "dark" ? " bg-black " : "bg-gray-200"}`}>
      <div className="h-[5%]">
        {" "}
        <Navbar />
      </div>
      <div className="flex gap-x-2 h-[95%] relative pt-8  md:px-4 flex-nowrap overflow-scroll">
        <div className={` p-4 h-full rounded-2xl w-[400px] min-w-[400px] flex-grow relative flex flex-col justify-between  ${ theme === "dark" ? "bg-neutral-800 text-white": "text-black bg-white"}`}>
          <div>
            <span className="text-xs text-blue-400 ">Culture</span>
            <p className="text-xl logo md:text-2xl  lg:text-4xl font-light">
              Art is tHe HeaRt, peRfected.
            </p>{" "}
            {/* Moved to the top */}
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-screen-sm text-base p-3  text-justify">
              {" "}
              Artilary is a vibrant platform dedicated to showcasing the
              extraordinary works of artists and creatives from every corner of
              the world. Whether you're here to discover awe-inspiring art, find
              your next masterpiece, or fuel your creative journey, Artilary
              brings together visionaries who transform imagination into
              reality. Unleash your passion—let the world see your art.
            </p>
          </div>
        </div>

        <div className="relative h-[100%] min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] bg-black rounded-2xl">
          <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end ">
            <div className="flex gap-x-4 p-4 items-center w-full justify-between">
              <div className="text-white mb-2 ">
                <p className="imgText">olia danilevich</p>
                <p className="text-sm text-gray-300">Uploaded on January 26th, 2021 at 5:41 PM</p></div>
              <button type="button" className="bg-white rounded-2xl p-3">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <Image
            src="/art7.jpg"
            alt="img"
            layout="fill"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div
          className="relative w-full"
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) video.play();
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) video.pause();
          }}
        >
          <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/25 to-transparent flex items-end ">
            <div className="flex gap-x-4 p-4 items-center w-full justify-between">
              <div className="text-white mb-2 ">
                <p className="imgText">olia danilevich</p>
                <p className="text-sm text-gray-300">Uploaded on January 26th, 2021 at 5:41 PM</p></div>
              <button type="button" className="bg-white rounded-2xl p-3">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <video className="h-full min-w-[400px] lg:w-full  object-cover rounded-2xl aspect-video" muted>
            <source src="/artV5.mp4" type="video/mp4" />
          </video>
        </div>
        
      </div>
    </section>
  );
};

export default HomePage;
