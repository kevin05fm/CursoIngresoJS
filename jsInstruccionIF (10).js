function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

    numeroRandom=Math.floor(Math.random()*10)+1;


	if(numeroRandom>8)
		{alert("exelente "+numeroRandom);
	
	}
	if(numeroRandom>3&&numeroRandom<9)
		{alert("aprobó "+numeroRandom);
	}
	if(numeroRandom<4)
		{ alert("vamos la proxima se puede "+numeroRandom);
	}

}//FIN DE LA FUNCIÓN