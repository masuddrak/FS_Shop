import Image from "next/image";
import React from "react";
import heroImage from "../../../public/hero.png";
import chart_bar from "../../../public/chart-bar.gif";
import analytics from "../../../public/analytics.gif";
import linchart from "../../../public/linchart.gif";
import star from "../../../public/star.svg";
import { FaArrowRight } from "react-icons/fa";

import "./Banner.css";
import BaseBtn from "@/components/sheard/button/BaseBtn";
const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:bg-gradient-to-r from-[#BBD7ED] via-white to-[#F4FAFE] w-full h-full absolute inset-0 z-0" />
      <div className="gradient-overlay absolute inset-0 z-10 pointer-events-none" />

      <div className="relative z-20">
        <Image
          className="absolute -top-[5%] left-[3%]  w-[30%]"
          src={star}
          width={500}
          height={100}
          alt="banner"
        ></Image>
        <div className="container mx-auto lg:grid grid-cols-6 items-center px-5 md:px-5 lg:px-0 gap-10 py-12 md:py-28 lg:py-48 space-y-6">
          <article className="col-span-3 space-y-4 text-center md:text-left">
            <h1 className="">
              Empowering <span className="primary_tx">Innovation,</span>
              <br /> Transforming Technology
            </h1>
            <p>
              At OnnoRokom Projukti Limited, we are revolutionizing industries
              with cutting-edge software solutions tailored to your unique
              needs. Our diverse and talented team is dedicated to delivering
              top-quality, secure, and reliable software. Join us in creating a
              future where technology seamlessly integrates into life and
              business, driving efficiency and connectivity.
            </p>
            <BaseBtn>
              Get Started <FaArrowRight></FaArrowRight>
            </BaseBtn>
          </article>
          <article className="col-span-3 relative">
            <Image
              className="absolute -top-[5%] -right-[3%] shadow-2xl rounded-md w-[30%]"
              src={chart_bar}
              width={500}
              height={100}
              alt="banner"
            ></Image>

            <Image
              className="absolute -bottom-[5%] -left-[3%] shadow-md md:shadow-2xl rounded-md w-[20%]"
              src={analytics}
              width={500}
              height={100}
              alt="banner"
            ></Image>

            <Image
              className="absolute w-[80%]  top-[43%] left-[18%] h-[15%]"
              src={linchart}
              width={100}
              height={100}
              alt="banner"
            ></Image>

            <Image
              className="w-full object-cover shadow-xl md:shadow-2xl"
              src={heroImage}
              width={1000}
              height={100}
              alt="banner"
            ></Image>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;
