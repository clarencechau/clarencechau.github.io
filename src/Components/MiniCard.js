import React from "react";
import "./MiniCard.css";

function MiniCard(props) {
    return (
        <>
            <div className="things">
                <div className="image">
                    <i className={props.image}></i>
                </div>
                <div className="image-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="image-description">
                    <h4>{props.description}</h4>
                </div>
            </div>
        </>
    )
}

export default MiniCard;