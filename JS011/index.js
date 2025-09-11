console.log("Welcome");
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);  // only for elements
console.log(document.querySelector(".container").nodeName);  // available for everything
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hidden);
// console.log(document.querySelector(".container").hidden = true)
console.log(document.querySelector(".box").innerHTML = "Hey I am Tanvi"); // changes the text of the first element have classname == box
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style","display : inline"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").hasAttribute("style"));
document.designMode = "on";
console.log(document.querySelector(".box").dataset);



// Insertion
let div = document.createElement("div");
div.setAttribute("class","created");
div.innerHTML = "I have inserted  <b>by Tanvi div1</b>"

// 1. Append → goes INSIDE container at the END
document.querySelector(".container").append(div); 
let div2 = document.createElement("div");
div2.setAttribute("class","created");
div2.innerHTML = "I have inserted  <b>by Tanvi div2</b>"

// 2. Before → goes OUTSIDE container, just BEFORE it
document.querySelector(".container").before(div2); 
let div3 = document.createElement("div");
div3.setAttribute("class","created");
div3.innerHTML = "I have inserted  <b>by Tanvi div3</b>"

// 3. After → goes OUTSIDE container, just AFTER it
document.querySelector(".container").after(div3);  
let div4 = document.createElement("div");
div4.setAttribute("class","created");
div4.innerHTML = "I have inserted  <b>by Tanvi div4</b>"
// 4. Prepend → goes INSIDE container at the START (before its first child)
document.querySelector(".container").prepend(div4);   




let cont = document.querySelector(".container");

// 1. afterend → OUTSIDE the element, immediately AFTER it
cont.insertAdjacentHTML("afterend", "<b>AfterEnd</b>");

// 2. beforeend → INSIDE the element, at the END (like append)
cont.insertAdjacentHTML("beforeend", "<b>BeforeEnd</b>");

// 3. afterbegin → INSIDE the element, at the START (like prepend)
cont.insertAdjacentHTML("afterbegin", "<b>AfterBegin</b>");

// 4. beforebegin → OUTSIDE the element, immediately BEFORE it
cont.insertAdjacentHTML("beforebegin", "<b>BeforeBegin</b>");


console.log(document.querySelector(".box").remove())