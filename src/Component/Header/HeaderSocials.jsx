import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/arifeta-mulugeta-bb6921353" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Arifeta" target="_blank">
        <FaGithub />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100080538771083" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
