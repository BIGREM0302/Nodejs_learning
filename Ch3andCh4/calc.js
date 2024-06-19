var math = require("mathjs");

console.log(math.format(6.4));

console.log(math.format(1 / 3, 3));

console.log(math.format(213333, 2));

console.log(math.format(12.07372, { notation: "fixed" }));

console.log(math.format(2.333, { notation: "fixed", precision: 2 }));

console.log(math.format(52.8, { notation: "exponential" }));

console.log(math.print("Lucy is $age years old", { age: 0 }));
