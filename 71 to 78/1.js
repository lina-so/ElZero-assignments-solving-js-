// /**************************************************/
// //Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let ans=mix.map(function(ele){
  return isNaN(ele)?ele:"";
}).reduce(function(acc,current,index,arr){
  return acc.concat(current);
});

console.log(ans);



// /**************************************************/
// //Assignment 2

let myString = "EElllzzzzzzzeroo";

// Elzero
let res=myString.split("").filter(function(ele,pos,self)
{
 return self.indexOf(ele)==pos;
}).join("");

console.log(res);



// /**************************************************/
// //Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let rs=myArray.join("").split("");
// let n=[];
// // console.log(rs);
// console.log(rs.filter(function(ele){
//   return ele!=",";
// }).join(""));

let v=myArray.join("").split(",").reduce(function(p,c)
{
  return p+c;
});
console.log(v);
// Elzero



// /**************************************************/
// //Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let w = numsAndStrings.filter(function(ele){
  return !isNaN(ele);
}).map(function(ele)
{
  return -ele;
});
console.log(w);
// [-1, -10, 10, 20, -5, -3]





// /**************************************************/
// //Assignment 5

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let ansS=nums.reduce(function( prev,curr)
{
  var s=0;
  if(curr%2!=0)  return prev+curr; 
  else return prev*curr;
},1);

console.log(ansS);

// /**************************************************/
// example of reduce 


const euros = [29.76, 41.85, 46.5];

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

doubled // [59.52, 83.7, 93]