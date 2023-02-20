import axios from "axios";

export const getUserLikedItems = () => {
  return { 4: true, 9: true };
};

export const toggleItemLike = (id) => {
  return axios.post(`/ad/products/${id}/likes/`);
};
