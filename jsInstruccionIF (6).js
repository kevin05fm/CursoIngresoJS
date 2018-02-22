function Mostrar()
{
//tomo la edad  
/*Al ingresar una edad debemos 
informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años)*/

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if(edad>17)
{
	alert("Es mayor");
}
else{
		if(edad>12)
		{
			alert("Es adolescente");
		}	
		else
		{ alert("es menor");

		}	
	}	


}//FIN DE LA FUNCIÓN