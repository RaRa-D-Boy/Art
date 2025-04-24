"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import ThemeToggle from "@/app/utils/theme/themeToggle";
import { ThemeContext } from "@/app/utils/theme/theme";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleDisplayMenu = () => {
    setShowMenu(!showMenu);
  };

const router = useRouter()

  return (
    <section className="p-3 text-sm">
      <nav className="flex gap-x-2 items-center flex-nowrap overflow-x-scroll">
        <div
          className={`flex text-xs md:text-sm justify-between items-center flex-grow flex-nowrap py-3 px-4 rounded-2xl ${
            theme === "dark"
              ? " bg-neutral-800 text-white"
              : "bg-white text-black"
          }`}
        >
          <button onClick={()=>router.push("/")} type="button" className="w-[150px] logo font-bold text-lg line-through hover:cursor-pointer">
            ARt<span className=" transform rotate-180">i</span>lARy
          </button>
          <button
            type="button"
            onClick={handleDisplayMenu}
            className="bg-transparent  hover:cursor-pointer"
          >
            {!showMenu ? <FiPlus /> : <FiMinus />}
          </button>
        </div>
        <div className={showMenu ? "block" : "menu hidden"}>
          <ul className="flex gap-x-2">
            <li>
              <Link
                href=""
                className={`py-4 px-8 text-xs md:text-sm rounded-2xl hover:bg-transparent ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                {" "}
                About
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`py-4 px-8 text-xs md:text-sm rounded-2xl hover:bg-transparent ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                {" "}
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/canvas"
                className={`py-4 px-8 text-xs md:text-sm rounded-2xl hover:bg-transparent ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black "
                }`}
              >
                {" "}
                Create
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`py-4 px-8 text-xs md:text-sm rounded-2xl hover:bg-transparent ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ThemeToggle />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-700 rounded-2xl py-4  px-4 md:px-8 text-xs md:text-sm text-white"
          >
            <p className="min-w-[120px]">Reach Us</p>
          </button>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
