import axios from "axios";

export const getUserLikedItems = () => {
  return axios.get("/ad/favourites/").then((result) => result.data);
  // return { 4: true, 9: true };
};

export const toggleItemLike = (id) => {
  return axios.post(`/ad/products/${id}/likes/`);
};
