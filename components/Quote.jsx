'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
const Quote=()=> {
    const sectionRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        let elem = sectionRef.current
        ScrollTrigger.create({
            trigger:elem,
            start:'top top',
            pin: true,
            pinSpacing: false,
            pin:true,
        })
    },[])
  useGSAP(()=>{
    gsap.fromTo('.quote',{
        opacity: 0,
        y: 20,
    },
    {
        opacity: 1,
        y: 0,
        delay:1,
        stagger:0.3
    }
)
  },[])
  return (
    <div ref={sectionRef} className="flex-col gap-2 flex items-center justify-center w-full h-screen bg-gray-950 relative">
      <div  className="w-[90%] lg:w-[50%] quote">
        <p className="lg:text-3xl text-lg md:text-2xl  font-light w-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
          " You can't connect the dots looking forward
        </p>
      </div>
      <div className="w-[90%] lg:w-[50%] quote">
        <p className="lg:text-3xl text-lg md:text-2xl font-light w-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
        &nbsp;&nbsp;&nbsp;you can only connect them looking backward
        </p>
      </div>
      <div className="w-[90%] lg:w-[50%] quote ">
        <p className="lg:text-3xl text-lg md:text-2xl font-light w-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
        &nbsp;&nbsp;&nbsp;so you have to trust that dots
        </p>
      </div>
      <div className="w-[90%] lg:w-[50%] quote">
        <p className="lg:text-3xl text-lg md:text-2xl font-light w-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
        &nbsp;&nbsp;&nbsp;will somehow connect in your future"
        </p>
      </div>
      <div className="w-[90%] lg:w-[50%] quote mt-2 flex justify-end">
        <p className="lg:text-3xl text-lg md:text-2xl  text-center w-fit font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
          -Steve Jobs
        </p>
      </div>
    </div>
  );
}

export default Quote;
