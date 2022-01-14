
//Assignment 1

//Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1000000/10); // 100000
console.log(1000000-900000); // 100000
console.log(+"100000"); // 100000
console.log(1e5); // 100000
console.log((10**3)*(10**2)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.max(100,1000,10000,100000)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log((-"-10000"+-"-90000")); // 100000
console.log(Number("100000")); // 100000


//
//Assignment 2
//9007199254740991
console.log(Math.abs(Number.MIN_SAFE_INTEGER));
console.log(-1*(Number.MIN_SAFE_INTEGER));



//Assignment 3
//ما عرفت حلو تكليف 3 من 23 ل 26
console.log((Number.MAX_SAFE_INTEGER)%16+1);





//Assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57



//Assignment 5
let x=10;
console.log(Number.isInteger(x)+Number.isInteger(x));



//Assignment 6
let flt = 10.4;
var s=flt.toString();
console.log(+s.slice(0,2)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10


//Assignment 7

console.log(parseInt(Math.random()*5)); // 0 || 1 || 2 || 3 || 4



