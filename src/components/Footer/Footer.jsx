import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Lenguage from "../Lenguage/Lenguage";
import "./style.css";

const socialMedias = [
  {
    href: "https://github.com/SantosKevin",
    name: "",
    icon: <GitHubIcon fontSize="default" style={{ color: "white" }} />,
    dur: 500,
  },
  {
    href: "https://drive.google.com/file/d/1RuUFqaH67beD7JRr6rCD_2ecHWra1Ykb/view",
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
        {socialMedias.map((n, index) => (
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={n.dur}
            key={index}
          >
            <a
              rel="noreferrer"
              target={"_blank"}
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
