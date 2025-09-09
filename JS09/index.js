console.log("hello World");
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
console.log(cont.firstChild);  // space = text
console.log(cont.lastChild);
console.log(cont.firstElementChild);  // give the first element not including the default space , here it is a div
console.log(cont.lastElementChild); 
console.log(cont.lastElementChild.style.color = "red"); 
console.log(cont.lastElementChild.style.backgroundColor = "pink"); 
console.log(cont.lastElementChild.parentElement); 
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes); // give the text, comments nodes and elements
console.log(document.body.firstElementChild.children);  // gives only the elements
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[3]);
console.log(document.body.firstElementChild.children[3].nextElementSibling); // will give next element
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].nextSibling);  // this will give text

// targetting table
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
console.log(document.body.children[1].nextElementSibling)