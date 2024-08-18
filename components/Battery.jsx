'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Battery() {
  const scrollRef=useRef()
  useGSAP(() => {
    const elementes =gsap.utils.selector(scrollRef)
    const t1 = gsap.timeline({});
    elementes("ul").forEach(element => {
      t1.to(element,{
        opacity:1,
        scrollTrigger:{
          trigger:element,
          start:"top center+=200",
          end:"bottom center+=200",
          scrub:true
        }
      })
    });
  },[]);

  return (
    <div id="battery" className="bg-white h-screen flex-col  gap-2 flex pb-8 md:flex-row justify-end items-center mx-10">
      <div className="w-1/4">
      </div>
      <h1 className=" text-black font-semibold text-4xl md:text-5xl lg:text-8xl text-center md:text-left">
        Go all day with single charge ...
      </h1>
      <div ref={scrollRef} className="border-4 rounded-lg w-[180px]  h-96 flex flex-col my-1 border-gray-800 ">
        <ul className="m-1 opacity-0 rounded-md h-1/5 bg-gradient-to-r  from-pink-400 to-cyan-400"></ul>
        <ul className="rounded-md opacity-0 m-1 h-1/5 bg-gradient-to-r from-pink-400 to-cyan-400"></ul>
        <ul className="rounded-md m-1 opacity-0 h-1/5 bg-gradient-to-r from-pink-400 to-cyan-400"></ul>
        <ul className="rounded-md m-1 opacity-0 h-1/5 bg-gradient-to-r from-pink-400 to-cyan-400"></ul>
        <ul className="rounded-md m-1 opacity-0 h-1/5 bg-gradient-to-r from-pink-400 to-cyan-400"></ul>
      </div>
    </div>
  );
}

export default Battery;
