"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import img from "@/public/home/home3.png";
import { FaHandPeace } from "react-icons/fa";
import style from "@/styles/home.module.scss";

const Home = () => {
  // const controls = useAnimation();

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const windowHeight = window.innerHeight;

  //   // Adjust this threshold based on your preference
  //   const triggerPoint = windowHeight * 0.7;

  //   if (scrollY > triggerPoint) {
  //     controls.start({ x: "-100%" });
  //   } else {
  //     controls.start({ x: "0%" });
  //   }
  // };

  // useEffect(() => {
  //   controls.start({ x: 0 });
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },);

  return (
    // <motion.div
    //   className={style.home}
    //   initial={{ x: "-100%" }}
    //   animate={controls}
    //   exit={{ x: "-100%" }}
    //   transition={{duration: .5}}
    // >
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.box}>
          <FaHandPeace className={style.hand} />
          Hi There! I&apos;m M Hassaam Mughal
        </div>
        <div className={style.heading}>
          <h1>
            A <span>Frontend Engineer.</span> I Help Startups{" "}
            <span>Launch</span> And <span>Grow</span> Their Products.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim
            nobis ad laboriosam sit architecto corporis nostrum. Iusto fugiat
            dolorem reprehenderit veritatis aliquid. Recusandae provident
            consequatur totam repellendus fugiat magnam,
          </p>
        </div>
      </div>
      <div className={style.right}>
        <Image src={img} height={"5rem"} width={"1rem"}  className={style.img} alt="" />
      </div>
    </div>
    // </motion.div>
  );
};

export default Home;
