"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
              href="/pages/about"
              rel="noopener noreferrer"
              className=" hover:text-sky-800 no-underline hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/pages/contact"
              rel="noopener noreferrer"
              className=" hover:text-sky-800 no-underline hover:underline"
            >
              Contact
            </Link>
          </Footer.LinkGroup>

          <Footer.LinkGroup className="gap-6">
            <Link
              href="https://www.facebook.com/hagergroup/"
              target="_blanc"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-800 cursor-pointer w-6 h-6" />
            </Link>
            <Link
              href="https://fr.linkedin.com/company/hagergroup"
              target="_blanc"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-teal-500 cursor-pointer w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/hagergroup/"
              target="_blanc"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-purple-700 cursor-pointer w-6 h-6" />
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div>
          <Footer.Copyright
            by="Hager Electro SAS / HAGER Group"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
