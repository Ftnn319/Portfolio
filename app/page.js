"use client"
import { useRef } from "react";

import Hero from "@/components/hero";
import Header from "@/components/header";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { Exp } from "@/components/workexp";
export default function Home() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    price: useRef(null),
    blog: useRef(null),
  }
  const handleScroll = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="m-6 flex flex-col gap-6" ref={refs.home}>
    <Header onNavigate={handleScroll} />
    <div ref={refs.about}>
      <Hero />
    </div>
    <div className="bg-gray-100 rounded-md">
      <div ref={refs.portfolio}>
        <Container/>
        <Card/>
      </div>
    </div>
    <div ref={refs.price}>
      <Exp/>
    </div>
  </div>
  );
}
