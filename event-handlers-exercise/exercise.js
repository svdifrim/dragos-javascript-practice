// EXERCISES

const buttonGreen = document.querySelector(".button");
const buttonRed = document.querySelector(".button-red");
const buttonBlue = document.querySelector(".button-blue");
const img = document.querySelector(".image");
const body = document.querySelector("body");

let event = new Event("");

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

const triggerAnotherEvent = e => {
  buttonGreen.click();
};

img.addEventListener("click", hideImg);
buttonGreen.addEventListener("click", showImage);
buttonRed.addEventListener("click", removeImg);
buttonBlue.addEventListener("click", triggerAnotherEvent);
body.addEventListener("click", checkForClick);
