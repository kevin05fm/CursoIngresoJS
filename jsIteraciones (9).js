function Mostrar()
{

	var contador=0;
	var numero;
	var respuesta='si';
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(contador==0)
		{
			contador=contador+1;
			maximo=numero;
			minimo=numero;
		}
		else
			{
				if(numero>maximo)
				{
					maximo=numero;
				}
				else
				{	
					if (numero<minimo) 
					{
						minimo=numero;
					}

				}

			}		


		respuesta=prompt("Para salir escribir no ");
	
	}
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;




}
//FIN DE LA FUNCIÓN