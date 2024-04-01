import React from "react";

export default function header() {
  return (
    <div className="flex flex-col  bg-black p-5 h-auto">
      <div className="flex justify-between items-center gap-5 w-full ">
        <img
          src="/img/logo-fms-no-background1.svg"
          alt="logo-fms"
          className="w-full h-8 mx-auto"
        />
        <img
          src="/img/Hager-Logo.svg"
          alt="hager-logo"
          className="w-full h-10"
        />
      </div>
    </div>
  );
}
