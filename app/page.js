import Battery from "@/components/Battery";
import Camera from "@/components/Camera";
import Color from "@/components/Color";
import Design from "@/components/Design";
import Display from "@/components/Display";
import Hero from "@/components/Hero";
import PhoneModel from "@/components/PhoneModel";
import Pricing from "@/components/Pricing";
import Processor from "@/components/Processor";
import Quote from "@/components/Quote";
import { ColorProvider } from "@/context/colorProvider";
import Image from "next/image";

export default function Home() {
  return (
    <ColorProvider>
      <div className="">
        <Quote />
        <Hero />
        <PhoneModel />
        <Design />
        <Display />
        <Processor />
        <Battery />
        <Color />
        <Camera />
        <Pricing />
      </div>
    </ColorProvider>
  );
}
