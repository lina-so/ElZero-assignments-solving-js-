//Assignment 1
// let prom=prompt("Print Number From – To","Example: 5-20");
// let res=prom;
// let index=res.indexOf("-");
// let left=res.slice(0,index);
// let right=res.slice(index+1);
// if(left>right)
// {
//     let t=left;
//     left=right;
//     right=t;
// }
// for(var i=left;i<=right;i++)
// {
//     console.log(i);
// }





//Assignment 2

// let container=document.querySelector(".container");
// let span=document.querySelector("span");
// let time=setTimeout(close,5000);

// function close()
// {
//     container.style.display="none";
// }
// span.addEventListener("click",close);


//Assignment 3,4,5

let count=document.querySelector(".count");
function countdown()
{
    count.innerHTML-=1;
    if(count.innerHTML==0)
    {
        location.href="http://Elzero.org";
       clearInterval(time);
    }
    else if(count.innerHTML==5)
    {
        window.open("http://Elzero.org"," ","width=400,height=400");
        clearInterval(time);
    }
};

let time=setInterval(countdown, 1000);



