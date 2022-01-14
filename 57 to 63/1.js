// /**************************************************/
// //Assignment 1

// function sayHello(theName, theGender) {
//   if(theGender=="Male")
//   {
//     console.log('Hello' +  " Mr " + theName);
//   }
//   else if(theGender=="Female")
//   {
//     console.log('Hello' + " Miss " + theName);
//   }
//   else 
//   console.log('Hello ' + theName);
// }

// // Needed Output
// // sayHello("Osama", "Male"); // "Hello Mr Osama"
// // sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"



/**************************************************/
// //Assignment 2

// function calculate(firstNum, secondNum, operation) {
//   if(secondNum==undefined && operation==undefined) console.log("Second Number Not Found");
//   else if(operation==="add" || operation==undefined) console.log(firstNum+secondNum);
//   else   if(operation==="subtract") console.log(firstNum-secondNum);
//   else   if(operation==="multiply") console.log(firstNum*secondNum);
  
// }

// // Needed Output
// // calculate(20); // Second Number Not Found
// // calculate(20, 30); // 50
// // calculate(20, 30, 'add'); // 50
// // calculate(20, 30, 'subtract'); // -10
// // calculate(20, 30, 'multiply'); // 600



/**************************************************/
//Assignment 3

// function ageInTime(theAge) {
//   if(theAge>10 && theAge<100) {
//   console.log('your age in month is '+ theAge*12);
//   console.log('your age in week is '+ theAge*7);
//   console.log('your age in day is '+ theAge*365);
//   console.log('your age in hours is '+ theAge*24);
//   console.log('your age in min is '+ theAge*60);
//   console.log('your age in sec is '+ theAge*600);
// }
// else console.log(" Age Out Of Range");
// }


// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months





/**************************************************/
//Assignment 4


// function checkStatus(a, b, c) {
//   if(typeof a=="string" && typeof b == "number" &&  c==true)
//   {console.log('hello ' + a +",your age is "+ b + ",You Are Available For Hire" );}

//   else if(typeof b=="string" && typeof a == "number" &&  c==true)
//   {console.log('hello ' + b +",your age is "+ a + ",You Are Available For Hire" );}

//   else if(typeof c=="string" && typeof b == "number" &&  a==true)
//   {console.log('hello ' + c +",your age is "+ b + ",You Are Available For Hire" );}

//   else if(typeof b=="string" && typeof c== "number" &&  a==false)
//   {console.log('hello ' + b +",your age is "+ c + ",You Are  not Available For Hire" );}
// }

// Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




/**************************************************/
//Assignment 5


// function createSelectBox(startYear, endYear) {

//   document.write(`
//   <select>`);
//   for( var i=startYear;i<=endYear;i++)
//   {
//     document.write(`
//     <option value=${i}>
//      ${i}
//     </option>`
//     );
//   }
//     document.write(` </select>`);
   
// }
// createSelectBox(2000, 2021);



/**************************************************/
//Assignment 6
var res;
function multiply(...num)
{
  res=1;
  for(var i=0;i<num.length;i++)
  {
    if(typeof num[i]=='string') continue;
    res*=parseInt(num[i]);
  }
  console.log(res);
}

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000