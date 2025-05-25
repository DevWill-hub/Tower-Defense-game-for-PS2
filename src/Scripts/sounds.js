export default class SoundManager {
    constructor() {
        this.currentTrack = null;
        this.musicLoop();
    }

    playBackgroundMusic(path, slot = 0) {
        this.currentTrack = Sound.load(path);
        Sound.play(this.currentTrack, slot);
    }

    setBackgroundVolume(volume) {
        if (this.currentTrack) {
            Sound.setVolume(this.currentTrack, volume);
        }
    }

    musicLoop() {
      Sound.repeat(true);
    }
}