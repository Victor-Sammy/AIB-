import { client } from "./Api";

export const getCart = () => {
  const cartID = localStorage.getItem("cartID");
  const accessToken = localStorage.getItem("USER_ACCESS_TOKEN");

  try {
    if (cartID && accessToken) {
      return client.get(`/ad/carts/${cartID}/items`);
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const addToCart = async (item) => {
  const cartID = localStorage.getItem("cartID");

  if (!cartID) {
    await client.get(`/ad/carts/${cartID}/items`);
  }
};
