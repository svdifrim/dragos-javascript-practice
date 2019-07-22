const inputButton = document.querySelector("#checkout");
const errorDOM = document.querySelector(".error");
const inputsDOM = document.querySelectorAll("input");
const addButton = document.querySelectorAll(".add");
const decreaseButton = document.querySelectorAll(".remove");
const quantity = document.querySelectorAll(".quantity");
const productPrice = document.querySelectorAll(".product-price");
const totalProduct = document.querySelectorAll(".total-product");
const removeProduct = document.querySelectorAll(".remove-item");
const product = document.querySelectorAll(".product");

const totalPrice = document.querySelector(".total");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

let total = [];

const isEmailValid = () => {
  let isEmail = email.value;
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(isEmail);
};

const getTotal = () => {
  total = Array.from(totalProduct).map(item => {
    return parseInt(item.innerText);
  });

  totalPrice.innerText = total.reduce((a, b) => {
    return a + b;
  }, 0);
};

const increaseQuantity = i => {
  quantity[i].innerText = parseInt(quantity[i].innerText) + 1;
  totalProduct[i].innerText =
    parseInt(quantity[i].innerText) * parseInt(productPrice[i].innerText);

  getTotal();
};

const decreaseQuantity = i => {
  if (parseInt(quantity[i].innerText) === 1) {
    return;
  } else {
    quantity[i].innerText = parseInt(quantity[i].innerText) - 1;
    totalProduct[i].innerText =
      parseInt(quantity[i].innerText) * parseInt(productPrice[i].innerText);

    getTotal();
  }
};

const removeTotalProduct = i => {
  totalPrice.innerText = totalPrice.innerText - totalProduct[i].innerText;
};

const remove = i => {
  removeTotalProduct(i);
  product[i].style.display = "none";
};

const validateForm = () => {
  const regExp = /^\S*$/;

  if (
    firstName.value === "" ||
    !regExp.test(firstName.value) ||
    !regExp.test(lastName.value) ||
    lastName.value === "" ||
    email.value === ""
  ) {
    inputButton.disabled = true;
  } else {
    inputButton.disabled = false;
  }
};

firstName.addEventListener("blur", function(event) {
  if (firstName.value === "") {
    firstName.setAttribute("style", "border: 1px solid red;");
    errorDOM.innerText = "Fields must not be empty";
    errorDOM.classList.add("error-red");

    validateForm();
  } else {
    firstName.setAttribute("style", "border: 1px solid #777777;");
    errorDOM.innerText = "";
    errorDOM.classList.remove("error-red");
    validateForm();
  }
});
lastName.addEventListener("blur", function(event) {
  if (lastName.value === "") {
    lastName.setAttribute("style", "border: 1px solid red;");
    errorDOM.innerText = "Fields must not be empty";
    errorDOM.classList.add("error-red");

    validateForm();
  } else {
    lastName.setAttribute("style", "border: 1px solid #777777;");
    errorDOM.innerText = "";
    errorDOM.classList.remove("error-red");

    validateForm();
  }
});
email.addEventListener("blur", function(event) {
  if (email.value === "" || !isEmailValid()) {
    email.setAttribute("style", "border: 1px solid red;");
    errorDOM.innerText = "Fields must not be empty";
    errorDOM.classList.add("error-red");

    validateForm();
  } else {
    email.setAttribute("style", "border: 1px solid #777777;");
    errorDOM.innerText = "";
    errorDOM.classList.remove("error-red");

    validateForm();
  }
});

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const regExp = /^\S*$/;

  if (
    firstName.value === "" ||
    !regExp.test(firstName.value) ||
    lastName.value === "" ||
    !regExp.test(lastName.value) ||
    email.value === ""
  ) {
    return;
  }

  console.log("Hey");

  // const firstName = e.target.elements.firstName.value;
  // const lastName = e.target.elements.lastName.value;
  // const email = e.target.elements.email.value;
  // const address = e.target.elements.address.value;

  // if (
  //   firstName === "" ||
  //   lastName === "" ||
  //   email === "" ||
  //   address === "" ||
  //   !isEmailValid()
  // ) {
  //   //inputButton.disabled = true;
  //   errorDOM.innerText = "Fields must not be empty";
  //   errorDOM.classList.add("error-red");
  //   inputsDOM.forEach(input => {
  //     input.classList.add("highlight-red");
  //   });
  //   return;
  // } else {
  //   inputButton.disabled = false;
  //   errorDOM.innerText = "";
  //   errorDOM.classList.remove("error-red");
  //   inputsDOM.forEach(input => {
  //     input.classList.remove("highlight-red");
  //   });
  // }

  // console.log({ firstName, lastName, email, address });
});

addButton.forEach((btn, i) => {
  btn.addEventListener("click", () => increaseQuantity(i));
});

decreaseButton.forEach((btn, i) => {
  btn.addEventListener("click", () => decreaseQuantity(i));
});

removeProduct.forEach((btn, i) => {
  btn.addEventListener("click", () => remove(i));
});
