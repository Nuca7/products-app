const axios = require("axios");

export async function getProductByID(id) {
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getAllProducts() {
  const url = "https://fakestoreapi.com/products";
  const { data } = await axios.get(url);
  return data;
}
