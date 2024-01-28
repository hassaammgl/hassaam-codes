"use client";

import React from "react";
import Image from "next/image";
import img from "@/public/home/home3.png";
import { FaHandPeace } from "react-icons/fa";
import style from "@/styles/home.module.scss";


const Home = () => {

  return (
 
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.box}>
          <FaHandPeace className={style.hand} />
          Hi There! I&apos;m M Hassaam Mughal
        </div>
        <div className={style.heading}>
          <h1>
            A <span>Full Stack Developer.</span> I Help Businesses to
            <span> Launch</span> And <span>Grow</span> Their Products.
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
        <Image
          src={img}
          height={"5rem"}
          width={"1rem"}
          className={style.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
