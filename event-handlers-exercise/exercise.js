const greenButton = document.querySelector(".button-green");
const redButton = document.querySelector(".button-red");
const blueButton = document.querySelector(".button-blue");

const img = document.querySelector("img");
const parentImg = document.querySelector(".img-container");

const body = document.querySelector("body");

const triggerEvent = new Event("triggerclick");

const showImg = () => {
  img.classList.add("show-img");

  if (document.querySelector("img") === null) {
    alert("Nu exista, bro");
  }
};

const hideImg = () => {
  parentImg.dispatchEvent(triggerEvent);
  img.classList.remove("show-img");
};

const removeImg = () => {
  img.remove();
};

const checkForClick = e => {
  console.log(e.target);
  console.log(e.currentTarget);
  alert("Something was clicked!");
};

const triggerAnotherEvent = () => {
  greenButton.click();
};

const logEvent = () => {
  console.log("logging event");
};

greenButton.addEventListener("click", showImg);
redButton.addEventListener("click", removeImg);
blueButton.addEventListener("click", triggerAnotherEvent);
body.addEventListener("click", checkForClick);
img.addEventListener("click", hideImg);
parentImg.addEventListener("triggerclick", logEvent);
