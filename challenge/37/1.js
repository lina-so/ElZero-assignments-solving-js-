let a=10;

// if(a<10)
// {
//     console.log(10);
// }
// else if(a>=10 && a<=40) console.log("10 to 40");
// else if(a>40) console.log(">40");
// else console.log("unk");



 a<10?console.log(10):(a>=10 && a<=40)? 
 console.log("10 to 40"):a>40? console.log(">40"): console.log("unk");




 //////////////////////////////assignment 2

 let st = "Elzero Web School";

 if(st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
    console.log("Good");
  }


  if (!typeof st !== "string") {
    console.log("Good");
  }

  if (typeof parseInt(st) === "number") {
    console.log("Good");
  }


  if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
  }