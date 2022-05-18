import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.css";
import { projects } from "../Utils/utils";
import Titles from "../Utils/Titles/Titles";
import useWindowsSize from "../Hooks/useWindowsSize";
import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";

export default function Projects() {
  const lenguage = useSelector((state) => state.lenguage);
  const handleOnClick = (e) => {
    let path = e.target.id;
    window.open(path);
  };
  let size = useWindowsSize();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div style={{ margin: "20px 0" }}></div>
      <Titles title={lenguage ? "Mis proyectos" : "My projects!"} />
      <div className="projects">
        {projects.map((project, index) => (
          <Animated
            animationIn={
              project.animation === "fade-left"
                ? "bounceInLeft"
                : "bounceInRight"
            }
            animationOut="fadeOut"
            animationInDuration={1000}
            isVisible={true}
            key={index}
            className="image_project"
          >
            <img
              src={project.img}
              alt="Oh no!"
              style={{ width: "100%" }}
              className="hover"
              id={project.id}
              onClick={(e) => handleOnClick(e)}
            />
            {size.width > 750 ? (
              <p
                className="text_projects"
                id={project.id}
                onClick={(e) => handleOnClick(e)}
              >
                {lenguage ? project.textSpanish : project.textEnglish}
              </p>
            ) : (
              <p className="text_projects" id={project.id}>
                {lenguage ? project.textSpanish : project.textEnglish}
              </p>
            )}
          </Animated>
        ))}
        <div className="margin"></div>
      </div>
    </div>
  );
}
