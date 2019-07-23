// EXERCISES

const button = document.querySelector(".button");
const img = document.querySelector(".image");

const showImage = () => {
  img.classList.add("image-show");
};

const removeImg = () => {
  img.classList.remove("image-show");
};

img.addEventListener("click", removeImg);
button.addEventListener("click", showImage);
