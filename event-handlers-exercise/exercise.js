// EXERCISES

const button = document.querySelector(".button");
const buttonRed = document.querySelector(".button-red");
const img = document.querySelector(".image");
const body = document.querySelector("body");

const showImage = () => {
  if (img.classList.contains("image-show")) {
    alert("Nu exista, bro");
  }
  img.classList.add("image-show");
};

const hideImg = () => {
  img.classList.remove("image-show");
};

const removeImg = () => {
  img.remove();
};

const checkForClick = e => {
  console.log(e.target);
  console.log(e.currentTarget);
  alert("Something was clicked");
};

img.addEventListener("click", hideImg);
button.addEventListener("click", showImage);
buttonRed.addEventListener("click", removeImg);
body.addEventListener("click", checkForClick);
