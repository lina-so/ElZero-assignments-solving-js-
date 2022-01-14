/************Assignment 1 ***********/

// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

// console.log(10 % 20 % 15 % 3 % 190 / 10 % 400);//0.1

// console.log(10 % 20 % 15 % 3 % 190 % 10 / 400);//0.0025


// console.log(10 % 20 % 15 % 3 / 190 % 10 / 400); //0.000013157894736842104








/************Assignment 2 ***********/
// let num = 3;

// // Solution One
// console.log((num) *(true+true)); // 6

// // Solution Two
// console.log(num+(true+true+true)); // 6

// // Soultion Three
// console.log(parseInt(num.toString())+parseInt(num.toString())); // 6

// // Soultion Four
// console.log(num*(true+true+true+true)/(true+true)); // 6

// // Solution Five
// console.log(num+=(true+true+true)); // 6

// // Solution Six
// console.log(++num-true); // 6






/************Assignment 3 ***********/

// let num = "10";

// // Solution One
// console.log(parseInt(num)+parseInt(num)); // 20

// // Solution Two
// console.log(+num + +num); // 20

// // Solution Three
// console.log(+num *(+true+true)); // 20

// // Solution Four
// console.log(((+num )**(+true+true))/((+num /(+true+true))) );











 /****video 22 تحدي */

 let a=10,b="20",c=80;
 //console.log(++a + +b++ + +c++ - +a++);//answer is  100
/*
[++a]
value:11
Explain:pre increment

[+b++]
value:20
Explain:post increment

[+c++]
value:80;
Explain:post increment

[+a++]
value:11
Explain:post increment 

*/
//console.log(++a + -b  + +c++ - -a++ + +a);//answer is  94
/*
[++a]
value:11
Explain:pre increment

[-b]
value:-20
Explain:- unary negation

[+c++]
value:80;
Explain:post increment

[-a++]
value:-11
Explain:post decrement

[+a]
value:12
Explain:+ unary plus
*/

console.log(--c + +b + --a * +b++ - +b *a + --a - +true);//answer is 97
//console.log(79+20+9*20-21*9+8-1);
/*
[--c]
value:79
Explain:pre decrement

[+b]
value:20
Explain:+ unary plus

[--a]
value:9
Explain:pre decrement

[+b++]
value:20;
Explain:post increment

[+b]
value:21;
Explain:+ unary plus

[a]
value:9

[--a]
value:8
Explain:pre decrement

[+true]
value:1
Explain:+ unary plus
*/



