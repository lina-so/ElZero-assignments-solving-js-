let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees=["Amgad","Samah","Amer","Omar","Othman","Amany","SAmia"];

var x=myAdmins.length-myAdmins.indexOf("Stop")+1;
// console.log(myAdmins.indexOf("Stop"));
document.write(`<div> we have ${x} Admins </div>`);
document.write(`<hr>`);
for(var i=0;i<myAdmins.length;i++)
{
    var c=1;
    if(myAdmins[i]=="Stop") break;
    else 
    {
        document.write(`<div>`);
       
        document.write(`"the Admin for Team ${i+1} is"`);
        document.write(`<h3>Team members:</h3>`);
    
  
        for( var p=0;p<myEmployees.length;p++)
        {
            if(myEmployees[p][0]===myAdmins[i][0]) 
            {
                document.write(`<p> ${c++} - ${myEmployees[p]}</p>`);
            }
        }
        document.write(`</div>`);
        document.write(`<hr>`);
    }
}


