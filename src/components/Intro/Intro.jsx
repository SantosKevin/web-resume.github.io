import React, { useState, useEffect } from "react";
import ButtonStart from "../Buttons/ButtonStart/ButtonStart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { Animated } from "react-animated-css";

export default function Intro({ setPos }) {
  const lenguage = useSelector((state) => state.lenguage);
  const [state, setState] = useState(false);
  const [lips, setLips] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setState(true);
      setLips(true);
    }, 3500);
    let timer2 = setTimeout(() => {
      setLips(false);
    }, 2800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  //curly braces not necessary
  // const handleStart = () => {
  //   setPos(1);
  // };
  const handleStart = () => setPos(1);

  const text = ["<h1>", "</h1>"];
  return (
    <div>
      <div className="container_image_pixel">
        <Animated
          animationIn="zoomInUp"
          animationOut="fadeOut"
          isVisible={true}
          className="image_pixel"
          animationInDuration={2000}
        >
          <div className={lips ? "lips" : undefined} />
        </Animated>
      </div>
      <div className="container_intro">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
          className="command"
        >
          <p className="text-top">{text[0]}</p>
          <div style={{ position: "relative" }}>
            <p
              className="line anim-typewriter"
              style={{ border: state ? "none" : undefined }}
            >
              {lenguage ? "Hola! Soy Kevin" : "Hey! I'm Kevin"}
            </p>
            {state && (
              <p style={{ width: "12em" }} className="line anim-typewriter2">
                {lenguage
                  ? "¿Quieres ver mi resumen web?"
                  : "Do you wanna see my resume?"}
              </p>
            )}
          </div>
          <p className="text-top">{text[1]}</p>
        </Animated>
        <div onClick={handleStart} style={{ zIndex: 5 }}>
          <Link to="/resume-web/home">
            <ButtonStart />
          </Link>
        </div>
      </div>
    </div>
  );
}
