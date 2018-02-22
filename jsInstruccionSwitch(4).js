function Mostrar()
{
/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/
  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
	{ 
		case"Febrero":
			alert("tiene 28 días");
			break;
		case"Abril":
		case"Junio":		
		case"Septiembre":
		case"Noviembre":
			alert("tiene 30 días");
		break;
		
		default:
			alert("tiene 31 dias");	

	}	
	
	



}//FIN DE LA FUNCIÓN