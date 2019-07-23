
var nome = "Edir";

// E -> P -> S
function oi()
{
    var nome = "Pedro";
    console.log("oi " + nome);
   

    function outra()
    {
        console.log("dentro " + nome );
    }

    outra("Maria");

}


oi("Marcos");

// função anonima
var cidade = function (cidade)
{
    console.log("imprimiu: " + cidade)
}

console.log(cidade("Curitiba"))

//"abc".toUpperCase()

//Orietação a objetos - Classe
var Pessoa = function()
{
    var nome = "";

    function imprimir() {
        console.log(this.nome);
    }
}

var joao = new Pessoa();

Pessoa.prototype.mostrar = function ()
{
    console.log(this.nome)
}

joao.nome = "João";
joao.mostrar();

console.log(joao)

String.prototype.imprimir = function()
{
    console.log("mexeu com a string!");
}
