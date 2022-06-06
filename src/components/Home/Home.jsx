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
              ? "Soy Kevin Santos. Tengo 21 años. Soy un desarrollador web. Llevo 1 año más o menos trabajando en una empresa de software llamada Openix. Participé en algunos proyectos interesantes donde aprendí muchas cosas."
              : "I'm Kevin Santos. I’m 21 years old. I'm a web developer. I have been working at a software company called Openix for 1 year more or less. I participated in some interesting projects where I learnt many things."}
          </h2>
          <br />
          <h2>
            {lenguage
              ? "Me considero una persona autodidacta y confiable. La gente puede contar conmigo. Me gusta ayudar a otras personas. Pienso que es una forma útil de volverse un mejor desarrollador, disfruto aprender cosas nuevas. Me encantan los retos. Me gusta ser puntual con los tareas y completarlas en el tiempo estimado."
              : "I consider myself an autodidact and a reliable person. People can count on me. I like to help other people. I think it is a very helpful way to become a better developer, I enjoy to learn new things. I love challenges. I also like to be punctual with schedules, and complete my tasks in the estimated time."}
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
