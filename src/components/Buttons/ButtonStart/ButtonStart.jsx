import React, { useState, useEffect } from "react";
import "./style.css";

export default function ButtonStart() {
  const [state, setState] = useState(false);
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
        <button className="button-start">YES, I WANT TO!</button>
      </div>
    )
  );
}
