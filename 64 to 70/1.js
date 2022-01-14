// // // /**************************************************/
// // // //Assignment 1


// function getDetails(fname,zAge,zCountry)
// {
//   function namePattern(fname)
//   {
//     return `${fname.slice(0,fname.indexOf(" ")+2).concat(".")} `;
//   }
//     function ageWithMessage(zAge) {
//     return ('Your Age Is ' + zAge.slice(0,zAge.indexOf(" ")+1));
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//   }
//     function countryTwoLetters(zCountry) {
//       return ('You Live In ' + zCountry.slice(0,2).toUpperCase());
//     // Write Your Code Here
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//     return ` Hello  ${namePattern(fname)} , ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
//       }
//       return fullDetails();
// };

// // console.log(getDetails("lina soleman","32 Is The Age", "Syria"));
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));





// // // /**************************************************/
// // // //Assignment 2

// //1
//  let x=()=> 
//    `Iam A Normal Function`;


// console.log(x()); // Iam A Normal Function

// //2

// let z=(protocol, web, tld) =>
//   `${protocol}://www.${web}.${tld}`;


// console.log(z("https", "elzero", "org")); // https://www.elzero.org


// // // /**************************************************/
// // // //Assignment 3

// //إقرأ عن Currying Function Technique

// function checker(zName) {
//   return  (status) =>{
//     return  (salary)=> {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble








// // /**************************************************/
// // //Assignment 4

function specialMix(...data) {
  var count=0,c=0,s;
  var num=[];
  var res=0,ans="";
  for(var i=0;i<data.length;i++)
  {
    if(typeof data[i]=="number"){ c++; res+=data[i];}
  }

  if(c==data.length) console.log(res);

  else
  {
  var f = data.map(function(ele)
  {
    return !isNaN(parseInt(ele))? ele: "";
  }).toString().split("");
  
  s=f.length;
  // console.log(f);
  res=f.forEach(function(ele)
  {
      if(parseInt(ele).toString()!=="NaN"){ ans+=(ele); s--; }
      else {num.push(ans); ans="";}
  })
  for(var i=0;i<num.length;i++)
  {
      if(parseInt(num[i]).toString()!=="NaN") count+=parseInt(num[i]);
  }
  // console.log(f.length);
  // console.log(s);
      if(s==f.length) console.log("All Is Strings");
      else 
      console.log(count);
}
}


// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


