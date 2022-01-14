for(var i=0;i<10;i++)
{
var myDiv=document.createElement("div");
var myTagH3=document.createElement("h3");
var myP=document.createElement("p");
var txt1=document.createTextNode("the content of paragraph"),
txt2=document.createTextNode("the content of h3");

myDiv.setAttribute("class","product");


  document.body.appendChild(myDiv);
  myDiv.appendChild(myTagH3);
  myTagH3.appendChild(txt2);
  myDiv.appendChild(myP);
  myP.appendChild(txt1);
}
