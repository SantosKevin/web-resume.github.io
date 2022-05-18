import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "./style.css";
import Titles from "../Utils/Titles/Titles";
import { useSelector } from "react-redux";
import CustomInput from "../shared/CustomInput";
import { Animated } from "react-animated-css";

export default function Contact() {
  const lenguage = useSelector((state) => state.lenguage);
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const fieldsFirst = [
    {
      es: "Nombre",
      en: "First Name",
      value: input.name,
      name: "name",
    },
    {
      es: "Apellido",
      en: "LastName",
      value: input.lastName,
      name: "lastName",
    },
  ];

  const fieldsSecond = [
    {
      es: "Email",
      en: "Email",
      value: input.email,
      name: "email",
    },
    {
      es: "Asunto",
      en: "Subject",
      value: input.subject,
      name: "subject",
    },
  ];

  function sendEmail(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.lastName ||
      !input.email ||
      !input.subject ||
      !input.message
    ) {
      return swal({
        icon: "error",
        text: lenguage
          ? "Los campos no pueden estar vacíos"
          : "Fields cannot be empty",
      });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.email
      )
    ) {
      setInput({ ...input, email: "" });
      return swal({
        icon: "error",
        text: lenguage
          ? "Ups! El email no es correcto!"
          : "Oops! The email is not correct!",
      });
    }
    return swal({
      icon: "info",
      text: lenguage
        ? "El contacto no funciona por el momento :("
        : "This form does not work for the moment :(",
    });
    // emailjs
    //   .sendForm(
    //     "service_hrwiw7l",
    //     "template_rfeqytk",
    //     e.target,
    //     "user_WGttNJoyKgqWfe5xLLDpd"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       swal({
    //         icon: "success",
    //         text: lenguage
    //           ? "Gracias por contactarte conmigo!"
    //           : "Thanks for contacting me!",
    //       });
    //       setInput({
    //         name: "",
    //         lastName: "",
    //         email: "",
    //         subject: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Titles title={lenguage ? "Contáctame" : "Contact me!"} />
      <form className="container_form" onSubmit={sendEmail}>
        <h1 style={{ zIndex: "99" }}>
          {lenguage ? "¡Solo envíame un email!" : "Just send me an email!"}
        </h1>
        <Animated
          className="names_contact"
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          {fieldsFirst.map((f) => (
            <div key={f.name} className="inputBox">
              <CustomInput
                handleInputChange={(e) => handleInputChange(e)}
                label={lenguage ? f.es : f.en}
                name={f.name}
                value={f.value}
              />
            </div>
          ))}

          {fieldsSecond.map((f) => (
            <div key={f.name} className="inputBox">
              <CustomInput
                key={f.name}
                handleInputChange={(e) => handleInputChange(e)}
                label={lenguage ? f.es : f.en}
                name={f.name}
                value={f.value}
              />
            </div>
          ))}

          <div className="inputBox">
            <label>{lenguage ? "Mensaje" : "Message"}</label>
            <textarea
              className="input message"
              value={input.message}
              name="message"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {/* <div>
            <label>{lenguage ? "Nombre" : "First Name"}</label>
            <input
              type="text"
              className="input"
              value={input.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>{lenguage ? "Apellido" : "Last Name"}</label>
            <input
              type="text"
              className="input"
              value={input.lastName}
              name="lastName"
              onChange={(e) => handleInputChange(e)}
            />
          </div> */}
        </Animated>
        {/* <label>Email</label>
          <input
            type="text"
            className="input"
            value={input.email}
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
          <label>{lenguage ? "Asunto" : "Subject"}</label>
          <input
            type="text"
            className="input"
            value={input.subject}
            name="subject"
            onChange={(e) => handleInputChange(e)}
          /> */}
        <button type="submit" className="btn_start2">
          {lenguage ? "ENVIAR" : "SEND"}
        </button>
      </form>
    </div>
  );
}
