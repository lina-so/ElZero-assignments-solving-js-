// use filter + map + reduce + your knowledge
//orders is not improtant 
//all in one chain 
/*
you can use 
,
_
space 
true just 1 time 

do not use letter ,  numbers 
*/

let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let sol=myString.split("").map(function(ele)
{
 return isNaN(parseInt(ele))?ele:"";
}).filter(function(ele)
{
  return ele!=="," && ele!=="" && ele!=="_";
}).reduce(function(acc,cur,indx)
{
  return acc+cur;
}).slice(true,-true);

console.log(sol);