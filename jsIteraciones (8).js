function Mostrar()
{
	/*Al presionar el botón pedir números hasta que el usuario quiera,
	 sumar los que son positivos y multiplicar los negativos.*/

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(numero>=0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero
		}	



		respuesta=prompt("Para salir ingrese no ");



	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN