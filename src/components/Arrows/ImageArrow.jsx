import React from "react";
import arrowleft from "../../images/arrowleft.png";
import arrowright from "../../images/arrowright.png";

const ImageArrow = ({ left, active }) => {
  return (
    <img
      src={left ? arrowleft : arrowright}
      alt={left ? "<--" : "-->"}
      className={active ? "presskey arrow" : "arrow"}
    />
  );
};

export default ImageArrow;
