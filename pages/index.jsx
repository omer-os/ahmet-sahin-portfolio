import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <div className="">
      <div className="h-[15em] relative ">
        <Image src="/images/cover.jpg" objectFit="cover" layout="fill" />
      </div>

      <div className="w-[9em] z-20 h-[9em] relative -top-[5.6em] m-auto">
        <Image
          src="/images/person-img.png"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="bg-white w-full h-[10em] relative rounded-xl -top-40 z-10"/>
    </div>
  );
}
