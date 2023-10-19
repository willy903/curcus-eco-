import React from "react";

const Item = (props) => {
  return (
    <div className="single single1">
      <img src={props.img} alt="" />
      <h1>{props.nom}</h1>
      <p>{props.useIT}</p>
      <h3>{props.prix}</h3>
      <button>add to cart</button>
    </div>
  );
};

export default Item;
