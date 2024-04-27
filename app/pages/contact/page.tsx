"use client";

import { Alert, TextInput, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/app/components/ui/moving-border";

import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: form.name,
      to_name: "Alex",
      from_email: form.email,
      to_email: "telenok_8787@mail.ru",
      message: form.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full h-full">
        <section className=" relative flex lg:flex-row flex-col p-5 max-w-3xl items-center mx-auto min-h-screen gap-2">
          <div className="flex-1 min-w-[40%] flex flex-col items-center gap-2">
            <h1 className="text-center text-3xl text-gray-700 dark:text-gray-300 my-5 font-light">
              Contactez-nous
            </h1>
            <Image
              src={"/img/contact.png"}
              width={280}
              height={200}
              className="mx-auto rounded-3xl ml-8 border border-solid border-indigo-700 rotate-3"
              alt="Contact image"
            ></Image>
          </div>
          <form
            className="w-full flex flex-1 flex-col gap-5 mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 justify-between">
              <label className="text-gray-400 dark:text-gray-600 text-xs">
                Nom
                <TextInput
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Entrez votre nom.."
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="input "
                />
              </label>

              <label className="text-gray-400 dark:text-gray-600 text-xs">
                Email
                <TextInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="company@mail.com"
                  autoComplete="off"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="email"
                />
              </label>
              <label className="text-gray-400 dark:text-gray-600 text-xs">
                Message
                <Textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="textarea bg-slate-100 dark:bg-slate-700"
                />
              </label>
            </div>

            <Button
              type="submit"
              borderRadius="1rem"
              className="border-sky-900/50 w-full h-10 dark:border-indigo-600/50  text-black dark:text-white border-neutral-200 dark:border-slate-800"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Envoyer"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
