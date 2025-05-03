import React from "react";
import Boton from "../atoms/Boton";

const Navbtn = () => {
  return (
    <div className="navbtn">
      <Boton imagen={"/fuego.png"} nombre="Trending" />
      <Boton imagen={"/corazon.png"} nombre="Romance" />
      <Boton imagen={"/cara-feliz.png"} nombre="Children" />
    </div>
  );
};

export default Navbtn;
