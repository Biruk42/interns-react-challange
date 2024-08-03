import React from "react";
import "./ActorCard.css";

const ActorCard = ({ actor, onDetailClick }) => {
  return (
    <div className="actor-card card">
      <h2>{actor.name}</h2>
      <div className="actor-card__details">
        <p>Height: {actor.height}</p>
        <p>Birth Year: {actor.birth_year}</p>
      </div>
      <button onClick={onDetailClick}>Detail</button>
    </div>
  );
};

export default ActorCard;
