function Mostrar()
{
  var importe;

  var importe=prompt("ingrese importe");
  
  importe=parseInt(importe);
  importe=importe+(importe*21)/100;

 document.getElementById('importeFinal').value=importe;

}
