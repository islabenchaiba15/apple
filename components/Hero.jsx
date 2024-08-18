import React from "react";

function Hero() {
  return (
    <div className="flex-col flex w-full h-screen bg-gray-950 relative">
      <h1 className="lg:text-4xl text-xl md:text-2xl text-gray-300 font-medium mx-4 absolute mt-4 ml-8 z-10">
        Iphone 13 pro max
      </h1>
      <video className="w-full h-full object-cover absolute inset-0 " autoPlay muted loop>
        <source src="/video/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-between items-center mx-4 absolute inset-0 -translate-y-1/2 top-1/2	">
        <p className="text-4xl font-bold lg:text-8xl text-transparent bg-gradient-to-r bg-clip-text bg-transparent from-pink-400 to-pink-600">
          So cold
        </p> 
        <p className="text-4xl font-bold lg:text-8xl text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-purple-600">
          So bold
        </p>
      </div>
    </div>
  );
}

export default Hero;
