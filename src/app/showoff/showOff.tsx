"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../utils/theme/theme";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Carousel from "../components/carousel/carousel";

const ShowOff = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`h-auto  w-full px-4   ${
        theme === "dark" ? " bg-black " : "bg-gray-200"
      }`}
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 h-auto ">
        <div
          className={` rounded-2xl h-auto  w-full col-span-2 bg-transparent flex flex-col p-0`}
        >
          <div
            className={` grid grid-cols-1 lg:grid-cols-2 p-2 gap-2 rounded-2xl ${
              theme === "dark"
                ? "bg-neutral-800 text-white"
                : " bg-white text-black"
            }`}
          >
            <div className="relative h-[500px] lg:h-full">
              <Image
                src="/art6.jpg"
                alt="img"
                layout="fill"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className=" px-8 py-12 rounded-2xl ">
              <span
                className={`text-xl logo md:text-2xl lg:text-4xl   ${
                  theme === "dark" ? "text-gray-200 " : "text-gray-600"
                }`}
              >
                f0r tHe Artist
              </span>
              <p className="pt-12 text-justify">
                With every brushstroke, a universe is born. With every note, a
                soul is heard. You are the architect of dreams, the keeper of
                stories untold. Here at Artilary, we celebrate your artistry,
                your dedication, and the boundless power of your imagination.
                Your vision deserves to be seen. Your craft deserves to be
                shared. Together, we create the future of art.
              </p>
            </div>
          </div>
          <div className="flex flex-grow ">
            <div
              className={` grid grid-cols-1 lg:grid-cols-2 py-2 gap-2 last-grid rounded-2xl bg-transparent`}
            >
              <div
                className={`p-8 rounded-2xl flex-grow card1 order-2 md:order-1 ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black"
                } `}
              >
                <div
                  className={` p-4 h-full rounded-2xl   flex-grow relative flex flex-col justify-between  ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white"
                      : "text-black bg-white"
                  }`}
                >
                  <div>
                    <p className="text-xl logo md:text-2xl lg:text-4xl font-light">
                      f0r Art l0VeRs And c0llect0Rs
                    </p>{" "}
                    {/* Moved to the top */}
                  </div>

                  <div className="flex flex-col justify-end">
                    <p className=" px-0 md:px-0 pt-12 text-justify">
                      {" "}
                      Art is more than an object; it&lsquo;s an experience, a feeling,
                      a connection. Every piece tells a story, speaks a
                      language, and stirs something deep within us. At Artilary,
                      we invite you to discover the work of artists who are
                      redefining what it means to create. Immerse yourself in
                      art that moves, challenges, and inspires. Find your next
                      masterpiece today.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={` rounded-2xl flex-grow card2 order-1 md:order-2 overflow-hidden p-2 relative ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black"
                } `}
              >
                <Carousel/>
              </div>
            </div>
          </div>
        </div>
        <div
          className="min-h-[900px]  lg:h-full col-span-1 relative w-full"
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
                <p className="imgText">Lies</p>
                <p className="text-sm text-gray-300">
                Uploaded on December 31st, 2022 at 12:59 PM
                </p>
              </div>
              <button type="button" className="bg-white rounded-2xl p-3">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <video
            className="h-full w-full  object-cover md:object-top  xl:object-center rounded-2xl aspect-video"
            muted
          >
            <source src="/artV.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ShowOff;
