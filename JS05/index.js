console.log("Learning about Functions in JavaScript");
console.log("\n");
console.log("Hey Tanvi , you are doing great!");
console.log("Hey Tanvi , Keep it up!");
console.log("Hey Tanvi , you are powerful!");
console.log("Hey Tanvi , dont give up!");
console.log("Hey Tanvi , dont worry everything will work out!");
console.log("\n");

function greet(name){
    console.log("Hey " + name + " , you are doing great!");
    console.log("Hey " + name + " , Keep it up!");
    console.log("Hey " + name + " , you are powerful!");
    console.log("Hey " + name + " , dont give up!");
    console.log("Hey " + name + " , dont worry everything will work out!");
    console.log("\n");
}
greet("Pari");
greet("Radhika");

function add(num1, num2,num3=3){
    // console.log( num1 + num2 + num3);
    return num1 + num2+num3;
}

result =  add(3, 7);
console.log("The result of addition is " + result);
result2 =  add(1,2,4);
console.log("The result of addition is " + result2);
result3 =  add(5,5);
console.log("The result of addition is " + result3);
console.log("\n");

const  func1 = (x)=>{
    console.log("This is an arrow function",x);
}
func1(5);

const  func2 = x => console.log("This is an arrow function",x);
func2(10);