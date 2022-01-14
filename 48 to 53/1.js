
// /********************************************************************************** */


// ////Assignment 1
/*
let start = 10;
let end = 100;
let exclude = 40;


for(var i=start;i<=end;i+=start)
{
  if(i==exclude) continue;
  console.log(i);
}
*/
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100




 /********************************************************************************** */


// Assignment 2

// let start = 10;
// let end = 0;
// let stop = 3;

// for(var i=start;i>end;i--)
// {
//   if(i<stop)  break;
//   if(i<10)
//   console.log(end.toString()+i.toString());
//   else console.log(i);
// }
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03




 /********************************************************************************** */


// Assignment 3  /******sooooon */

// let start = 1;
// let end = 6;
// let breaker = 2;

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/






 /********************************************************************************** */


// Assignment 4

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   if(index<4) break;
//   console.log(index);
//   index-=jump;

// }

// Output
/*
10
8
6
4
*/




 /********************************************************************************** */


// Assignment 5

/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let x=0;
for(var i=0;i<friends.length;i++)
{
  if(friends[i][0]==letter || friends[i][0]==letter.toUpperCase()){ continue;}
  console.log('"'+ ++x + "=>" + friends[i] +'"');
}
*/
// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/



 /********************************************************************************** */


// Assignment 6
/*
let start = 0;
let swappedName = "elZerO";
let x="";

for(var i=0;i<swappedName.length;i++)
{
  if(swappedName[i]==swappedName[i].toUpperCase()) {
  x+=(swappedName[i].toLowerCase());
  }
  else if(swappedName[i]==swappedName[i].toLowerCase()) {
  
  x+=(swappedName[i].toUpperCase());
  }
  
}
console.log(x);
*/

// Output
// "ELzERo"




 /********************************************************************************** */


// Assignment 7

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(var i=start+mix[0];i<mix.length;i++)
{
  if(typeof mix[i]=="string")  continue;
  console.log(mix[i]);
}
// Output
/*
2
3
4
*/