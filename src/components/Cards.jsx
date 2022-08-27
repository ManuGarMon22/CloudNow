import React from "react";
import Card from "./Card.jsx";
import CardsCSS from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    //Mi logica:
    return (
      <div className={CardsCSS.conteiner}>
        {cities.map((element) => (
          <Card
            name={element.name}
            max={element.max}
            min={element.min}
            img={element.img}
            onClose={() => onClose(element.id)}
            id={element.id}
            key={element.id}
          />
        ))}
      </div>
    );

    //  Logica de Henry:
    //   return (
    //     <div className='cards'>
    //       {cities.map(c => <Card
    //           max={c.max}
    //           min={c.min}
    //           name={c.name}
    //           img={c.img}
    //           onClose={() => onClose(c.id)}
    //           id={c.id}
    //         /> )}
    //     </div>
    //   );
    // } else {
    //   return(
    //     <div>Sin ciudades</div>
    //   )
  } else {
    return <div className={CardsCSS.espere}></div>;
  }
}
