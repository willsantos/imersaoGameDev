function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemPersonagemDano = loadImage("imagens/personagem/dano.png");

  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemVida = loadImage("imagens/assets/coracao.png");
  ImagemTroll = loadImage("imagens/inimigos/troll.png");
  ImagemVoador = loadImage("imagens/inimigos/gotinha-voadora.png");

  fonteTelaIncial = loadFont("imagens/assets/fonteTelaInicial.otf");
  fita = loadJSON("fita/fita.json");

  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/somPulo.mp3");
  somDerrota = loadSound("sons/game-over.mp3");
  somHit = loadSound("sons/sons_hit.wav");
}
