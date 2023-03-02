import axios from "axios";
import bisolaDavid from "../assets/bisolaDavid.png";

export const getPreviewProducts = (path) => {
  return axios.get(path);
};

export const getProductDetails = (id) => {
  return axios.get(`/ad/products/${id}/`);
};

export const getProductReviews = (id) => {
  // return axios.get(`/ad/products/${id}/reviews`);

  return [
    {
      id: 1,
      user: {
        id: 2,
        firstname: "Bisola",
        lastname: "David",
        profileImage: bisolaDavid,
      },
      rating: 4.0,
      title: "This one of the best iPhone ever built",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitat velit esse cillum dolore eu fugiat nulla pariatur.",
      created_at: 1677766927716,
    },
    {
      id: 1,
      user: {
        id: 2,
        firstname: "Bisola",
        lastname: "David",
        profileImage: bisolaDavid,
      },
      rating: 4.0,
      title: "This one of the best iPhone ever built",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitat velit esse cillum dolore eu fugiat nulla pariatur.",
      created_at: 1677726927716,
    },
  ];
};
