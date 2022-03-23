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
              src="images/gungeon.png "
              text="Gungeon"
              label="Java"
              path={{ pathname: "https://github.com/clarencechau/Gungeon"}}
              target="_blank"
            />
            <CardItem
              src="images/threemusketeers.png"
              text="Three Musketeers Simulator"
              label="Java"
              path={{ pathname: "https://github.com/clarencechau/ThreeMusketeers"}}
              target="_blank"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/badmintonzone.png"
              text="Badminton Zone"
              label="HTML"
              path={{ pathname: "http://www.badmintonzone.ca/"}}
              target="_blank"
            />
            <CardItem
              src="images/taskmanagerapp.png"
              text="Task Manager Application"
              label="React Native"
              path={{ pathname: "https://github.com/clarencechau/Task-Application"}}
              target="_blank"
            />
            <CardItem
              src="images/meepoisyou.png"
              text="Meepo is You"
              label="Python"
              path={{ pathname: "https://github.com/clarencechau/Meepo-Is-You"}}
              target="_blank"
            />
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
