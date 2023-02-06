import axios from "axios";

export const addDatatoLocalStorage = async () => {
  try {
    const datal = await axios.get(
      "ttp://6fcf-155-94-250-124.ngrok.io/products/lapi/1"
    );
    return datal;
  } catch (err) {
    throw err;
  }
};
