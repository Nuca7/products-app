import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ id, image, price, title }) {
  return (
    <Link to={`/products-app/${id}`}>
      <article className="cardProduct">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
      </article>
    </Link>
  );
}

export default CardProduct;
