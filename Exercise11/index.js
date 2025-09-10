console.log("Script.js Initialising")
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(document.body.firstElementChild.children);
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = getRandomRGBColor()
    e.style.color = getRandomRGBColor();
})