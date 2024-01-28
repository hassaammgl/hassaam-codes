import React from "react";
import { FaGithub,  FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import style from "@/styles/footer.module.scss";
import Link from "next/link";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>CONNECT WITH ME</h1>
      <div className={style.links}>
        <Link className={style.social} target="_blank" href={"https://github.com/hassaammgl"}>
          <span>Github</span>
          <FaGithub className={style.icon} />
        </Link>
        <Link className={style.social} target="_blank"  href={"https://www.linkedin.com/in/m-hassaam-mughal-91668a256/"}>
          <span>Linkedin</span>
          <FaLinkedin className={style.icon} />
        </Link>
        <Link className={style.social} target="_blank"  href={"https://twitter.com/MughalHassaam"}>
          <span>Twitter</span>
          <BsTwitterX className={style.icon} />
        </Link>
        <Link className={style.social} target="_blank"  href={"https://www.instagram.com/hassaammughal8844/"}>
          <span>Instagram</span>
          <FaInstagram className={style.icon} />
        </Link>
      </div>
      <div className={style.shoot}>
        <span>SHOOT ME A MAIL</span>
        <MdAttachEmail />
      </div>
      <div className={style.mainfooter}>
        <p>
          Built From Scratch with
          <span>
            <FaHeart className={style.hearticon} />{" "}
          </span>
          &copy; Copyright 2024. M  Hassaam Mughal. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
