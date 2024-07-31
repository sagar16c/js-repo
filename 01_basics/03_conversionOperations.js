let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);// nan

//if converted to Number
// nan -> number
// null -> 0
// undefined -> nan
// boolean -> 1,0
// string -> nan

let isLoggedIn = "sagar"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1-> true
// 0 ->false
// ""-> false
// "sagar"-> true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof(stringNumber));