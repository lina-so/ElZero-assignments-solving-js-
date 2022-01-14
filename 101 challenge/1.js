//header
let header = document.createElement("header");
header.setAttribute("class","website_head");

let list= document.createElement("ul");
let li,list_txt=["Home","About","service","Contact"],a,h1;
h1=document.createElement("h1");
h1_txt=document.createTextNode("Elzero");
header.appendChild(h1);
h1.appendChild(h1_txt);
for(var i=0;i<4;i++)
{
  li=document.createElement("li");
  a=document.createElement('a');
  li.appendChild(a);
 li.appendChild(document.createTextNode(list_txt[i]));
  list.appendChild(li);
  li.setAttribute("class","list_content");
a.setAttribute("class","list_link");
}
header.appendChild(list);
document.body.appendChild(header);

list.setAttribute("class","list");
h1.setAttribute("class","logo");

//body
let container=document.createElement("div");
let div,span,txt;
container.setAttribute("class","content");
for(var i=0;i<15;i++)
{
  div=document.createElement("div");
  div.setAttribute("class","product");
  span=document.createElement("span");
  span.setAttribute("class","span");
  txt=document.createTextNode(i+1);
  span.appendChild(txt);
  div.appendChild(span);
  container.appendChild(div);
  div.append("product");
  
}
document.body.appendChild(container);
//footer
let footer=document.createElement("footer");
footer.append("CopyRight 2021");
document.body.appendChild(footer);
container.insertBefore(div,footer);
































// // /**************************************************/
// // //Assignment 6

// let ele=document.querySelector("[name='elements']");
// let text=document.querySelector("[name='texts']");
// let select=document.querySelector("[name='type']");
// let create=document.querySelector("[name='create']");
// let res=document.querySelector(".results");


// let nwDiv,nText;
// select.onchange=function(){
//  create.onclick=function(){
 
//   if(select.value=="Div")
//   {
//     for(var i=0;i<ele.value;i++)
//         {
          
//            nwDiv= document.createElement('div');
//             nText=document.createTextNode(text.value);
//             nwDiv.style.background='white';
//             nwDiv.style.width='100%';
//             nwDiv.style.height='50%';
//           res.appendChild(nwDiv);
//           nwDiv.appendChild(nText);
//           nwDiv.setAttribute("class","nwdiv");
//         }
//   }
//   else
//   {
//     for(var i=0;i<ele.value;i++)
//         {
          
//            nwSec= document.createElement('section');
//             nText=document.createTextNode(text.value);
//             nwSec.style.background='white';
//             nwSec.style.width='100%';
//             nwSec.style.height='50%';
//           res.appendChild(nwSec);
//           nwSec.appendChild(nText);
//           nwSec.setAttribute("class","nwdiv");
//         }
//   }
        
       
       
//        };
// }
// ele.onfocus=function(){
//   res.innerHTML="";
// }


// // console.log(ele);




