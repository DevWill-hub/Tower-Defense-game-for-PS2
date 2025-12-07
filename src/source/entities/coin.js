let coinSpriteSheet = new Image("graphics/coin/coin_spritesheet.png", RAM);

export default class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;

        this.idleFrames = [
            { x: 0, y: 0, width: 27, height: 44, endx: 27, endy: 44 },
            { x: 27, y: 0, width: 7, height: 44, endx: 34, endy: 44 },
            { x: 34, y: 0, width: 27, height: 44, endx: 61, endy: 44 },
            { x: 61, y: 0, width: 44, height: 44, endx: 105, endy: 44 }
        ];

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 4;
    }

    update() {
        this.frameCounter++;
        if (this.frameCounter >= this.frameSpeed) {
            this.frameCounter = 0;
            this.currentFrame = (this.currentFrame + 1) % this.idleFrames.length;
        }
    }

    draw() {
        if (coinSpriteSheet && coinSpriteSheet.ready()) {
            const frame = this.idleFrames[this.currentFrame];
            if (frame) {
                coinSpriteSheet.startx = frame.x;
                coinSpriteSheet.starty = frame.y;
                coinSpriteSheet.width = frame.width;
                coinSpriteSheet.height = frame.height;
                coinSpriteSheet.endx = frame.endx;
                coinSpriteSheet.endy = frame.endy;
                coinSpriteSheet.draw(this.x, this.y);
            }
        }
    }

    checkCollision(playerX, playerY) {
        const miraWidth = 30;
        const miraHeight = 30;

        return (
            playerX < this.x + this.width &&
            playerX + miraWidth > this.x &&
            playerY < this.y + this.height &&
            playerY + miraHeight > this.y
        );
    }
}