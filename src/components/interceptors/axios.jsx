import axios from "axios";

axios.defaults.baseURL = "https://aib-shop.up.railway.app";

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401) {
      const response = await axios.post(
        "refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["token"]}`;

        return axios(error.config);
      }
    }
    return error;
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("USER_ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
