function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    ImagemTroll = loadImage('imagens/inimigos/troll.png');
    ImagemVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

    fonteTelaIncial = loadFont('imagens/assets/fonteTelaInicial.otf');
    
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDerrota = loadSound('sons/game-over.mp3');
  }