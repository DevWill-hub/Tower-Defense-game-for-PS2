export class AnimationPlayer {
  constructor(animations = {}) {
    this.animations = animations;
    this.current = null;
  }

  add(name, animation) {
    this.animations[name] = animation;
    if (!this.current) this.current = name;
  }

  play(name) {
    if (this.current !== name) {
      this.current = name;
      this.animations[name].reset();
    }
  }

  update() {
    if (this.current) this.animations[this.current].update();
  }

  draw(x, y) {
    if (this.current) this.animations[this.current].draw(x, y);
  }
}