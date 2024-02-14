"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards/cards";
import ReadyStudying from "@/components/ReadyTostart/ready";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
//import { Metadata } from "next";
import React from "react";
import PopularQuiz from "@/components/PopulatQuiz/popularquiz";
import RequestBanner from "@/components/RequestCallBanner/requestbanner";
import Testimonial from "@/components/Testimonial/testiminal";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Cards/>
      <ReadyStudying/>
      <PopularQuiz/>
      <Blog/>
      {/* <Testimonial/> */}
      <RequestBanner/>

    
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>

);
}
