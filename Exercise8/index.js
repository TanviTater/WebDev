// Create a faulty calculator , this faulty calculator will give following results:
// it takes two numbers as input from the user
//  it performs wrong operations only 10% of the time as follows:

//  +  -> -
//  *  -> +
//  - -> /
//  / -> **

let random = Math.random();
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = prompt("Enter operation (+, -, *, /)");
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
console.log(random);
if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}