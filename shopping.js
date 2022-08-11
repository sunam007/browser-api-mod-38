console.log("js addded");
const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }
  // Display product;
  displayProducts(name);
  // save to local storage;
  addProductToCart(name);
  nameField.value = "";
};

const displayProducts = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  //   cart.name = 1;

  /* instead we will write cart[parameter_name] , we will get the parameter from addItem() function. we can not set parameter(which we get from another source) using .property. to access the name parameter we had to write cart[name] = 1; */
  cart[name] = true;
  // now we have to stringify the cart to convert to json file if we want it to store on local storage;
  const cartStringified = JSON.stringify(cart);
  // setting the key-value pair in local storage;
  localStorage.setItem("cart", cartStringified);

  console.log(cart);
};

// display cart items from local storage

const displayProductFromLocalStorage = () => {
  const cart = getCart();
  // the value of cart will be object; so we will use for in to loop the property;
  for (const product in cart) {
    console.log(product);
    displayProducts(product);
  }
};

// we have to call the function
displayProductFromLocalStorage();

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
