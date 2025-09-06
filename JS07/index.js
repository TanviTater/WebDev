let arr = [1,2,4,5,6];
console.log(arr);
// console.log(arr.length)
console.log(typeof arr);

//  arrays are mutable , but strings are immutable
arr[0] = 5559;
console.log(arr);
// console.log(arr[0]);
console.log(arr.toString());
console.log(typeof arr.toString());
console.log(arr.join(" and "));
let a = [1,2,3,4,5,6];
console.log(a.pop())  // removes last element
console.log(a);
a.push(555);
console.log(a);
a.push("Tanvi");
console.log(a);
console.log(a.shift());   // removes first element
console.log(a);
a.unshift("New");  /// adds element at the start
console.log(a);

delete a[6];  // deletes but does not affect length
console.log(a);
console.log(a.length);
a.splice(2,3);  // removes 3 elements from index 2
console.log(a);
a.splice(2,0,"inserted1","inserted2");  // adds elements at index 2
console.log(a);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
a1.concat(a2,a3);  // doesnt chanege the existing method
console.log(a1.concat(a2,a3));
console.log(a.sort())

console.log(a.slice(1,4));  // does not change existing array