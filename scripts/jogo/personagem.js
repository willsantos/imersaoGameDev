class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    dano
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.variacaoY = variacaoY;

    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -45;
    this.pulos = 0;
    this.dano = imagemPersonagemDano;
  }

  pula() {
    if (this.pulos < 3) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  ficaInvencivel() {
    somHit.play();
    this.invencivel = true;
    this.imagem = imagemPersonagemDano;
    setTimeout(() => {
      this.invencivel = false;
      this.imagem = imagemPersonagem;
    }, 5000);
  }
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }

    const precisao = 0.7;

    /* 
    **Debug porco
    fill("rgba(0,255,0,0.25)");

    rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
    rect(
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    ); */

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}
