import React, { useState } from "react";
import "./Blocks.css";

function Blocks(props) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    transform: isHovered ? "scale(1.2)" : "",
  };

  return (
    <a
      className="block-link"
      href={props.path}
      target={props.target}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        className={props.className}
        alt="Travel"
        src={props.src}
        style={style}
      />
    </a>
  );
}

export default Blocks;
