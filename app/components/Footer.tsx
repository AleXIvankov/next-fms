"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="border border-t-2 rounded-bl-none rounded-br-none border-indigo-500/50"
    >
      <div className="w-full max-w-7xl mx-auto justify-between">
        <div className="w-full justify-between flex items-center">
          <Footer.LinkGroup col className="text-sky-600 ">
            <Link
              href="/"
              target="_blanc"
              rel="noopener noreferrer"
              className=" hover:text-sky-800 no-underline hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/pages/contact"
              target="_blanc"
              rel="noopener noreferrer"
              className=" hover:text-sky-800 no-underline hover:underline"
            >
              Contact
            </Link>
          </Footer.LinkGroup>

          <Footer.LinkGroup className="gap-6">
            <FaFacebookF className="hover:text-blue-700 cursor-pointer w-6 h-6" />
            <FaXTwitter className="hover:text-gray-700 cursor-pointer w-6 h-6" />
            <FaInstagram className="hover:text-purple-700 cursor-pointer w-6 h-6" />
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div>
          <Footer.Copyright
            by="FMS App / HAGER Group"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
