function Mostrar()
{
	/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/



	var contadordeceros=0;
	var numero;
	var respuesta="si";
	var acumuladorpositivo=0;
	var acumuladornegativo=0;
	var contadorpositivo=0;
	var contadornegativo=0;
	var contadordepares=0

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		
		if(numero>0)
			{
				contadorpositivo=contadorpositivo+1
				acumuladorpositivo=acumuladorpositivo+numero;

			}else
			{	if(numero<0)
				{
					contadornegativo=contadornegativo+1;
					acumuladornegativo=acumuladornegativo+numero;
				}else		
				{
					contadordeceros=contadordeceros+1;

				}
		if(numero%2==0&&numero!=0)
		{
			contadordepares=contadordepares+1;
		}	

	respuesta=prompt("si desea salir ingrese no");
	
	}

	document.write("<br> el promedio de positivos es " acumuladorpositivo/contadorpositivo);
	document.write("<br> el promedio de los negativos es ")acumuladornegativo/contadornegativo;
	document.write("<br> la diferencia entre positivos y negativos es "acumuladorpositivo- acumuladornegativo);



}//FIN DE LA FUNCIÓN