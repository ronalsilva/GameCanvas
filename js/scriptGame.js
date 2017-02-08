var barraAltura, barraLargura, posicaoX, velocidadeJogador, bolaPosX, bolaPosY, bolaDiametro, velocidadeBola, pontosJogador, colisao;

function inicializar() {
	//barra jogador
	barraAltura = 15;
	barraLargura = 90;

	//possição jogador
	posicaoX = (canvas.width - barraLargura) / 2;
	velocidadeJogador = 30;

	//bola
	bolaDiametro = 10;
	bolaPosX = canvas.width / 2;
	bolaPosY = 10;
	velocidadeBola = 10;

	//Pontos jogador
	pontosJogador = 0;

	//colisao
	colisao = false;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	context.fillStyle = "black";

	context.fillRect(posicaoX, canvas.height - barraAltura, barraLargura, barraAltura);

	document.addEventListener('keydown', keyDown);

	context.font = "32pt Tahoma";
	context.fillText("Click para começar", (canvas.width / 2) - 175, canvas.height / 2);
	context.fillText(pontosJogador, canvas.width - 70, 50);

	canvas.addEventListener('click', function(e){
		setInterval(gameLoop, 30);
		setInterval(loopPoint, 90);
	}, false);
}

function keyDown(e) {
	if(e.keyCode == 37) {
		if(posicaoX > 0) {
			posicaoX -= velocidadeJogador;
		}
	}
	if(e.keyCode == 39) {
		if(posicaoX < (canvas.width - barraLargura)) {
			posicaoX += velocidadeJogador;
		}
	}
}

function gameLoop() {

	//movimento jogador
	context.clearRect( 0, 0, canvas.width, canvas.height);
	context.fillRect(posicaoX, canvas.height - barraAltura, barraLargura, barraAltura);

	//add bola
    context.beginPath();
    context.arc(bolaPosX, bolaPosY, bolaDiametro, 0, Math.PI * 2, true);
    context.fill();

	if(bolaPosY <= canvas.height) {
		bolaPosY += velocidadeBola;
	} else {
		bolaPosX = Math.random() * 600;
		bolaPosY = -10;
	}

	//Pontos 
	context.fillText(pontosJogador, canvas.width - 70, 50);
}

function loopPoint() {
	if((bolaPosX > posicaoX && bolaPosX < posicaoX + barraLargura) && bolaPosY >= canvas.height - barraAltura && colisao == false) {
		pontosJogador++;
	} else {
		// bolaPosX = Math.random() * 600;
		// bolaPosY = -10;
		// colisao = true;
	}

	if(pontosJogador > 10) {
		velocidadeBola = 14;
		velocidadeJogador = 45;
	}

}