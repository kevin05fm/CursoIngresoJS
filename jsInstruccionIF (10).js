function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostar:
	"EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/

	var nota;

	nota=Math.floor(Math.random()*10)+1;


	if(nota>8)
	{
		alert(nota +" exelente");
	}
	else
	{
		if(nota<4)
		{
			alert(nota+" vamos la proxima se puede");
		}
		else
		{
			alert(nota+" Aprobo");
		}
	}


}//FIN DE LA FUNCIÓN