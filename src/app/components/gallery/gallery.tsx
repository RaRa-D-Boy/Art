"use client";
import { ThemeContext } from "@/app/utils/theme/theme";
import React, { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
const Gallery = () => {
  const { theme } = useContext(ThemeContext);

  const vids = [
    { vid: "/artV.mp4" },
    { vid: "/artV1.mp4" },
    { vid: "/artV2.mp4" },
    { vid: "/artV5.mp4" },
    { vid: "/artV4.mp4" },
    { vid: "/artV7.mp4" },
  ];

  return (
    <div
      className={`h-auto  w-full px-4  py-2 ${
        theme === "dark" ? " bg-black " : "bg-gray-200"
      }`}
    >
      <div className="flex gap-x-8 md:gap-3 flex-nowrap overflow-x-auto h-screen ">
        {vids.map((items, key) => (
          <div
          key={key}
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
            <div className="absolute inset-0 z-10 rounded-2xl  bg-gradient-to-t from-black/25 to-transparent flex items-end ">
              <div className="flex gap-x-4 p-4 items-center w-full justify-between">
                <div className="text-white mb-2 ">
                  <p className="imgText">olia danilevich</p>
                  <p className="text-sm text-gray-300">
                    Uploaded on January 26th, 2021 at 5:41 PM
                  </p>
                </div>
                <button type="button" className="bg-white rounded-2xl p-3">
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
            <video
              className="h-full  min-w-[400px] md:min-w-[800px] object-cover rounded-2xl aspect-video"
              muted
            >
              <source src={items.vid} type="video/mp4" />
            </video>
          </div>
        ))}
        
      </div>
    </div>
  );
};
export default Gallery;
