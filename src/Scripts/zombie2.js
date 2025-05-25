let zombieSpriteSheet2 = new Image("assets/Zombies/zombie_spritesheet2.png");

export default class Zombie2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 0.4;
        this.health = 100;
        this.state = 'left';

        this.leftFrames = [
            { x: 0, y: 0, width: 29, height: 67, endx: 25, endy: 67 },
            { x: 25, y: 0, width: 31, height: 67, endx: 56, endy: 67 },
            { x: 56, y: 0, width: 29, height: 67, endx: 85, endy: 67 },
            { x: 85, y: 0, width: 29, height: 67, endx: 114, endy: 67 },
            { x: 0, y: 67, width: 31, height: 67, endx: 31, endy: 133 }, 
            { x: 31, y: 67, width: 25, height: 67, endx: 60, endy: 133 }
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
        this.currentFrame = (this.currentFrame + 1) % this.leftFrames.length;
      }
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
        }
    }

    draw() {
        if (zombieSpriteSheet2 && zombieSpriteSheet2.ready() && this.leftFrames.length > 0) {
            const frame = this.leftFrames[this.currentFrame];

            if (frame) {
                zombieSpriteSheet2.startx = frame.x;
                zombieSpriteSheet2.starty = frame.y;
                zombieSpriteSheet2.width = frame.width;
                zombieSpriteSheet2.height = frame.height;
                zombieSpriteSheet2.endx = frame.endx;
                zombieSpriteSheet2.endy = frame.endy;
                zombieSpriteSheet2.draw(this.x, this.y);
            }
        }
    }

    isOutOfScreen() {
        return this.x + this.width < 0;
    }
}