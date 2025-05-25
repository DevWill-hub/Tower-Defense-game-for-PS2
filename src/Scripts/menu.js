let background = new Image("assets/bg/background.png");
let startButton = new Image("assets/Menu/start.png");

export default class StartScreen {
    constructor() {
        this.isActive = true;
        this.buttonX = 189;
        this.buttonY = 163;
    }

    draw() {
        if (background && background.ready()) {
            background.draw(0, 0);
        }

        if (startButton && startButton.ready()) {
            startButton.draw(this.buttonX, this.buttonY);
        }
    }

    checkStart() {
        const pad = Pads.get(0);

        if (pad.justPressed(Pads.START)) {
            this.isActive = false;
        }
    }
    
    reset() {
      this.isActive = true;
    }
    
    free() {
      startButton = null;
      background = null;
      
      std.gc();
    }
}