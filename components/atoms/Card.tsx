import React from "react";
import { Btnbuy } from "./Btnbuy";

interface CardProps {
  title: string;
  cover: string;
  price: string;
  author: string;
}

const Card = ({ title, cover, price ,author}: CardProps) => {
  return (
    <div className="carta">
      <img className="imagen" src={cover} width={60} height={60} alt={title} />
      <h2 className="titulo">{title}</h2>
      <p className="por">by {author}</p>
      <div className="entre">
        <p className="precio">{price}</p>
        <Btnbuy />
      </div>
    </div>
  );
};

export default Card;
