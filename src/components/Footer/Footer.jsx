import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import Lenguage from "../Lenguage/Lenguage";

import "./style.css";
import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";

const socialMedias = [
  {
    href: "https://www.linkedin.com/in/lunia98/",
    name: "",
    icon: <LinkedInIcon fontSize="default" style={{ color: "white" }} />,
    dur: 300,
  },
  {
    href: "https://www.linkedin.com/in/lunia98/",
    name: "",
    icon: <GitHubIcon fontSize="default" style={{ color: "white" }} />,
    dur: 500,
  },
  {
    href: "https://www.linkedin.com/in/lunia98/",
    name: "cv",
    icon: <GetAppIcon fontSize="default" style={{ color: "white" }} />,
    dur: 700,
  },
];

export default function Footer() {
  const lenguage = useSelector((state) => state.lenguage);
  return (
    <div className="container_footer">
      <div className="social_medias">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>Follow me here ;)</div>
        </Animated>
        {socialMedias.map((n) => (
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={n.dur}
          >
            <a
              rel="noreferrer"
              target="_BLANK"
              href={n.href}
              className={n.name && "icon_Cv"}
            >
              {n.name && <h6 style={{ margin: 0 }}>CV</h6>}
              {n.icon}
            </a>
          </Animated>
        ))}
        {/* <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://github.com/Lunia98"
        >
          <LinkedInIcon fontSize="default" style={{ color: "white" }} />
        </a>
        { <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://github.com/Lunia98"
        >
          <GitHubIcon fontSize="default" style={{ color: "white" }} />
        </a>
        <a
          target="_BLANK"
          href="https://drive.google.com/file/d/1e0_Dvun9sUsNsqlhkUjF2odyqyMX-u2w/view?usp=sharing"
          rel="noreferrer"
          className="icon_Cv"
        >
          <h6 style={{ margin: 0 }}>CV</h6>
          <GetAppIcon fontSize="default" style={{ color: "white" }} />
        </a> */}
      </div>
      <div className="text_footer">
        <p>{lenguage ? "Hecho por Kevin" : "Made by Kevin"}</p>
      </div>
      <Lenguage />
    </div>
  );
}
