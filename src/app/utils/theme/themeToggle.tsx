"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="bg-none">
      <button
        onClick={toggleTheme}
        className={`${ theme === "dark" ? "rounded-2xl p-4 bg-neutral-800 text-white" : "rounded-2xl p-4 bg-white text-black"}`}
      >
        {theme === "dark" ? <FaCloudMoon /> : <FaCloudSun className="text-black"/>}
      </button>
    </div>
  );
};

export default ThemeToggle;
