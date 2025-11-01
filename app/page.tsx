import React from "react";
import Prism from "../components/Prism";
import ShinyText from "../components/ShinyText";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-1 min-h-screen">
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={4}
          baseWidth={5.5}
          scale={3.5}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={0.8}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center grid place-items-center h-[calc(100vh-3.75rem)]">
        <div className="">
          <ShinyText
            text="Inventrico"
            disabled={false}
            speed={3}
            className="text-[clamp(2.6rem,5vw,3rem)] font-bold mb-5"
          />
          <p className="text-[clamp(1rem,4vw,1.2rem)] text-left md:text-center max-w-4xl mx-auto">
            {" "}
            Streamline your inventory tracking with our powerful, easy-to-use
            management system. Track products, monitor stock levels, and gain
            valuable insights.
          </p>
          <div className="flex flex-col md:flex-row  justify-center gap-5 md:items-center mt-10">
            <Button
              asChild
              className="text-[clamp(0.8rem,4vw,1rem)] cursor-pointer py-6 px-10 rounded-lg"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              className="text-[clamp(0.8rem,4vw,1rem)] py-6 cursor-pointer px-10 rounded-lg"
              variant={"outline"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
