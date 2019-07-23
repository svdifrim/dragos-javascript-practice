// EXERCISES

const buttonGreen = document.querySelector(".button");
const buttonRed = document.querySelector(".button-red");
const buttonBlue = document.querySelector(".button-blue");
const imgContainer = document.querySelector(".img-container");
const img = document.querySelector(".image");
const body = document.querySelector("body");

let event = new Event("customevent");

const showImage = () => {
  if (img.classList.contains("image-show")) {
    alert("Nu exista, bro");
  }
  img.classList.add("image-show");
};

const hideImg = e => {
  imgContainer.dispatchEvent(event);
  img.classList.remove("image-show");
};

const removeImg = e => {
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

const getCustomEvent = e => {
  console.log(e.type);
  console.log("Heya");
};

img.addEventListener("click", hideImg);
buttonGreen.addEventListener("click", showImage);
buttonRed.addEventListener("click", removeImg);
buttonBlue.addEventListener("click", triggerAnotherEvent);
imgContainer.addEventListener("customevent", getCustomEvent);
body.addEventListener("click", checkForClick);
