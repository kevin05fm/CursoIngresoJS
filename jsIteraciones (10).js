function Mostrar()
{
//declarar contadores y variables 

/*	Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos.
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

	var respuesta="si";
	var numero;
	var acumuladorNegativo=0;
	var acumuladorPositivo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorDeCeros=0;
	var contadorDePares=0;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaDePyN;

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("ingrese numero");
			numero=parseInt(numero);

		}

		if(numero<0)
		{
			acumuladorNegativo=acumuladorNegativo+numero;
			contadorNegativo=contadorNegativo+1;

		}else
			{	if(numero>0)
				{
					acumuladorPositivo=acumuladorPositivo+numero;
					contadorPositivo=contadorPositivo+1;
				}
				else
				{
					contadorDeCeros=contadorDeCeros+1;
					
				}

			}

	if(numero%2==0 && numero!=0)
	{
		contadorDePares=contadorDePares+1;

	}	


		respuesta=prompt("Para salir ingrese no");
	
	}

	promedioPositivo=acumuladorPositivo/contadorPositivo;
	promedioNegativo=acumuladorNegativo/contadorNegativo;
	diferenciaDePyN=acumuladorPositivo-acumuladorNegativo;


	document.write("<br>la suma de los negativos es "+acumuladorNegativo);
	document.write("<br>la suma de los numeros positivos es "+acumuladorPositivo);
	document.write("<br> la cantidad de positivos es "+contadorPositivo);
	document.write("<br> la cantidad de negativos es "+contadorNegativo);
	document.write("<br> la cantidad de pares es "+contadorDePares);
	document.write("<br> la cantidad de ceros es "+contadorDeCeros);
	document.write("<br>el promedio de positivos es "+promedioPositivo);
	document.write("<br>el promedio de negativos es "+promedioNegativo);
	document.write("<br> la diferencia de positivo y negativos es " +diferenciaDePyN);

}//FIN DE LA FUNCIÓN