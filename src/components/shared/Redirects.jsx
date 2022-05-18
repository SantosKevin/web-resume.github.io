import React from "react";
import { Redirect } from "react-router-dom";
const links = ["", "home", "projects", "skills", "contact"];

const Redirects = ({ pos }) => {
  return <Redirect to={`/resume-web/${links[pos]}`} />;
};

export default Redirects;
