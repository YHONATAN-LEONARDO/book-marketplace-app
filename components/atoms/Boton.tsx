import React from "react";

const Boton = ({ imagen, nombre }) => {
  return (
    <div className="boton">
      <img src={imagen} alt={nombre} width={20} height={20} />
      <h1>{nombre}</h1>
    </div>
  );
};

export default Boton;
