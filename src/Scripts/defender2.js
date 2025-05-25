import { Animation } from "./Modules/animation.js";
import { AnimationPlayer } from "./Modules/animationPlayer.js";

let idleSpriteSheet2 = new Image("assets/Defenders/idle_spritesheet2.png");
let attackSpriteSheet2 = new Image("assets/Defenders/attack_spritesheet2.png");
let laserImage = new Image("assets/Laser/laser2.png");

export default class Defender2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 'idle';

    this.animationPlayer = new AnimationPlayer({
      idle: new Animation(idleSpriteSheet2, [
        { x: 0, y: 0, width: 86, height: 69, endx: 86, endy: 69 },
        { x: 86, y: 0, width: 86, height: 69, endx: 172, endy: 69 },
        { x: 0, y: 69, width: 86, height: 69, endx: 86, endy: 138 },
        { x: 86, y: 69, width: 86, height: 69, endx: 172, endy: 138 },
        { x: 0, y: 138, width: 86, height: 69, endx: 86, endy: 207 },
        { x: 86, y: 138, width: 86, height: 69, endx: 172, endy: 207 },
        { x: 172, y: 0, width: 86, height: 69, endx: 257, endy: 69 },
        { x: 172, y: 69, width: 86, height: 69, endx: 257, endy: 138 },
        { x: 172, y: 138, width: 86, height: 69, endx: 257, endy: 207 }
      ]),
      attack: new Animation(attackSpriteSheet2, [
        { x: 0, y: 0, width: 86, height: 69, endx: 86, endy: 69 },
        { x: 0, y: 138, width: 86, height: 69, endx: 86, endy: 207 },
        { x: 86, y: 138, width: 86, height: 69, endx: 172, endy: 207 },
        { x: 172, y: 138, width: 86, height: 69, endx: 258, endy: 207 },
        { x: 0, y: 207, width: 86, height: 69, endx: 86, endy: 276 },
        { x: 86, y: 207, width: 86, height: 69, endx: 172, endy: 276 },
        { x: 172, y: 207, width: 86, height: 69, endx: 258, endy: 276 },
        { x: 258, y: 0, width: 86, height: 69, endx: 343, endy: 69 },
        { x: 258, y: 69, width: 86, height: 69, endx: 343, endy: 138 },
        { x: 86, y: 0, width: 86, height: 69, endx: 172, endy: 69 },
        { x: 172, y: 0, width: 86, height: 69, endx: 258, endy: 69 },
        { x: 0, y: 69, width: 86, height: 69, endx: 86, endy: 138 },
        { x: 86, y: 69, width: 86, height: 69, endx: 172, endy: 138 },
        { x: 172, y: 69, width: 86, height: 69, endx: 258, endy: 138 }
      ])
    });

    this.animationPlayer.play("idle");

    this.lasers = [];
    this.attackCooldown = 44;
    this.cooldownCounter = 0;

    this.health = 100;
    this.width = 86;
    this.height = 69;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  isDead() {
    return this.health <= 0;
  }

  updateAttackArea() {
    this.attackArea = {
      x: this.x,
      y: this.y - 50,
      width: 640,
      height: 75
    };
  }

  update(zombies) {
    this.updateAttackArea();

    const zombieInRange = zombies.some(z => this.isZombieInAttackArea(z));
    if (zombieInRange) {
      this.state = "attack";
      this.animationPlayer.play("attack");
      this.cooldownCounter++;
      if (this.cooldownCounter >= this.attackCooldown) {
        this.attack();
        this.cooldownCounter = 0;
      }
    } else {
      this.state = "idle";
      this.animationPlayer.play("idle");
    }

    this.animationPlayer.update();

    for (let i = this.lasers.length - 1; i >= 0; i--) {
      const laser = this.lasers[i];
      laser.x += 5;
      laser.lifetime--;

      if (laser.x > 640 || laser.lifetime <= 0) {
        this.lasers.splice(i, 1);
        continue;
      }

      for (const zombie of zombies) {
        if (this.checkCollision(laser, zombie)) {
          zombie.takeDamage(30);
          this.lasers.splice(i, 1);
          break;
        }
      }
    }
  }

  isZombieInAttackArea(z) {
    return (
      z.x < this.attackArea.x + this.attackArea.width &&
      z.x + z.width > this.attackArea.x &&
      z.y < this.attackArea.y + this.attackArea.height &&
      z.y + z.height > this.attackArea.y
    );
  }

  attack() {
    const laser = {
      x: this.x + 40,
      y: this.y + 16,
      lifetime: 170
    };
    this.lasers.push(laser);
  }

  checkCollision(laser, zombie) {
    return (
      laser.x < zombie.x + zombie.width &&
      laser.x + laserImage.width > zombie.x &&
      laser.y < zombie.y + zombie.height &&
      laser.y + laserImage.height > zombie.y
    );
  }

  draw() {
    this.animationPlayer.draw(this.x, this.y);

    for (const laser of this.lasers) {
      if (laserImage && laserImage.ready()) {
        laserImage.draw(laser.x, laser.y);
      }
    }
  }
}