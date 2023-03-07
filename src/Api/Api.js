import axios from "axios";

axios.defaults.baseURL = "https://aib-shop.up.railway.app";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("USER_ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);



export const getNotifications = () => {
  try {
    // return axios.get(`/ad/notifications`);

    return null;
  } catch {
    return null;
  }
};
