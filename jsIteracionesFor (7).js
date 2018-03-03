function Mostrar()
{
	/*al presionar el botón pedir un número. 
	Mostar los numeros divisores desde el 1 al número ingresado, y mostar la cantidad de numeros divisores encontrados.*/
	var numero;
	numero=prompt("ingrese numero");

	for(var contador=1;contador<=numero;contador++)
	{
		if(numero%contador==0)
		{
			document.write("<br>"+contador);
		}
	}

		

}//FIN DE LA FUNCIÓN