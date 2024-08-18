"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { AmbientLight, BoxGeometry, DirectionalLight } from "three";
import Axes from "./Axes";
import dynamic from "next/dynamic";
const Model = dynamic(() => import('../public/3D-Model/Scene'), { ssr: false })
function PhoneModel() {
  const boxRef = useRef();

  return (
    <div id="phone-model" className="w-full z-30 h-full fixed top-0 text-white">
      <Canvas camera={{fov:14}}>
        <ambientLight intensity={2}/>
        <directionalLight intensity={3}/>
        <Suspense fallback={null}>
            <Model/>
        </Suspense>
        <Environment preset="sunset"/>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default PhoneModel;
