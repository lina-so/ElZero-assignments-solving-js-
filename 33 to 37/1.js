// //التكليف 01

// let numOne = 9;
// if(numOne<10)
// {
//     console.log("00"+numOne);
// }
// // Condition Output => "009"

// let numTwo = 20;
// if(numTwo>10 && numTwo<100)
// {
//     console.log("0"+numTwo);
// }
// // Condition Output => "020"

// let numThree = 110;
// if(numThree>=100)
// {
//     console.log(numThree);
// }
// // Condition Output => "110"


// //التكليف 02

// let num1 = 9;
// let str = "9";
// let num2 = "20";

// if(num1 == str)
// {
//     console.log("{num1} Is The Same Value As {str}");
// }

// if(!(num1 === str))
// {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }


// if(num1 !== num2)
// {
//     console.log("{num1} Is Not The Same Value Or The Same Type As {num2}");
// }
// // // Output
// // "{num1} Is The Same Value As {str}"
// // "{num1} Is The Same Value As {str} But Not The Same Type"
// // "{num1} Is Not The Same Value Or The Same Type As {num2}"








//Assignment 3


// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3>num1 && num3 !== num2)
// {
//     console.log("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
// }


// if(num3>num1 && num3 == num2)
// {
//     console.log("{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}");
// }


// if(num3 !== num1 && num3 == num2)
// {
//     console.log( "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
// }

// // Needed Output
// "{num3} Is Larger Than {num1} And Not The Same Type As {num2}"
// "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"








//Assignment 4

// Edit What You Want Here

var num1 = 10;
var num2 = 1;
var num3 = 10;
var num4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}