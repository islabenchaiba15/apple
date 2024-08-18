"use client";
import ColorContext from "@/context/colorContext";
import { useGSAP } from "@gsap/react";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import React, { Suspense, useContext, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Model2 = dynamic(() => import('../public/3D-Model/Scene2'), { ssr: false })
function Color() {
  const { materials } = useGLTF("/3D-Model/scene.gltf");

  const container3 = useRef(null);
  const right = useRef(null);
  const left = useRef(null);
  const text = useRef(null);
  const {currentColor,setCurrentColor,updateColor}=useContext(ColorContext)  
  useEffect(()=>{
    right.current.style.backgroundColor = `rgba(${currentColor.rgb},0.8)`;
    left.current.style.backgroundColor = `rgba(${currentColor.rgb},0.4)`;
    text.current.innerText = currentColor.text;
    text.current.style.color = currentColor.color;
  },[currentColor])
  const updateColorr = (color, textt, rgbColor) => {
    if (text.current && right.current && left.current) {
      materials.Body.color.set(color);
      
    }
  };

  useGSAP(() => {
    let elem = container3.current;
    if (!elem) return;

    const t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: `+=${elem.offsetWidth}`,
          scrub: true,
          pin: true,
        },
      })
      .to(elem, {
        onStart: () => updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206"),
        onReverseComplete: () =>
          updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206"),
        duration: 1,
      })
      .to(elem, {
        onStart: () => updateColor("#505F4E", "Alpine Green", "80, 95, 78"),
        onReverseComplete: () =>
          updateColor("#505F4E", "Alpine Green", "80, 95, 78"),
        duration: 1,
      })
      .to(elem, {
        onStart: () => updateColor("#574f6f", "Deep Purple", "87, 79, 111"),
        onReverseComplete: () =>
          updateColor("#574f6f", "Deep Purple", "87, 79, 111"),
        duration: 1,
      })
      .to(elem, {
        onStart: () => updateColor("#A50011", "Red", "165, 0, 17"),
        onReverseComplete: () => updateColor("#A50011", "Red", "165, 0, 17"),
        duration: 1,
      })
      .to(elem, {
        onStart: () => updateColor("#215E7C", "Blue", "33, 94, 124"),
        onReverseComplete: () => updateColor("#215E7C", "Blue", "33, 94, 124"),
        duration: 1,
      })
      .to(elem, {
        onStart: () => updateColor("#F9E5C9", "Gold", "249, 229, 201"),
        onReverseComplete: () =>
          updateColor("#F9E5C9", "Gold", "249, 229, 201"),
        duration: 1,
      });
  }, []);

  return (
    <div
      ref={container3}
      className="w-full relative h-screen flex justify-between items-center"
    >
      <div ref={right} className="bg-blue-300/80 h-full w-1/2"></div>
      <div ref={left} className="bg-blue-300/40 h-full w-1/2">
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={2} />
          <directionalLight intensity={3} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
          <Environment preset="sunset" />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      <h1
        ref={text}
        className="brightness-110	 absolute top-[50%] left-[50%] rotate-90 text-5xl font-semibold -translate-x-[50%]"
      >
        Blue Sierra
      </h1>
    </div>
  );
}

export default Color;
