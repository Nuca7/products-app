import React, { useState, useEffect } from "react";
import { getAllProducts } from "../helperFunctions";
import CardProduct from "./CardProduct";

function Products() {
  const [products, setProducts] = useState([]);

  async function getData() {
    const productsArr = await getAllProducts();
    setProducts(productsArr);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="products">
      {products.map((product) => {
        const { id } = product;
        return <CardProduct key={id} {...product} />;
      })}
    </section>
  );
}

export default Products;
