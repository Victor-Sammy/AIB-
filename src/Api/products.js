import axios from "axios";

export const getPreviewProducts = (path) => {
  return axios.get(path);
};
