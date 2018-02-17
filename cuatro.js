function Mostrar()
{
	var numeroUno;
 	var numeroDos;
 	var resultado;
 
 	
  	numeroUno=prompt("primer numero" );
 	numeroDos=prompt("segundo numero" );

 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);
 
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
