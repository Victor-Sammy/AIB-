import axios from "axios";

export const getPreviewProducts = (path) => {
  return axios.get(path);
};

export const getProductDetails = (id) => {
  return axios.get(`/ad/products/${id}/`);
};
