
var cidade = "Curitiba";

var cidades = new Array("Colombo", "Araucaria", "Pinhais", cidade);

cidades.unshift("Lapa");

console.log(cidades);

for (var i = 0; i < cidades.length; i++)
{
    console.log(cidades[i])
}

cidades.sort().reverse().forEach(function(val, idx){
    console.log("index:"+ idx + " Valor: " + val);
});