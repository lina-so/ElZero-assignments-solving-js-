// /**************************************************/
// //Assignment 1


//<div id="elzero" class="element" name="js">JavaScript</div> 

// var x1=document.getElementById("elzero");
// var x2=document.getElementsByClassName("element");
// var x3=document.getElementsByTagName("div");
// var x4=document.querySelector(".element");
// var x5= document.querySelector("#elzero");
// var x6=document.querySelector("div");
// var x7=document.querySelector("div[name='js']");
// var x8=document.querySelectorAll("div");
// var x9=document.querySelectorAll("#elzero");
// var x10=document.querySelectorAll(".element");
// var x11=document.querySelectorAll("div[name='js']");
// var x12=document.body.firstElementChild;
// var x13=document.body.children[0];
// var x14=document.body.childNodes[1];
// var x15=document.getElementById("elzero").cloneNode(true);

// console.log(x1);
// console.log(x9);
// console.log(x10);
// console.log(x12);
// console.log(x15);
// console.log(x6);
// console.log(x7);


// /**************************************************/
// //Assignment 2
// for(var i=0;i<10;i++)
// {
//   var x=document.querySelectorAll("div img");
//   x[i].setAttribute("src",`https://elzero.org/wp-content/themes/elzero/imgs/logo.png`);
//   x[i].setAttribute("alt","Elzero Logo");
//   console.log(x);
// }


// /**************************************************/
// //Assignment 3

// let inp=document.querySelector("[name='dollar']");
// let dv=document.querySelector(".result");



// var txt;
// inp.onkeyup=function(){
    
//  txt=`${inp.value} USD Dollar = ${(inp.value*15.6).toFixed(2)} Egyptian Pound`;
// dv.innerHTML=txt;

// };





// /**************************************************/
// //Assignment 4


/* <div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div> */

// var d1=document.querySelectorAll("div");
// var x=document.createElement('div');
// x.setAttribute("title",`${d1[0].getAttribute("title")}`);
// var y=d1[1].getAttribute("title");
// d1[1].setAttribute("title",`${x.getAttribute("title")}`);
// d1[0].setAttribute("title",`${y}`);
// var c1=d1[0].textContent;
// var c2=d1[1].textContent;
// d1[0].textContent=c2;
// d1[1].textContent=c1;
// // d1[0].textContent="";
// console.log(d1[0]);
// console.log(d1[1]);




// /**************************************************/
// //Assignment 5

// let im=document.images;
// for(var i=0;i<im.length;i++)
// {
//     if(im[i].hasAttribute("alt")) im[i].setAttribute("alt","old");
//     else
//     im[i].setAttribute("alt","Elzero New");
// }



// /**************************************************/
// //Assignment 6

let ele=document.querySelector("[name='elements']");
let text=document.querySelector("[name='texts']");
let select=document.querySelector("[name='type']");
let create=document.querySelector("[name='create']");
let res=document.querySelector(".results");


let nwDiv,nText;
select.onchange=function(){
 create.onclick=function(){
 
  if(select.value=="Div")
  {
    for(var i=0;i<ele.value;i++)
        {
          
           nwDiv= document.createElement('div');
            nText=document.createTextNode(text.value);
            nwDiv.style.background='white';
            nwDiv.style.width='100%';
            nwDiv.style.height='50%';
          res.appendChild(nwDiv);
          nwDiv.appendChild(nText);
          nwDiv.setAttribute("class","nwdiv");
        }
  }
  else
  {
    for(var i=0;i<ele.value;i++)
        {
          
           nwSec= document.createElement('section');
            nText=document.createTextNode(text.value);
            nwSec.style.background='white';
            nwSec.style.width='100%';
            nwSec.style.height='50%';
          res.appendChild(nwSec);
          nwSec.appendChild(nText);
          nwSec.setAttribute("class","nwdiv");
        }
  }
        
       
       
       };
}
ele.onfocus=function(){
  res.innerHTML="";
}


// console.log(ele);