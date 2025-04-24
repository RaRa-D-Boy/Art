"use client";
import { ThemeContext } from "@/app/utils/theme/theme";
import React, { useContext } from "react";
import Image from "next/image";

const MaxCard = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <section
      className={` h-auto  w-full px-4 py-2   ${
        theme === "dark" ? " bg-black " : "bg-gray-200"
      }`}
    >
      <div
        className={` h-full w-full p-2 rounded-2xl  ${
          theme === "dark"
            ? " bg-neutral-800 text-white "
            : "bg-white text-black"
        } flex flex-col`} // Added flex and flex-col
      >
        <div className="grid grids-cols-1 md:grid-cols-2 py-6">
          <div className="px-4 py-6">
            <p className="text-xl md:text-2xl logo lg:text-4xl">pAintinG</p>
          </div>
          <div className="p-5">
            <p className="py-5 text-justify">
              At Artilary, we believe that painting is not just a skill; it&lsquo;s an
              expression of the soul. Whether you&lsquo;re an artist honing your
              craft, a collector seeking the perfect piece, or someone looking
              to dive into the world of painting, you&lsquo;ve found the right place.
            </p>
            <p className="py-5 text-justify">
              Our painting collection showcases a wide array of artistic
              techniques—from the timeless elegance of oil painting to the bold
              vibrance of acrylics. Each brushstroke, each hue, tells a story of
              dedication and vision. Whether you&lsquo;re a seasoned artist or a
              beginner, you can explore, purchase, or rent artwork that speaks
              to you. Every painting is a reflection of mastery, creativity, and
              passion.
            </p>
          </div>
        </div>
        <div className="flex-grow w-full relative min-h-[400px] xl:min-h-[600px]">
          <Image
            src="/art4.jpg"
            alt="img"
            layout="fill"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MaxCard;
