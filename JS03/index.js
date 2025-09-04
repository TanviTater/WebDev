console.log("Hello , today we are going to learn about if else statements in JavaScript");
console.log("\n");
let age = 0;
let grace  = 0;
age += grace;
console.log("Your age is " + age);
if((age + grace) > 18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if("3" === 3){  // checks the value as well as the type
    console.log("this is true");
}
else{
    console.log("this is false");
}

if("3" == 3){  // checks only the value
    console.log("this is true");
}   
// if("3" !== 3){  // checks the value as well as the type
//     console.log("this is true");
// }   
// else{
//     console.log("this is false");
// }

if(age == 18){
    console.log("You can drive");
}
else if(age == 0){
    console.log("You are a baby");
}
else{
    console.log("You cannot drive");
}
let a = 6;
let b = 8;
let c = a>b ?(a+b):(b-a);
console.log(c);

/*
translates to 
if(a>b){
    c = a + b;
}
else{
    c = b - a;
}
*/