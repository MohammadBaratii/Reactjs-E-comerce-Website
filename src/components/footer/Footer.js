import React from "react";
import classes from "./Footer.module.css";
import { FaTelegramPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h2>Personal Project</h2>
      <div className={classes["footer__social-media"]}>
        <a href="https://t.me/thisis_mmd" target="_blank">
          <FaTelegramPlane />
        </a>
        <a href="mailto:mohammad.baratii.2004@gmail.com" target="_blank">
          <SiGmail />
        </a>
        <a href="https://github.com/MohammadBaratii" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-barati-0308a9208/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; Copyright 2022.</p>
      <p>
        Designed & Powered by <span>Mohammad Barati</span>.
      </p>
    </div>
  );
};

export default Footer;
