import React from "react";
import  './usereventbooking'
export default function Eventers(props) {
  return (
    <>
    <div className="whe">
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="pr">{props.description}</p>
      <p>
        <button ><a className="ght" href="/usereventbooking">Book Event</a></button>
      </p>
    </div>
    </div>
    </>
  );
}