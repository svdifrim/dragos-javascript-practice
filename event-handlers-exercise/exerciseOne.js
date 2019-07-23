// EXERCISES

const button = document.querySelector(".button");
const img = document.querySelector(".image");

const toggleImage = () => {
  img.classList.toggle("image-hide");
};

button.addEventListener("click", toggleImage);
