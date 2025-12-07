export default class StartScreen {
    constructor() {
        this.isActive = true;
        this.buttonX = 189;
        this.buttonY = 163;
    }

    draw(background, startButton) {
        if (background && background.ready()) {
            background.draw(0, 0);
        }

        if (startButton && startButton.ready()) {
            startButton.draw(this.buttonX, this.buttonY);
        }
    }

    checkStart(pad) {
        if (pad.justPressed(Pads.START)) {
            this.isActive = false;
        }
    }
    
    reset() {
      this.isActive = true;
    }
}