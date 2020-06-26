class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigoGota, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 3, 5);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, ImagemTroll, width * 4, 0, 200, 200, 400, 400, 3, 15);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, ImagemVoador, width - 52, 200, 100, 75, 200, 150, 5, 25)

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

    draw() {
        cenario.exibe();

        cenario.move();
        pontuacao.exibe();
        pontuacao.addPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < - inimigo.largura;


        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(5, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            console.log('colidiu');
            noLoop();
            somDoJogo.pause();
            //somDerrota.play();
            image(imagemGameOver, width / 2 - 200, height / 2);
        }
    }
}