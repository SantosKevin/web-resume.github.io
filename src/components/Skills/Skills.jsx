import React from "react";
import { useSelector } from "react-redux";
import UIfx from "uifx";
import front from "../../assets/images/front.png";
import useKey from "../Hooks/useKey";
import useWindowsSize from "../Hooks/useWindowsSize";
import Titles from "../Utils/Titles/Titles";
import { icons } from "../Utils/utils";
import "./style.css";

export default function Skills({ countIcon, setCountIcon, up, setUp }) {
  const lenguage = useSelector((state) => state.lenguage);
  const size = useWindowsSize();

  const mappedIcons = icons.map((obj) => {
    if (size.width > 750) {
      return (
        <div
          className="container_icon_skills animation"
          style={{ top: "40%", left: obj.position }}
        >
          <img src={obj.icon} alt="Oh no!" className={"icon "} />
          <p className={"text_skills"}>{obj.text}</p>
        </div>
      );
    } else {
      return (
        <div
          className="container_icon_skills animation"
          style={{ top: obj.positionUp, left: obj.positionLeft2 }}
        >
          <img src={obj.icon} alt="Oh no!" className={"icon "} />
          <p className={"text_skills"}>{obj.text}</p>
        </div>
      );
    }
  });

  const handleKeyDown = (event) => {
    if (event.type === "keydown" && event.keyCode === 38 && countIcon < 14) {
      setUp(true);
      setCountIcon(countIcon + 1);
    } else if (
      event.type === "keyup" &&
      event.keyCode === 38 &&
      countIcon < 14
    ) {
      setUp(false);
    } else if (countIcon === 14) {
      setUp(false);
    }
  };

  useKey(38, handleKeyDown);

  return (
    <div style={{ height: "100vh" }}>
      <Titles title={lenguage ? "Mis habilidades" : "My skills!"} />
      <div className="container">
        <div className="card">
          <div class="imgBx">
            <img src={front} alt="icon" />
          </div>
          <div className="contentBx">
            <div className="size">
              {icons.map((i) => (
                <img src={i.icon} alt="icon" width={"10%"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
