let products = [
  {
    title: "Carrots",
    tag: "carrots",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Tomatoes",
    tag: "tomatoes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Grapes",
    tag: "grapes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Carrots",
    tag: "carrots",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Tomatoes",
    tag: "tomatoes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Grapes",
    tag: "grapes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Carrots",
    tag: "carrots",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Tomatoes",
    tag: "tomatoes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
  {
    title: "Grapes",
    tag: "grapes",
    description: "Lorem ipsum dolor sit amet",
    price: 9.79,
    inCart: 0,
  },
];

let carts = document.querySelectorAll(".cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    console.log("added to cart", products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".side-menu span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".side-menu span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".side-menu span").textContent = 1;
  }
  setItem(product);
}

function setItem(product) {
  console.log("inside set function");
  console.log("My product is", product);

  let cartItems = localStorage.getItem("productsInCart");
  console.log("là", cartItems);
  cartItems = JSON.parse(cartItems);
  console.log("ici", cartItems);

  if (cartItems != null) {
    console.log(cartItems[product.tag]);
    if (cartItems[product.tag] == undefined) {
      console.log("fuck");
      cartItems = { ...cartItems, [product.tag]: product };
      cartItems[product.tag].inCart += 1;
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    console.log("ici");
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  localStorage.setItem("totalCost", product.price);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    console.log("My cartCost is", cartCost);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


function displayCart() {
  let productItems = localStorage.getItem("productsInCart");
  console.log("products", productItems);
  for (const [key] of Object.entries(productItems)) {
    console.log(`${key}`);

  }
}
onLoadCartNumbers();
displayCart()