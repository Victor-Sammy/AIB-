import axios from "axios";
import { client } from "./Api";

export const getUserLikedItems = () => {
  return client.get("/ad/favourites/").then((result) => result.data);
  // return { 4: true, 9: true };
};


