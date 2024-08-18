'use client'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
function Design() {
    const container=useRef(null)
    const textOne=useRef(null)
    const textTwo=useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        let t1 =gsap.timeline({
            scrollTrigger:{
                trigger:container.current,
                start:"top-=400 top",
                end:"bottom bottom",
                scrub:true,
                markers:true
            }
        })
        t1.fromTo(textOne.current,{x:0},{x:"10%"},"key1")
        t1.fromTo(textTwo.current,{x:0},{x:"10%"},"key1")
    },[])
  return (
    <div ref={container} className='flex w-full flex-col  gap-36 md:gap-24 my-10 md:my-20 '>
        <h1 ref={textOne}className='md:text-5xl w-[90%] break-words sm:text-4xl text-2xl lg:text-7xl text-black font-semibold'>Flaw-less Design With Strong Durability</h1>
        <h1 ref={textTwo} className=' self-end	 md:text-5xl w-[90%] break-words sm:text-4xl text-2xl lg:text-7xl text-black font-semibold '>Flat-Edge Design With Toughest Smartphone Glass </h1>
    </div>
  )
}

export default Design