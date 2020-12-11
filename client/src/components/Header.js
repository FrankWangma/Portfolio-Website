import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import logo from "../franklogo.png"

const Header = () => (
    <ReactNavbar color="rgb(18,18,18)"  
    logo={"https://svgshare.com/i/SG0.svg"}
    menu={[
        { name: "HOME", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
      
      social={[
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/frank-wangma/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/frank.wangma.5/",
          icon: ["fab", "facebook-f"],
        }
      ]}/>
);

export default Header;