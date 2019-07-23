// EXERCISES

const button = document.querySelector(".button");
const buttonRed = document.querySelector(".button-red");
const img = document.querySelector(".image");

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

img.addEventListener("click", hideImg);
button.addEventListener("click", showImage);
buttonRed.addEventListener("click", removeImg);
