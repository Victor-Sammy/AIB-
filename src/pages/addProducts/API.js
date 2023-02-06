import axiosInstance from "axios";

const apiSettings = {
  createMyModelEntry: async (data) => {
    let formData = new FormData();
    if (data.images) formData.append("images", JSON.stringify(data.images));
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("subCategory", data.subCategory);

    const myNewModel = await axiosInstance
      .post(`http://6fcf-155-94-250-124.ngrok.io/products/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response;
      });

    // if (myNewModel.status === 201) {
    //   window.location.href = `https://5b3c-154-120-110-145.ngrok.io/products/${myNewModel.data.id}`
    // }
    return myNewModel;
  },
};

export default apiSettings;
