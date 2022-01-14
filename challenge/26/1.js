let a=10_00;
let b=2_00.5,
c=1e2,
d=2.4;

//find smallest number in All variables and return int
console.log(Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d)));


//use a+d to get value 10000
console.log(parseInt(d)**a);
console.log(parseInt(d)*a*5);
//get int 2
console.log(parseInt(d));
console.log(parseInt(d.toString().slice(0,1)));
console.log(parseInt(d.toFixed(0)));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log((d*10)/12);


//use d+b 2_00.5 b   , d=2.4
console.log(((parseInt(b)/parseInt(d))-33.33).toString());//66.67 string
console.log(parseInt(Math.round((parseInt(b)/parseInt(d))-33.33)));//67 number

console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.trunc(b)/Math.ceil(d)))); // 67 number