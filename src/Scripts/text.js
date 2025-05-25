// Script não usando apenas era para tests de otimizacão.

let levelCompleteMessage = new Image("src/Assets/Menu/mesagem.png");

export default class Texto {
    constructor() {
        this.posicaoX = 189;
        this.posicaoY = 163;
    }

    draw() {
        if (levelCompleteMessage && levelCompleteMessage.ready()) {
            levelCompleteMessage.draw(this.posicaoX, this.posicaoY);
        }
    }
}