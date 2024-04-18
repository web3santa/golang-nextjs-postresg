import React, { FC } from "react";

interface Card {
  id: number;
  name: string;
  email: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div>
      <h1>ID: {card.id}</h1>
      <h2>{card.name}</h2>
      <p>{card.email}</p>
    </div>
  );
};

export default CardComponent;
