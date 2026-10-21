// 1. Combining arrays
let a = [10, 20];
let b = [30, 40];
let c = [...a, ...b];
console.log("Combined:", c);

// 2. Copying an array
let copy = [...a];
console.log("Copied:", copy);

// 3. Modifying an array
let modified = [...a, 50];
console.log("Modified:", modified);

// 4. Combining objects
let obj1 = { name: "Vansh" };
let obj2 = { age: 18 };
let obj3 = { ...obj1, ...obj2 };
console.log("Combined object:", obj3);

// 5. Copying and modifying an object
let obj4 = { ...obj1, name: "Rahul" };
console.log("Modified object:", obj4);