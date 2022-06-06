import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";

export default function ButtonStart() {
  const [state, setState] = useState(false);
  const lenguage = useSelector((state) => state.lenguage);
  useEffect(() => {
    //   setTimeout(() => {
    //     setState(true);
    //   }, 8000);
    //   clear the timer when unmount the component
    let timer = setTimeout(() => {
      setState(true);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    state && (
      <div>
        <button className="button-start">
          {lenguage ? "SI QUIERO!" : "YES, I DO!"}
        </button>
      </div>
    )
  );
}
