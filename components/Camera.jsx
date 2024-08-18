"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Camera() {
  const conoo = useRef(null);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const elements=useRef(null);
  useGSAP(()=>{
    const elems=gsap.utils.selector(elements)
    const divi=conoo.current
    let t1=gsap.timeline({
      scrollTrigger:{
        trigger:divi,
        start:"top top",
        end:"bottom+=500 bottom",
        scrub:true,
        pin:true,
        pinSpacing:true,
        markers:true,
      }
    }).to(video1.current,{scale:0.45},"key1").to(video2.current,{scale:0.6},"key1")

    elems("h1").forEach(title=>{
    t1.fromTo(title,{
      scrollTrigger:{
        trigger:title,
        start:"top top",
        end:"bottom bottom",
        scrub:true,
        markers:true
      },  
      x:100,
      opacity:0  
    },
    {
      x:0,
      opacity:1,
      ease:"power1.inOut"
    }
  
  )
    })
  },[])
  return (
    <div ref={conoo} className="w-full  h-screen bg-white relative z-40">
      <video
        ref={video1}
        className="w-full h-full object-cover absolute inset-0 z-20 "
        autoPlay
        muted
        loop
      >
        <source src="/video/drive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      <video
        ref={video2}
        className="md:w-[80%] w-full h-auto md:mr-[40%]  absolute  z-10"
        autoPlay
        muted
        loop
      >
        <source src="/video/skate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      <div ref={elements}className="flex flex-col z-40 items-end gap-5 absolute right-10 lg:right-24 w-1/2 h-1/2 top-[10%]">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-8xl mr-24 text-black">Ready.</h1>
        <h1 className="font-bold text-2xl md:text-5xl lg:text-8xl mr-12 text-black">Steady.</h1>
        <h1 className="font-bold text-2xl md:text-5xl lg:text-8xl  text-black">Action.</h1>

      </div>
    </div>
  );
}

export default Camera;
