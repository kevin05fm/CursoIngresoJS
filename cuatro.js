function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	
 	numeroUno=prompt("primer numero" );
	numeroDos=prompt("segundo numero" );

	if(numeroUno==numeroDos)

	{  
		resultado=(numeroUno*numeroDos);

		document.write("el resultado es " + resultado);

	}
	else
		{	if (numeroUno>numeroDos) 
			{
				resultado=(numeroUno-numeroDos);

				document.write("el resultado es " + resultado);

			}
			else
			{
				resultado=(numeroUno + numeroDos);

				document.write("el resultado es " + resultado);


			}

			 
				

		}
 		
 		

}
