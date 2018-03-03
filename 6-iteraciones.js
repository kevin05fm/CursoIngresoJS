//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*alert("Funciona 6-iteraciones");*/
	/*6-Realizar el algoritmo que al presionar el botón "Mostrar"
	 pida el importe de las ventas (validar que sea mayor a 0,”cero”) 
	 de los 7 días de la semana por prompt (una por día), e informar 
	 cual fue el mayor importe y cuál fue el menor importe de venta*/
	

var importeVentas;
var contador=0;
var maximo;
var minimo;

while(contador<7)
{
	contador=contador+1;
	importeVentas=prompt("ingresar importe");
	importeVentas=parseInt(importeVentas);

	while(importeVentas<=0||isNaN(importeVentas))
	{
		importeVentas=prompt("ingresar importe DE NUEVO");
		importeVentas=parseInt(importeVentas);
	}
		if(contador==1)
		{
			maximo=importeVentas;
			minimo=importeVentas;

		}else
		{
			if(importeVentas>maximo)
			{
				maximo=importeVentas;
			}
			if(importeVentas<maximo)
			{
				minimo=importeVentas;
			}

		}

	document.write("<br> el maximo es " +maximo);
	document.write("<br> el minimo es "+ minimo);

}




}

