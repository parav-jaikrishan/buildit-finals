import React from "react";
import "./LandingCard.scss";

export const LandingCard = (props) => {
  const { data } = props;
  return (
    <div className="landing-card">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <img src={data.src} alt={ data.title }/>
    </div>
  );
}
