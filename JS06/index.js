console.log("This is String Tutorial");
let a = "Tanvi";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// a[0] = "p"; // This will not work because string is immutable
// console.log(a); 
console.log("Length of String : ", a.length);

let name = "Tanvi";
let friend = "Pari";
console.log("Hello " +name+ " and you friend is " +friend); // Old Method
// Template String or Template Literal (ES6)
let greeting = `Hello ${name} and your friend is ${friend}`;
console.log(greeting);

// Escape Sequence Characters
// 1. \n - New Line
// 2. \t - Tab
// 3. \\ - Backslash
// 4. \' - Single Quote
// 5. \" - Double Quote
// 6. \` - Backtick

let fruit = 'Bana\'na';
console.log(fruit);
let fruit2 = "Bana\"na";
console.log(fruit2);
let fruit3 = `Bana\`na`;
console.log(fruit3);        
let fruit4 = "Bana\\na";
console.log(fruit4);
let fruit5 = "Bana\nna";
console.log(fruit5);
let fruit6 = "Bana\ta";
console.log(fruit6);

let b = "Hello";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

// Slicing of String
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.indexOf("l")); // First occurrence of l
console.log(b.startsWith("He")); // true
console.log(b.endsWith("lo"));
 

// Only first occurrence will be replaced
console.log(b.replace("llo", "110"));

console.log(b.concat(" World !"," How are you?"));

// string is immutable
console.log(b);

let c = "   Hello World   ";
console.log(c);
console.log(c.trim()); // Removes whitespace from both ends of a string