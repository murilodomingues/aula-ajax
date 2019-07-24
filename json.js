
var nome = new String("Edir");
var cidade = "cidade";

var frutas = new Array("Uva", "pera");
var cor = ["azul","preto", "verde"];

var pessoa = {

    nome: "Edir",
    idade: 23,
    cidade: cidade,

    imprimir: function(){
        console.log("Nome: " + this.nome)
    }

};

pessoa.idade = 33;

console.log(pessoa)

pessoa.imprimir();

// converte objeto para string
var formato = JSON.stringify(pessoa);

console.log(formato);

//converte uma string no formato json para obajeto
var novo = JSON.parse('{"nome":"Edir","idade":33,"cidade":"cidade"}')

console.log(novo);









