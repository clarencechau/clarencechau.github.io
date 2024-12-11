import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function MyButton({ children, onClick, link, target, newWindow, className }) {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <Link
      to={link}
      target={target}
      className="btn-mobile"
      rel="noopener noreferrer"
      style={{ textDecoration: "none"}}
    >
      <button
        className={className}
        onClick={newWindow === "new-window" ? handleClick : onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default MyButton;