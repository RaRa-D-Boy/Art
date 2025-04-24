"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../utils/theme/theme";
import "@excalidraw/excalidraw/index.css";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar/navbar";
// import { convertToExcalidrawElements } from "@excalidraw/excalidraw";

// Dynamically import Excalidraw with SSR disabled
const ExcalidrawWrapper = dynamic(
    async () => (await import("./wrapper")).default,
    {
      ssr: false,
    },
  );

const Canvas = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div  
        className={` h-screen w-full  p-2 ${
            theme === "dark" ? " bg-black " : "bg-gray-200"
          }`}>
            <Navbar/>
            <ExcalidrawWrapper />
        </div>

    );
  };

export default Canvas;
