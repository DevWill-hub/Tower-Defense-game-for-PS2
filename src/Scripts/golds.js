let goldSpriteSheet = new Image("assets/Coin/gold_spritesheet.png", RAM);

export default class Gold {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;

        this.idleFrames = [
            { x: 0, y: 0, width: 27, height: 44, endx: 27, endy: 44 }, // 1
            { x: 27, y: 0, width: 7, height: 44, endx: 34, endy: 44 }, // 2
            { x: 34, y: 0, width: 27, height: 44, endx: 61, endy: 44 }, // 3
            { x: 61, y: 0, width: 44, height: 44, endx: 105, endy: 44 } // 4
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
        if (goldSpriteSheet && goldSpriteSheet.ready()) {
            const frame = this.idleFrames[this.currentFrame];
            if (frame) {
                goldSpriteSheet.startx = frame.x;
                goldSpriteSheet.starty = frame.y;
                goldSpriteSheet.width = frame.width;
                goldSpriteSheet.height = frame.height;
                goldSpriteSheet.endx = frame.endx;
                goldSpriteSheet.endy = frame.endy;
                goldSpriteSheet.draw(this.x, this.y);
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