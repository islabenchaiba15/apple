'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Display() {
    const title=useRef(null)
    const container2=useRef(null)

    const feature1=useRef(null)
    const feature2=useRef(null)

    useGSAP(()=>{
        let t1= gsap.timeline({
            scrollTrigger:{
                trigger:container2.current,
                start:"top bottom",
                end:"center center",
                scrub:true
            }
        })
        t1.fromTo(title.current,{
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            delay:1,
        stagger:0.8
        })

        t1.fromTo(feature1.current,{
            opacity: 0,
            x: -300,
        },
        {
            opacity: 1,
            x: 0,
            duration:2

        })
        t1.fromTo(feature2.current,{
            opacity: 0,
            x: -300,
        },
        {
            opacity: 1,
            x: 0,
        })
    },[])
  return (
    <div ref={container2} className="bg-gray-950 w-full h-screen">
      <div className="mx-8 flex flex-col lg:justify-between justify-start gap-12  h-full py-8">
        <h1 ref={title} className="text-5xl w-fit lg:text-7xl mt-8  font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-900  ">
          Immersive <br /> Display
        </h1>
        <div ref={feature1} className="flex mt-4 flex-col md:flex-row-reverse ">
          <div className="w-full md:w-1/2">
            <h1 className="font-semibold md:text-2xl text-xl text-white">
              Big is better
            </h1>
            <p className="font-light text-md  text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugit minus, nobis doloribus placeat, suscipit sunt provident,
              odit velit fugiat possimus autem nihil inventore ipsa mollitia et
              commodi natus aliquid.
            </p>
          </div>
        </div>
        <div ref={feature2} className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <h1 className="font-semibold md:text-2xl text-xl text-white">
              Super Ratine XDR Display
            </h1>
            <p className="text-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugit minus, nobis doloribus placeat, suscipit sunt provident,
              odit velit fugiat possimus autem nihil inventore ipsa mollitia et
              commodi natus aliquid.
            </p>
          </div>
        </div>
        {/* <div className="flex-col flex my-10 items-center gap-5">
            <h1 className=" text-2xl lg:text-6xl text-transparent w-fit -rotate-45	 bg-clip-text bg-gradient-to-r from-pink-300 to-pink-700">Tougher than ever !</h1>
            <h1 className="text-2xl lg:text-6xl text-transparent w-fit -rotate-45	 bg-clip-text bg-gradient-to-r from-pink-300 to-pink-700">Every touch matters.</h1>

        </div> */}
      </div>
    </div>
  );
}

export default Display;
