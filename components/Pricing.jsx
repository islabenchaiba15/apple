"use client";
import ColorContext from "@/context/colorContext";
import Model3 from "@/public/3D-Model/Scene3";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { Suspense, useContext, useEffect, useRef } from "react";

function Pricing() {
  const ui=useRef(null)
  const botton=useRef(null)
  const {currentColor,setCurrentColor,updateColor}=useContext(ColorContext)  
  useEffect(()=>{
    ui.current.style.backgroundColor=currentColor.color
  },[currentColor])
  return (
    <div className="h-screen w-full z-50 relative bg-white flex items-center justify-center">
      <div ref={ui} className="flex flex-row w-full h-full items-center justify-center gap-8 relative">
        <div className="flex flex-col items-center justify-start w-[50%] h-full ">
          <div className="flex flex-row gap-1 items-center mt-5">
            <p className="text-light">360°</p>
            <Image
              src={"/Images/rotate.png"}
              alt="rotate"
              width={20}
              height={20}
            />
          </div>
          <div className="w-full h-[60%]">
            <Canvas camera={{ fov: 14 }}>
              <ambientLight intensity={2} />
              <directionalLight intensity={3} />
              <Suspense fallback={null}>
                <Model3 />
              </Suspense>
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
          <div className="flex items-center justify-center flex-row gap-8 right-[10%] mt-4">
            <div
              className="p-3 rounded-full bg-blue-300 cursor-pointer"
              onClick={() => updateColor("#9BB5CE","Sierra Blue","155, 181, 206")}
            ></div>
            <div
              className="p-3 rounded-full bg-yellow-500 cursor-pointer"
              onClick={() => updateColor("#F9E5C9","Gold","249, 229, 201")}
            ></div>
            <div
              className="p-3 rounded-full bg-green-800 cursor-pointer"
              onClick={() => updateColor("#505F4E","Alpine Green","80, 95, 78")}
            ></div>
            <div
              className="p-3 rounded-full bg-purple-400 cursor-pointer"
              onClick={() => updateColor("#574f6f", "Deep Purple","87, 79, 111")}
            ></div>
            <div
              className="p-3 rounded-full bg-red-500 cursor-pointer"
              onClick={() => updateColor("#A50011","Red", "165, 0, 17")}
            ></div>
            <div
              className="p-3 rounded-full bg-blue-600 cursor-pointer"
              onClick={() => updateColor("#215E7C","Blue","33, 94, 124")}
            ></div>
          </div>
          <div className="flex flex-col items-center mt-6 py-5">
            <h1 className="font-medium text-black text-xl md:text-2xl lg:text:3xl">
              Iphone
            </h1>
            <h1 className="font-semibold text-black text-2xl md:text-3xl lg:text:4xl">
              Iphone 15 pro max
            </h1>
            <h1 className="font-medium text-black text-xl md:text-2xl lg:text:3xl">
              from 1099$
            </h1>
            <div className="flex gap-4 items-center">
              <button ref={botton}className="p-2 bg-blue-500 text-white cursor-pointer rounded-2xl">
                buy
              </button>
              <p className="text-blue-400 font-light text-xl md:text-2xl lg:text:3xl">
                learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
