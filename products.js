const data = [
  {
    id: 1,
    name: "Google Pixel 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1668153032/Gadgets/pixel-7-pro_cjxuki.png",
    price: 300000,
    cat: "Phones",
  },
  {
    id: 2,
    name: "Apple Watch 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1655244443/Gadgets/apple-watch-series-7-lte-41mm-productred-aluminum-productred-sport-band-mkhd3ll-a-sku4790164_iurfo9.jpg",
    price: 150000,
    cat: "Smartwatch",
  },
  {
    id: 3,
    name: "Samsung Watch 3",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1654264504/Gadgets/61Nhi7ovjkL._SL1500__gbmxgo.jpg",
    price: 180000,
    cat: "Smartwatch",
  },
  {
    id: 4,
    name: "Samsung Buds Pro",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1637412312/Gadgets/samsung_galaxy_buds_pro_r190_08_ad_l_qwjmug.jpg",
    price: 120000,
    cat: "Earbuds",
  },
  {
    id: 5,
    name: "Iphone 12 Pro Max",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1636041986/Gadgets/iPhone-12-Pro-Max-128GB-Graphite_talqdb_pmraau.jpg",
    price: 400000,
    cat: "Phones",
  },
];

const categoryContainer = document.querySelector(".cats");
const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
//display categories
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  console.log(allCats);
  const removeCatDuplicates = [
    "ALL",
    ...allCats.filter((item, i) => allCats.indexOf(item) === i),
  ];
  console.log(removeCatDuplicates);
  categoryContainer.innerHTML = removeCatDuplicates
    .map((item) => `<span class="cat-items">${item}</span>`)
    .join("");
  categoryContainer.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;
    selectedCategory === "ALL"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCategory));
  });
};
const displayProducts = (products) => {
  productContainer.innerHTML = products
    .map(
      (product) =>
        `<div class ="product">
          <img src =${product.img} alt = ${product.name}/>
          <p class = "priceText"> ${product.price}</p>
          </div>`
    )
    .join("");
};
searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.toLowerCase();
  if (query)
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(query) != -1)
    );
});

const setPrices = () => {
  const priceList = data.map((price) => price.price);
  console.log(priceList);
  const minPrice = Math.min(...priceList);
  console.log(minPrice);
  const maxPrice = Math.max(...priceList);
  console.log(maxPrice);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((product) => product.price <= e.target.value));
  });
};

setPrices();
displayProducts(data);
setCategories();
