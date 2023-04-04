import bisolaDavid from "../assets/bisolaDavid.png";
import { client } from "./Api";

export const getPreviewProducts = (path) => {
  return client.get(path);
};

export const getProductDetails = (id) => {
  return client.get(`/ad/products/${id}/`).then((result) => result.data);
};

export const toggleItemLike = (id) => {
  return client.post(`/ad/products/${id}/likes/`);
};

export const getProductReviews = (id) => {
  return client
    .get(`/ad/products/${id}/ratings/`)
    .then((result) => result.data);

  // return [
  //   {
  //     id: 1,
  //     user: {
  //       id: 2,
  //       firstname: "Bisola",
  //       lastname: "David",
  //       profileImage: bisolaDavid,
  //     },
  //     rating: 4.0,
  //     title: "This one of the best iPhone ever built",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitat velit esse cillum dolore eu fugiat nulla pariatur.",
  //     created_at: 1677766927716,
  //   },
  //   {
  //     id: 2,
  //     user: {
  //       id: 2,
  //       firstname: "Bisola",
  //       lastname: "David",
  //       profileImage: bisolaDavid,
  //     },
  //     rating: 4.0,
  //     title: "This one of the best iPhone ever built",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitat velit esse cillum dolore eu fugiat nulla pariatur.",
  //     created_at: 1677726927716,
  //   },
  // ];
};
