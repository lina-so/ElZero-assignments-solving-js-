let my_title= "Elzero",
my_dec= "Elzero Web School",
my_date= "25/10";

let contain=`
<div class="card">
<h3> hello ${my_title}</h3>
<p>${my_dec}</p>
<span>${my_date}</span>
</div>
`;

document.write(contain.repeat(4));