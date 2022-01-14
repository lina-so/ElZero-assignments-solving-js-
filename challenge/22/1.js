
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



