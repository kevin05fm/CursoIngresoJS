//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*alert("Funciona 4-if");*/
	/*4-Realizar el algoritmo que al presionar el botón "Mostrar"
	pida dos números por prompt, si son iguales que los multiplique, 
	soni el primero es mayor al segundo que los reste y si no que los sume, 
	mostrar el resultado por document.write.*/


 	var numeroUno;
 	var numeroDos;
 	var resultado;

 	numeroUno=prompt("ingresar un numero");
 	numeroDos=prompt("ingresar un numero");
 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}else
		{
			if(numeroUno>numeroDos)
			{
				resultado=numeroUno-numeroDos;
			
			}else
				{	if(numeroUno<numeroDos)
					{
						resultado=numeroUno +numeroDos;
					}

				}
		}

	document.write("el resultado es "+ resultado);	
	
}

