import React from "react";
import useWindowsSize from "../Hooks/useWindowsSize";
import "./style.css";
import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";

export default function Home({ pos }) {
  const lenguage = useSelector((state) => state.lenguage);
  let size = useWindowsSize();
  return (
    <div className="container_home">
      <div className="presentation">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
          className="presentation-child"
        >
          <h1>{lenguage ? "¡Bien, empezemos!" : "Okay, let 's start! "}</h1>

          <h2>
            {lenguage
              ? "Dije esto en febrero del 2021: Soy desarrolladora web FullStack.  ¡Me encuentro buscando un trabajo que me desafíe día a día! Constantemente estoy mejorando mis conocimientos, soy proactiva y me encanta trabajar en equipo."
              : "I'm Kevin Santos. I’m 21 years old. I'm a web developer. I have been working at a software company called Openix for 1 year more or less. I participated in some interesting projects where I learnt many things."}
          </h2>
          <br />
          <h2>
            {lenguage
              ? "Ahora: Trabajo como Software Engineer en Auth0! Muchas gracias a todos por el apoyo! :)"
              : "I consider myself an autodidact and a reliable person. People can count on me. I like to help other people. I think it is a very helpful way to become a better developer, I like to learn new things. I like challenges. I also like to be punctual with schedules, and complete my tasks in the estimated time."}
          </h2>

          {size.width < 750 ? (
            <h3 style={{ textAlign: "center" }}>
              {lenguage
                ? "Usa las flechas (+) para navegar en esta página"
                : "Use the arrows (+) to navigate this page."}
            </h3>
          ) : (
            <h3 style={{ textAlign: "center" }}>
              {lenguage
                ? "Solo presiona las teclas de flecha en tu teclado para navegar en esta página"
                : " Just press the arrow keys on your keyboard to navigate this page."}
            </h3>
          )}
        </Animated>
        <div className="image_Lu_pixel" />
      </div>
    </div>
  );
}
