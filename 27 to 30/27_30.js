//Assignment 1

let userName = "Elzero",x;
console.log(userName.slice(0,1).toLowerCase()); // e

console.log(userName[0].toLowerCase()); // e

    for(x=0;x<1;x++)
    {
        console.log(userName[x].toLowerCase());
    } // e

console.log(userName[userName.indexOf("e",0)].toLowerCase()); // e

var i=1;
while(i<=1){
  console.log(userName[i-1].toLowerCase());
  i++;
} // e

console.log(userName[0].repeat(3).toLowerCase()); // eee


//Assignment 2


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.indexOf(letterZ,0)?true:false); // True
console.log(word[0]===letterE.toLocaleUpperCase()?true:false); // True
console.log(word[word.length-1]===letterO.toLowerCase()?true:false); // True