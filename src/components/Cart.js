import React from "react";
import { useGlobalContext } from "../Context";

function Cart() {
  const { cart, setCart } = useGlobalContext();

  if (cart.length === 0) {
    return <h1>No Items In Cart</h1>;
  }

  function removeProduct(id) {
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  }

  const total = cart.reduce((total, obj) => {
    const { quantity, price } = obj;
    const totalTemp = total + quantity * price;
    return totalTemp;
  }, 0);

  return (
    <section className="cart">
      <p className="total">total: ${total.toFixed(2)}</p>
      {cart.map((item) => {
        const { image, price, title, id, quantity } = item;
        return (
          <article key={id}>
            <img src={image} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>price: ${price}</p>
              <p>amount: {quantity}</p>
              <button onClick={() => removeProduct(id)}>remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Cart;
