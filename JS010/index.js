console.log("Hello World!");
let boxes = document.getElementsByClassName("box");
console.log(boxes);
// boxes[2].style.backgroundColor = "red";

document.getElementById("redbox").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";  // only fills the colector in the first box and not all the boxes

console.log(document.querySelectorAll(".box"))
// it selects only one element

// document.querySelectorAll(".box").style.backgroundColor = "green"   this will give error

// for coloring all the elements at the same time use querySelectorAllover a for loop
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "pink";
})
console.log(document.getElementsByTagName("div"));
e = document.getElementsByTagName("div");
console.log(e[5].matches("#redbox"))
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector("body").contains(document.querySelector(".container")));