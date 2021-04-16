function setup() {
  createCanvas(1280, 720);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();

  jogo.setup();

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial, //refatorar no futuro, quando o nome e o mesmo pode manter so um
  };

  botaoGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

function touchStarted(event) {
  jogo.touchStarted();
}

function touchEnded(event) {
  jogo.touchEnded();
}
