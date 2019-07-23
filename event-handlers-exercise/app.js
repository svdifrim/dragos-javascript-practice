// window.onload = function() {
//   alert("The page loaded.");

//   const link = document.querySelector(".item-link");

//   link.onclick = function() {
//     console.log("hey");
//   };
// };

// const doSomething = () => {
//   console.log("Hello");
// };

// window.onload = function() {
//   console.log("Second load");
// };

// link.addEventListener("mouseenter", enterMouse, false);
//  link.removeEventListener("mouseenter", enterMouse);

// const link = document.querySelector(".item-link");

// const enterMouse = e => {
//   console.log(e.type + " on link", e.target.text);
// };

// const eventHandler = e => {
//   console.log(e.type + " on ", e.target.nodeName);
// };

// window.addEventListener("click", () => {
//   document.documentElement.requestFullscreen();
// });

// document.addEventListener("fullscreenchange", eventHandler);

// const event = new Event("build");

// window.addEventListener("build", e => {
//   console.log(e.type);
// });

// window.dispatchEvent(event);

// const container = document.getElementById("container");
// const page = document.getElementById("page");

// const eventHandler = e => {
//   e.stopPropagation();
//   console.log(e.type + " on ", e.currentTarget.id);
// };

// page.addEventListener("click", eventHandler);
// container.addEventListener("click", eventHandler);
