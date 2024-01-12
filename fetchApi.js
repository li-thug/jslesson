const apiproducts = "https://api.escuelajs.co/api/v1/products";
const apiCategories = "https://api.escuelajs.co/api/v1/categories";

fetch(apiproducts)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("products", data);
  })
  .catch((error) => {
    console.log(error);
  });
fetch(apiCategories)
.then((response) => {
    if (!response.ok) {
      throw new Error("Network not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("cat", data);
  })
  .catch((error) => {
    console.log(error);
  });