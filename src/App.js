import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import useWindowsSize from "./components/Hooks/useWindowsSize";
import ButtonMobile from "./components/Buttons/ButtonMobile/ButtonMobile";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  // var posLocation = function () {
  //   switch (location.pathname) {
  //     case "/resume-web/":
  //       return 0;
  //     case "/resume-web/home":
  //       return 1;
  //     case "/resume-web/projects":
  //       return 2;
  //     case "/resume-web/skills":
  //       return 3;
  //     case "/resume-web/contact":
  //       return 4;
  //     default:
  //       return 0;
  //   }
  // };

  function posLocation(type) {
    return {
      "/web-resume.github.io/": 0,
      "/web-resume.github.io/home": 1,
      "/web-resume.github.io/projects": 2,
      "/web-resume.github.io/skills": 3,
      "/web-resume.github.io/contact": 4,
    }[type];
  }

  let size = useWindowsSize();
  // let result = posLocation;
  console.log(location.pathname);
  let result = posLocation(location.pathname);
  const [pos, setPos] = useState(result | 0);
  const [countIcon, setCountIcon] = useState(0);
  const [up, setUp] = useState(false);

  return (
    <Route path="/web-resume.github.io/">
      <Route
        exact
        path="/web-resume.github.io/"
        render={() => <Intro setPos={setPos} />}
      />
      <Route
        exact
        path="/web-resume.github.io/home"
        render={() => <Home pos={pos} />}
      />
      <Route exact path="/web-resume.github.io/projects" component={Projects} />
      <Route
        exact
        path="/web-resume.github.io/skills"
        render={() => (
          <Skills
            countIcon={countIcon}
            up={up}
            setUp={setUp}
            setCountIcon={setCountIcon}
          />
        )}
      />
      <Route exact path="/web-resume.github.io/contact" component={Contact} />
      <Footer />
      {size.width < 750 ? (
        <ButtonMobile
          pos={pos}
          setPos={setPos}
          setCountIcon={setCountIcon}
          countIcon={countIcon}
          up={up}
          setUp={setUp}
        />
      ) : (
        result !== 0 && <Arrows pos={pos} setPos={setPos} />
      )}
    </Route>
  );
}

export default App;
