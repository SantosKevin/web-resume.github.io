import javaScript from "../../images/icons/js.png";
import react from "../../images/icons/react.png";
import material from "../../images/icons/material.png";
import angular from "../../assets/images/ang.png";
import vue from "../../assets/images/vue.png";
import homeiGiftYou from "../../assets/images/dev1.png";
import plantswebsite from "../../assets/images/dev2.png";
import potrero from "../../assets/images/dev3.png";
import resumeWeb from "../../assets/images/proj1.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import redux from "../../assets/images/redux.png";

export const projects = [
  {
    img: potrero,
    textEnglish:
      "This is a dashboard to manage the access to the client services, here you have  different sections, for example, data analytics, projects and applications creation, role assignment and invitations to the organization, this screenshot is from the register section.",
    textSpanish:
      "Este es un tablero para administrar el acceso a los servicios del cliente, aquí tiene diferentes secciones, por ejemplo, análisis de datos, creación de proyectos y aplicaciones, asignación de roles e invitaciones a la organización, esta captura de pantalla es de la sección de registro.",
    id: "",
    animation: "fade-right",
  },
  {
    img: plantswebsite,
    textEnglish:
      "This is the new Openix website, it is a multi-language website with general information about the company, events, pictures, videos and so on. This was developed with React, this screenshot is from the Home section.",
    textSpanish:
      "Este es el nuevo sitio web de Openix, es un sitio web en varios idiomas con información general sobre la empresa, eventos, fotos, videos, etc. Esto fue desarrollado con React, esta captura de pantalla es de la sección Inicio.",
    id: "https://openix.com.ar",
    animation: "fade-left",
  },

  {
    img: homeiGiftYou,
    textEnglish:
      "This is another dashboard, here you can access to the dashboard with two roles, a company and an admin role, with a company account you can handle your advertisements, create them with sounds or images, with an admin account you can approve or disapprove the advertisements and see statistics about them. Here is a screenshot of an Ad Creation.",
    textSpanish:
      "Este es otro tablero, aquí puede acceder al tablero con dos roles, una empresa y un rol de administrador, con una cuenta de empresa puede manejar sus anuncios, crearlos con sonidos o imágenes, con una cuenta de administrador puede aprobar o desaprobar el anuncios y ver estadísticas sobre ellos. Aquí hay una captura de pantalla de una creación de anuncios.",
    id: "",
    animation: "fade-right",
  },

  {
    img: resumeWeb,
    textEnglish:
      "And this is a small project that I made with Angular to show my frontend skills before start to search for a job.",
    textSpanish:
      "Y este es un pequeño proyecto que hice con Angular para mostrar mis habilidades de frontend antes de comenzar a buscar trabajo.",
    id: "https://web-project-example.herokuapp.com/home",
    animation: "fade-left",
  },
];

export const icons = [
  {
    icon: javaScript,
    text: "JavaScript",
    position: "2%",
    positionUp: "20%",
    positionLeft2: "6%",
  },
  {
    icon: css,
    text: "CSS",
    position: "9%",
    positionUp: "20%",
    positionLeft2: "23%",
  },
  {
    icon: html,
    text: "HTML",
    position: "15%",
    positionUp: "20%",
    positionLeft2: "37%",
  },
  {
    icon: react,
    text: "React",
    position: "21%",
    positionUp: "20%",
    positionLeft2: "51%",
  },
  {
    icon: redux,
    text: "Redux",
    position: "27%",
    positionUp: "20%",
    positionLeft2: "67%",
  },
  {
    icon: material,
    text: "Material UI",
    position: "33%",
    positionUp: "20%",
    positionLeft2: "84%",
  },
  {
    icon: angular,
    text: "NodeJS",
    position: "62%",
    positionUp: "35%",
    positionLeft2: "6%",
  },
  {
    icon: vue,
    text: "Express",
    position: "68%",
    positionUp: "35%",
    positionLeft2: "21%",
  },
];
