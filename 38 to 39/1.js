// let day = "   friday  ";
// if(day.trim()&& day[0].toUpperCase)
// {
//   console.log("You Need To Remove Spaces And Make First Letter Capital => Friday");
// }
// // You Need To Remove Spaces And Make First Letter Capital => Friday






// var day = "Friday";
// var day = "Saturday";
// var day = "Sunday";
// var day = "Monday";
// var day = "Thursday";
// var day = "Tuesday" , day="Wednesday";
var day=prompt("Enter your day ");
// console.log(day);
switch(day)
{
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
    case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
   case "Tuesday":
      console.log("From 10:00 AM To 6:00 PM");
      break;
   case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
      console.log("Its Not A Valid Day");
}










// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"