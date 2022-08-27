import React from "react";
import CardCSS from "./Card.module.css";
import CloseIcon from "../cross-circle.png";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  // Este si es mi codigo:
  function backgroundColor() {
    switch (img[2]) {
      case "d":
        return CardCSS.b1;
      case "n":
        return CardCSS.b2;
      //case "01d":

      default:
        return CardCSS.card;
    }
  }

  return (
    <div className={`${CardCSS.card} ${backgroundColor()}`}>
      <div className={CardCSS.first}>
        <Link to={`/ciudad/${id}`}>
          <span className={CardCSS.title}>{name}</span>
        </Link>
        <span className={CardCSS.btn} onClick={onClose}>
          <img src={CloseIcon} alt="" className={CardCSS.icon} />
        </span>
      </div>
      <div className={CardCSS.data}>
        <div className={CardCSS.info}>
          <p className={CardCSS.text}> Min: {min}°</p>
          <p className={CardCSS.text}> Max: {max}°</p>
        </div>
        <img
          className={CardCSS.image}
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          alt=""
        />
      </div>
    </div>
  );

  //-----este es codigo de henry------
  // return (
  //   <div className="card">
  //     <div id="closeIcon" className="row">
  //         <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
  //     </div>
  //     <div className="card-body">
  //       <h5 className="card-title">{name}</h5>
  //       <div className="row">
  //         <div className="col-sm-4 col-md-4 col-lg-4">
  //           <p>Min</p>
  //           <p>{min}°</p>
  //         </div>
  //         <div className="col-sm-4 col-md-4 col-lg-4">
  //           <p>Max</p>
  //           <p>{max}°</p>
  //         </div>
  //         <div className="col-sm-4 col-md-4 col-lg-4">
  //           <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
