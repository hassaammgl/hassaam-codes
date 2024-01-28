"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaSass } from "react-icons/fa";
import { TbPolygon } from "react-icons/tb";
import { SiSolidity, SiTypescript } from "react-icons/si";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaAngular } from "react-icons/fa";
import style from "@/styles/language.module.scss";

const Languages = () => {
  // const controls = useAnimation();

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const windowHeight = window.innerHeight;

  //   // Adjust this threshold based on your preference
  //   const triggerPoint = windowHeight * 0.7;

  //   if (scrollY > triggerPoint) {
  //     controls.start({ rotate: 0, opacity: 1 });
  //   } else {
  //     controls.start({ rotate: -180, opacity: 0 });
  //   }
  // };

  // useEffect(() => {
  //   controls.start({ rotate: -180, opacity: 0 });
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },);

  return (
    <marque>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>10</span>
      <span>11</span>
      <span>12</span>
    </marque>
  );
};

export default Languages;
