import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = BASE_URL;

const token = localStorage.getItem("USER_ACCESS_TOKEN");

export const authenticatedClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const client = token ? authenticatedClient : axios;

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("USER_ACCESS_TOKEN");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const getNotifications = () => {
  try {
    // return client.get(`/ad/notifications`);

    return null;
  } catch {
    return null;
  }
};
