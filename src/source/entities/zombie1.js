let zombie1SpriteSheet = new Image("graphics/zombies/zombie1_spritesheet.png");

export default class Zombie1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 0.4;
        this.health = 100;
        this.state = 'left';

        this.leftFrames1 = [
            { x: 0, y: 0, width: 28, height: 67, endx: 28, endy: 67 },
            { x: 28, y: 0, width: 34, height: 67, endx: 62, endy: 67 },
            { x: 62, y: 0, width: 35, height: 67, endx: 97, endy: 67 },
            { x: 97, y: 0, width: 28, height: 67, endx: 125, endy: 67 },
            { x: 0, y: 67, width: 29, height: 67, endx: 29, endy: 133 },
            { x: 29, y: 67, width: 29, height: 67, endx: 62, endy: 133 }
        ];

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameSpeed = 8;
    }

    isDead() {
        return this.health <= 0;
    }
    
    isCollidingWithDefender(defender) {
      return (
        this.x < defender.x + defender.width &&
        this.x + this.width > defender.x &&
        this.y < defender.y + defender.height &&
        this.y + this.height > defender.y
      );
    }

    attackDefender(defenders) {
      let isAttacking = false;

      for (const defender of defenders) {
        if (this.isCollidingWithDefender(defender)) {
            isAttacking = true;
            if (!this.lastAttackTime || Date.now() - this.lastAttackTime >= 1000) {
                defender.takeDamage?.(40);
                this.lastAttackTime = Date.now();
            }
            break;
          }
        }
      this.isAttacking = isAttacking;
    }

    update(defenders) {
      this.attackDefender(defenders);

      if (!this.isAttacking) {
        this.x -= this.speed;
      }

      this.frameCounter++;
      if (this.frameCounter >= this.frameSpeed) {
        this.frameCounter = 0;
        this.currentFrame = (this.currentFrame + 1) % this.leftFrames1.length;
      }
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
        }
    }

    draw() {
        if (zombie1SpriteSheet && zombie1SpriteSheet.ready() && this.leftFrames1.length > 0) {
            const frame = this.leftFrames1[this.currentFrame];

            if (frame) {
                zombie1SpriteSheet.startx = frame.x;
                zombie1SpriteSheet.starty = frame.y;
                zombie1SpriteSheet.width = frame.width;
                zombie1SpriteSheet.height = frame.height;
                zombie1SpriteSheet.endx = frame.endx;
                zombie1SpriteSheet.endy = frame.endy;
                zombie1SpriteSheet.draw(this.x, this.y);
            }
        }
    }

    isOutOfScreen() {
        return this.x + this.width < 0;
    }
}