
// ////Assignment 1
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// let neww = [];
// // Method 1
// for( var i =0;i<myFriends.length-1;i++)
// {
//   neww.push(myFriends[i]);
// }
// console.log(neww); // ["Ahmed", "Elham", "Osama"];

// // Method 2

// console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];





// /********************************************************************************** */


// ////Assignment 2

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// let n=[];
// // Write Your Code Here
// for( var i =1;i<friends.length-1;i++)
// {
//   n.push(friends[i]);
// }
// console.log(n); // ["Eman", "Osama"]






/********************************************************************************** */


////Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(arrTwo.reverse().concat(arrOne.reverse()).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]



/********************************************************************************** */


////Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO




/********************************************************************************** */


////Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//solution 1
for( var i=0;i<haystack.length;i++)
{
  if(haystack[i]==needle)
  {
    console.log("found");
    break;
  }
}

//solution 2 
if(haystack.indexOf("JS")==true)
{
  console.log("found");
}

//solution 3
if(haystack.includes("JS"))
{
  console.log("found");
}


/********************************************************************************** */


////Assignment 6




let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs=arr1.concat(arr2).sort().join("");
console.log(allArrs.slice(allArrs.indexOf("F")).toLowerCase()); // fxy