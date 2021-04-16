class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    vida = new Vida(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial
    );
    pontuacao = new Pontuacao();
    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      0,
      30,
      110,
      135,
      220,
      270
    );
    const inimigo = new Inimigo(
      matrizInimigoGota,
      imagemInimigo,
      width - 52,
      30,
      52,
      52,
      104,
      104
    );
    const inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      ImagemTroll,
      width * 4,
      0,
      200,
      200,
      400,
      400
    );
    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      ImagemVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150
    );

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (keyCode === 32) {
      personagem.pula();
      somDoPulo.play();
    }
  }

  touchStarted(event) {
    personagem.pulaTouch();
    somDoPulo.play();
  }

  touchEnded(event) {
    //personagem.pula();
  }

  draw() {
    cenario.exibe();
    cenario.move();
    vida.draw();
    pontuacao.exibe();
    pontuacao.addPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();

      if (vida.vidas === 0) {
        noLoop();
        somDoJogo.pause();
        somDerrota.play();
        image(imagemGameOver, width / 2 - 200, height / 2);
      }
    }
  }
}
