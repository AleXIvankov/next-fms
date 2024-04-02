"use client";
import React from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky z-50 w-full h-20 bg-black mx-auto justify-between">
      <div className="flex flex-row justify-between items-center w-full p-5 max-h-18 mx-auto px-2 2xl:px-16">
        <Link href="/" className="w-full">
          <img
            data-hide-on-theme="dark"
            src="/img/logo-fms-no-background1.svg"
            alt="logo-fms"
            className="w-full h-6 mx-auto"
          />
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
            ? "fixed right-0 top-20 p-5 sm:w-[65%] md:w-[35%] xl:w-[25%] h-auto bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 ease-in duration-500"
            : "fixed right-[-100%] top-20 p-5 duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={handleNav}
            className="cursor-pointer text-gray-700 dark:text-gray-200"
          >
            <XMarkIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-left ">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                Home
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                Blog
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                Cartes de réglages
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                Aide au diagnostique
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                B5000
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                Contact
              </li>
            </Link>

            <Link href="/pages/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="uppercase hover:border-b text-xl py-3"
              >
                About us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
