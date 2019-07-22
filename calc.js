//calc.js

function somar()
{

	var n1 = document.getElementById("n1");
	//var n2 = document.getElementById("n2");
	var visor = document.getElementById("visor");
	
	var res = parseFloat(n1.value) + parseFloat(visor.innerText);
	
	visor.innerText = res;
	
	n1.value = res;

}

function add(num)
{
	var visor = document.getElementById("visor");
	
	visor.innerText = visor.innerText + num;
	
}
