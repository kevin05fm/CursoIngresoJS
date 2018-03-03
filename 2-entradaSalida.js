//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*alert("Funciona 2-EntradaSalida");*/
	/*2-Realizar el algoritmo que al presionar
	 el botón "Mostrar" lea un importe de un producto por prompt y muestre el importe final sumándole el IVA (21%)*/

	 var importe;
	 var importefinal;

	 importe=prompt("ingrese importe");
	 importe=parseInt(importe);

	 importefinal=importe+importe*0.21;

	 document.getElementById('importe').value=importefinal;




}

