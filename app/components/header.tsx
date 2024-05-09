"use client";

import React from "react";
import ThemeButton from "./themeButton";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  NewspaperIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  BoltIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky z-50 w-full h-20 bg-slate-400  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black mx-auto justify-between border-b-2 border-indigo-600/50">
      <div className="flex flex-row justify-between items-center w-full p-5 max-h-18 mx-auto px-2 2xl:px-16">
        <Link href="/" className="w-full">
          <div>
            <h1 className="text-white dark:text-blue-400 font-extrabold text-2xl">
              #BZ-01
            </h1>
          </div>
        </Link>
        <img
          src="/img/Hager-Logo.svg"
          alt="hager-logo"
          className="w-full h-10"
        />

        <span className="w-full flex items-center justify-end gap-8 px-10">
          <div className="">
            <ThemeButton />
          </div>
          <div onClick={handleNav} className="cursor-pointer text-white">
            <Bars3Icon className="text-white w-8 h-8" />
          </div>
        </span>
      </div>
      <div
        className={
          menuOpen
            ? "sticky sm:fixed right-0 top-20 p-5 sm:w-[65%] md:w-[35%] xl:w-[25%] h-auto bg-sky-200 rounded-bl-2xl rounded-tr-2xl shadow-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-l border-b border-t border-indigo-600/50 ease-in duration-500"
            : "fixed right-[-100%] top-20 p-5 duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={handleNav}
            className="cursor-pointer text-gray-400 dark:text-gray-200"
          >
            <XMarkIcon className="w-6 h-6 hover:text-gray-700 " />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-left ">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center gap-4 hover:border-b text-xl py-3"
              >
                <HomeIcon className="w-5 h-5 " />
                Home
              </li>
            </Link>

            <Link
              href="https://hagerblogapp.onrender.com/"
              target="_blanc"
              rel="noopener noreferrer"
            >
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center border-b-[#0000E7] hover:text-[#0000E7] gap-4 hover:border-b text-xl py-3"
              >
                <NewspaperIcon className="w-5 h-5 " />
                Blog
              </li>
            </Link>

            <Link href="/pages/cards">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center border-b-[#0000E7] hover:text-[#0000E7] gap-4 hover:border-b text-xl py-3"
              >
                <CogIcon className="w-5 h-5 " />
                Cartes de réglages
              </li>
            </Link>

            <Link href="/pages/diagnostic">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center border-b-[#0000E7] hover:text-[#0000E7] gap-4 hover:border-b text-xl py-3"
              >
                <WrenchScrewdriverIcon className="w-5 h-5 " />
                Aide au diagnostique
              </li>
            </Link>

            <Link href="/pages/welding">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center gap-4 hover:border-b border-b-[#0000E7] hover:text-[#0000E7] text-xl py-3"
              >
                <BoltIcon className="w-5 h-5 " />
                Soudure
              </li>
            </Link>

            <Link href="/pages/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase flex items-center gap-4 hover:border-b border-b-[#0000E7] hover:text-[#0000E7] text-xl py-3"
              >
                <PhoneIcon className="w-5 h-5 " /> Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
