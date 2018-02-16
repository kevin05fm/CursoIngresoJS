function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	perimetro=(largo*2 + ancho*2)*3;

	alert("los metros de alambre que necesita son "+perimetro);


}
