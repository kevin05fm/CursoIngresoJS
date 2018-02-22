function Mostrar()
{
//tomo la edad  
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if(edad>17)
{
	alert("Es mayor");

}
else
	alert("Es menor");






}//FIN DE LA FUNCIÓN