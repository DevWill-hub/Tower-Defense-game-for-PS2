import Defender1 from './Scripts/defender1.js';
import Defender2 from './Scripts/defender2.js';

export default class Cell {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.npcs = [];
    this.resources = 0;
    this.showResourceMessage = false;
    this.pad = Pads.get(0);
  }

  movePlayer() {
    this.pad.update();
    const t = 75;
    const analog = 25;

    if ((this.pad.justPressed(Pads.LEFT) || this.pad.lx < -analog) && this.x >= t) this.x -= t;
    if ((this.pad.justPressed(Pads.RIGHT) || this.pad.lx > analog) && this.x <= 640 - t * 2) this.x += t;
    if ((this.pad.justPressed(Pads.UP) || this.pad.ly < -analog) && this.y >= 100) this.y -= t;
    if ((this.pad.justPressed(Pads.DOWN) || this.pad.ly > analog) && this.y <= 480 - t * 2) this.y += t;

    this.handleSpawns();
  }

  handleSpawns() {
    if (this.pad.justPressed(Pads.CROSS)) this.trySpawnNPC("normal");
    if (this.pad.justPressed(Pads.SQUARE)) this.trySpawnNPC("strong");
  }

  trySpawnNPC(type) {
    if (this.resources < 100) {
      this.showResourceMessage = true;
      return;
    }

    const positionOccupied = this.npcs.some(npc => npc.x === this.x && npc.y === this.y);
    if (positionOccupied) return;

    let npc;
    if (type === "normal") {
      npc = new Defender1(this.x, this.y);
    } else if (type === "strong") {
      npc = new Defender2(this.x, this.y);
    }

    this.npcs.push(npc);
    this.resources -= 100;
    this.showResourceMessage = false;
  }

  updateNPCs(zombies) {
    for (let i = this.npcs.length - 1; i >= 0; i--) {
      const npc = this.npcs[i];
      npc.update(zombies);
      if (npc.isDead()) this.npcs.splice(i, 1);
    }
  }

  draw() {
    for (const npc of this.npcs) {
      npc.draw();
    }
  }

  update(zombies) {
    this.movePlayer();
    this.updateNPCs(zombies);
  }

  clearNPCs() {
    const npcCount = this.npcs.length;
    this.npcs = [];
    return npcCount * 100;
  }
}