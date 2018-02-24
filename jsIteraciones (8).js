function Mostrar()
{
/*Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	while(respuesta!="terminar")
	{
		contador=contador+1;
		numero=prompt("ingresar numero");
		numero=parseInt(numero);

		if(numero>=0)
		{
			positivo=positivo+numero;

			
		}
		

		if(numero<0)
		{
			
			negativo=negativo*numero;

		}

		

		respuesta=prompt("para salir ingresar palabra terminar");


	}





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN