import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check out some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="My Personal Website"
              label="ReactJS"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Three Musketeers"
              label="Java"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Meepo is You"
              label="Python"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
