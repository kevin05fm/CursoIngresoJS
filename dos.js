function Mostrar()
{
  var importe;
	
	importe=prompt("el importe es ");
  
  	importe=parseInt(importe);
  	importe=importe+(importe*21)/100;
  
  	document.getElementById('importeFinal').value=importe;

  


}
