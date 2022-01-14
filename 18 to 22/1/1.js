// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

// console.log(10 % 20 % 15 % 3 % 190 / 10 % 400);//0.1

// console.log(10 % 20 % 15 % 3 % 190 % 10 / 400);//0.0025


// console.log(10 % 20 % 15 % 3 / 190 % 10 / 400); //0.000013157894736842104

let num = 3;

// Solution One
console.log((num) *(true+true)); // 6

// Solution Two
console.log(num+(true+true+true)); // 6

// Soultion Three
console.log(parseInt(num.toString())+parseInt(num.toString())); // 6

// Soultion Four
console.log(num*(true+true+true+true)/(true+true)); // 6

// Solution Five
console.log(num+=(true+true+true)); // 6

// Solution Six
console.log(++num-true); // 6