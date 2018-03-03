//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*alert("Funciona 3-EntradaSalida");*/

	/*
3-Realizar el algoritmo que al presionar el botón "Mostrar" tome por ID dos datos, el largo y ancho de un terreno 
y luego que muestre cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro*/

var largo;
var ancho;
var alambre;
var perimetro;
var alambrado;

largo=document.getElementById('largo').value;
ancho=document.getElementById('ancho').value;

largo=parseInt(largo);
ancho=parseInt(ancho);

perimetro=(ancho*2+largo*2);
alambrado=perimetro*6;

alert("Se necesitan "+alambrado+" metros de alambrado");




}

