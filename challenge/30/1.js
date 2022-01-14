let a = "Elzero Web School";

//use [slice,charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6));//Zero

console.log(a.charAt(13).toUpperCase().repeat(8));//HHHHHHHH

console.log(a.split(" ").slice(0,1));//[Elzero]

console.log(a.substr(0,6) +" "+ a.substr(11)); //Elzero School

console.log(a.charAt(0).toLowerCase()+a.slice(1,a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase());