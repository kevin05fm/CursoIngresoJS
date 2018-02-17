/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	 
	numeroSecreto=Math.floor(Math.random()*100)+1;

	contadorIntentos=0;

	

}

function verificar()
{
		if(contadorIntentos>7)	
	{
		alert("perdiste");
		return;

	}

	console.log(numeroSecreto);

	contadorIntentos+=1;

	var numero;
	

	numero=document.getElementById('numero').value;
    numero=parseInt(numero);

   	
    document.getElementById('intentos').value=contadorIntentos;
   
 	if(contadorIntentos==1)
 	{
 		numeroSecreto=Math.floor(Math.random()*100)+1;

 	}

	if(numeroSecreto==numero)
	{	
		alert("usted es el ganador");

	}
	else	
		{
			if(numeroSecreto>numero)
			{
				alert("se paso...");
			}
			else
			{
				alert("falta...");
			}


		
		}
	



}