console.log("Hey I am script.js");

var a = 5;  // can be changed agay i.e a a+1 possible
var b = 6;
var c = "Tanvi"; 

console.log("The sum of a and b is: ", a + b + 2);
console.log("My name is: ", c);
console.log(typeof a,typeof b,typeof c);

// const a1 = 6;  
// a1+=1;   ////const cannot be changed again i.e a a+1 not possible


//  let is always preferred over var
let a2 = 5;
a2 = a2 + 1;
console.log("Printing the value of a2  "+a2);
{
    let a2 = 66;
    console.log("Printing the value of a2(declared using let) inside the block "+a2);
}
console.log("Printing the value of a2(declared using let) outside the block "+a2);

{
    var a3 = 55;
    console.log("Printing the value of a(declared using var) inside the block "+a3);
}
console.log("Printing the value of a(declared using var) outside the block "+a3);

let x = "tanvi";
let y = 22;
let z = 3.55;
const c1 = true;
let q = undefined;
let r = null;
console.log(x,y,z,c1,q,r);
console.log(typeof x,typeof y,typeof z,typeof c1,typeof q,typeof r);

let o = {
    "name" : "Tanvi",
    "job role" : "Pilot",
    "age" : 22,
    "Employed" : true
}
console.log(o);
o.salary = "100 crores";
console.log(o);
o.name = "Tanvi Tater";
console.log(o);