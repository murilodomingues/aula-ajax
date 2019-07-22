
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
