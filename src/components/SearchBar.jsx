import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  //-----Mi codigo:----
  let [val, setVal] = useState("");

  function x(e) {
    e.preventDefault();
    onSearch(val);
    setVal("");
  }

  return (
    <div>
      <form onSubmit={x} className={style.bar}>
        <input
          className={style.searching}
          name="buscador"
          placeholder="City"
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <input type="submit" className={style.btn} value="Add City" />
      </form>
    </div>
  );

  // --------Codigo henry:-------
  // return (
  //   <form onSubmit={(e) => {
  //     e.preventDefault();
  //     onSearch("Cairns");
  //   }}>
  //     <input
  //       type="text"
  //       placeholder="Ciudad..."
  //     />
  //     <input type="submit" value="Agregar" />
  //   </form>
  // );
}
