import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="text-center left-[50%] fixed top-0 left-[50%] translate-x-[-50%] w-full bg-white shadow-xl text-2xl font-bold py-3">
        My Gallery
      </div>
      <div className="grid grid-cols-2 my-[4.5em] auto-rows-[13em] gap-4 p-3">
        <div className="bg-red-600 rounded-xl relative shadow-lg overflow-hidden">
          <Image src="/images/gallery-1.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-red-600 rounded-xl relative shadow-lg overflow-hidden">
          <Image src="/images/gallery-2.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-red-600 rounded-xl relative shadow-lg overflow-hidden">
          <Image src="/images/gallery-3.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-red-600 rounded-xl relative shadow-lg overflow-hidden">
          <Image src="/images/gallery-4.jpg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
