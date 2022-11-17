import { useState } from "react";
import style from "./Item.module.css";

const Item = ({ nama = "Sport", price, setNama }) => {
  const [isBooked, setIsBooked] = useState("Not booked");
  return (
    <div className={style.item}>
      <h1>{nama}</h1>
      <p>{price}</p>
      {isBooked}
      <button onClick={() => setIsBooked("Booked")}>Change booked</button>
      <button onClick={() => setNama("Annisa")}>Ganti Nama</button>
    </div>
  );
};

export default Item;
