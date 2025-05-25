export class Animation {
  constructor(spritesheet, frames, frameSpeed = 4) {
    this.spritesheet = spritesheet;
    this.frames = frames;
    this.frameSpeed = frameSpeed;

    this.currentFrame = 0;
    this.counter = 0;
  }

  reset() {
    this.currentFrame = 0;
    this.counter = 0;
  }

  update() {
    this.counter++;
    if (this.counter >= this.frameSpeed) {
      this.counter = 0;
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
    }
  }

  draw(x, y) {
    if (!this.spritesheet.ready()) return;

    const frame = this.frames[this.currentFrame];
    this.spritesheet.startx = frame.x;
    this.spritesheet.starty = frame.y;
    this.spritesheet.endx = frame.endx;
    this.spritesheet.endy = frame.endy;
    this.spritesheet.width = frame.width;
    this.spritesheet.height = frame.height;
    this.spritesheet.draw(x, y);
  }
}