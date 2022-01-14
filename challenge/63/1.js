
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




function checkStatus(a, b, c) {
  return (typeof a=="string" && typeof b == "number" &&  c==true)?
  console.log('hello ' + a +",your age is "+ b + ",You Are Available For Hire" ):

  (typeof b=="string" && typeof a == "number" &&  c==true)?
  console.log('hello ' + b +",your age is "+ a + ",You Are Available For Hire" ):

(typeof c=="string" && typeof b == "number" &&  a==true)?
  console.log('hello ' + c +",your age is "+ b + ",You Are Available For Hire" ):

  (typeof b=="string" && typeof c== "number" &&  a==false)?
  console.log('hello ' + b +",your age is "+ c + ",You Are  not Available For Hire" ):"";
}



checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



