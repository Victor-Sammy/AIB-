import axios from "axios";

const env = {
  API_URL: "http://f918-154-118-9-82.ngrok.io",
};
//   API_URL: "https://aib-shop.up.railway.app",
// };

export default env;

export const getCart = () => {
  const cartID = localStorage.getItem("cartID");
  const accessToken = localStorage.getItem("USER_ACCESS_TOKEN");
  // const cartID = "351ab1cd-cbcd-4c0b-95d9-b83ce1331a9b";

  try {
    if (cartID && accessToken) {
      return axios.get(`/ad/carts/${cartID}/items`);
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const getNotifications = () => {
  try {
    // return axios.get(`/ad/notifications`);

    return null;
  } catch {
    return null;
  }
};
