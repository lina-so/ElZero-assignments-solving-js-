let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


let i=index;
while(i<friends.length)
{
  if(friends[i][0]==='A' || typeof friends[i]==="number") {continue;}
   else  console.log(friends[i]); 
 i++;
}

// for(i=index;i<friends.length;i++)
// {
//   if(friends[i][0]=='A' || typeof friends[i]=="number") continue;
//   console.log(friends[i]);
// }
// Output
/*
"1 => Sayed"
"2 => Mahmoud"
*/