console.log("I am a tutorial on Loops");
// Loops are used to repeat a block of code multiple times until a certain condition is met.

// There are mainly 3 types of loops in JavaScript:
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. for-in loop
// 5. for-of loop

// 1. for loop
console.log("For Loop");
let a= 1;
for(let i =0;i<10;i++){
    console.log(a+i);
}
console.log("\n");

// 2. For-in loop
console.log("For-in Loop");
let obj ={
    Name : "Tanvi",
    Role : "Programmer",
    Company : "Google"
}
for(const key in obj){
    if(obj.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key);
    }
}
console.log("\n");
for(const key in obj){
    if(obj.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(element);
    }
}
console.log("\n");
for(const key in obj){
    if(obj.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key,element);
    }
}
console.log("\n");
// 3. For-of loop
console.log("For-of Loop");
for(const c of "Tanvi"){
    console.log(c);
}
console.log("\n");

// 4. while loop
console.log("While Loop");
let j = 3;
while(j > 0){
    console.log(j);
    j--;
}
console.log("\n");
// 5. do-while loop
console.log("Do-While Loop");
let k =0;
do{
    console.log(k);
    k++;
}while(k<3);
console.log("\n");

let a1 = [1,93,5,6,88];

// for loop
for(let index  = 0;index<a1.length;index++){
    const element = a1[index];
    console.log(element);
}
console.log("\n");
console.log("For-each loop");
a1.forEach((value,index,arr) =>{
    console.log(value,index,a1);
})

let obj2 = {
    a:1,
    b:2,
    c:3
}
console.log("\n");
console.log("For-in Loop");
for(const key in obj2){
    if(Object.hasOwnProperty.call(obj2,key)){
        const element = obj2[key];
        console.log(key,element);
    }
}
console.log("\n");
console.log("For -off Loop");
for(const element of a1){
    console.log(element);
}