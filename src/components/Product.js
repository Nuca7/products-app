import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../Context";
import { getProductByID } from "../helperFunctions";

function Product() {
  const { id } = useParams();
  const { cart, setCart } = useGlobalContext();
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const { description, image, price, title } = product;

  async function getData() {
    const product = await getProductByID(id);
    setProduct(product);
  }

  useEffect(() => {
    getData();
  }, []);

  function addInCart(e) {
    e.preventDefault();
    setCart([
      ...cart,
      { quantity: Number(productQuantity), id, image, price, title },
    ]);
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>price: ${price}</p>
        <form onSubmit={addInCart}>
          <label htmlFor="buy">buy: </label>
          <input
            type="number"
            name="buy"
            id="buy"
            min="1"
            max="10"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
          <input type="submit" value="add in cart" />
        </form>
      </div>
    </article>
  );
}

export default Product;
