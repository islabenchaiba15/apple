import Image from "next/image";
import React from "react";

function Processor() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-gray-950  py-8 lg:py-16 md:py-12 ">
      <div className="flex md:flex-row gap-10 lg:gap-4 flex-col justify-start items-center mx-10 ">
        <p className="text-gray-400  text-md lg:w-1/3 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at architecto quaerat. Officia esse, veniam asperiores fugiat
          consequatur ducimus ad odio laudantium deserunt vel incidunt adipisci
          blanditiis architecto autem minima.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at architecto quaerat. Officia esse, veniam asperiores fugiat
          consequatur ducimus ad odio laudantium deserunt vel incidunt adipisci
          blanditiis architecto autem minima.
        </p>
        <div className=" gap-10  rounded-lg w-3/5 max-w-md mx-auto sm:w-3/5 md:w-3/5 lg:w-1/2 ">
          <Image
            src="/Images/A15-Bionic.jpg"
            alt="A15 Bionic Chip"
            width={1200}
            height={800}
            className="animate-pulse-shadow"
          />
        </div>
        <div className="w-full lg:w-1/3"></div>
      </div>
      <h1 className=" mt-3 lg:mt-8 text-3xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">
            Fastest Processor
          </h1>
    </div>
  );
}

export default Processor;
