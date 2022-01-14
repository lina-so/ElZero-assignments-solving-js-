let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


my=my.slice(0,4).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];


console.log(my.slice(1,3)); // ["Elham", "Mazero"]

let nwArr=my.slice(1,3);
let ans1=nwArr[0][0]+nwArr[0][1];
let ans2=nwArr[1][2]+nwArr[1][3]+nwArr[1][4]+nwArr[1][5];
console.log(ans1+ans2); // "Elzero"


console.log(ans2.slice(2,3)+ans2.slice(3).toUpperCase()); // "rO"