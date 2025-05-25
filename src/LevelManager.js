import Gold from './Scripts/golds.js';
import Zombie1 from './Scripts/zombie1.js';
import Zombie2 from './Scripts/zombie2.js';

export default class LevelManager {
    constructor() {
        this.currentLevel = 1;
        this.maxLevel = 20;
        this.goldPositions = [];
        this.zomblePositions = [];
        this.zombieSPositions = [];
    }

    configureLevel() {
        switch (this.currentLevel) {
            case 1:
                this.goldPositions = [
                    { x: 340, y: 373 },
                    { x: 490, y: 74 },
                    { x: 415, y: 149 },
                    { x: 415, y: 299 }
                ];

                this.zomblePositions = [
                    { x: 640, y: 74 },
                    { x: 715, y: 374 },
                    { x: 790, y: 299 },
                    { x: 865, y: 224 },
                    { x: 940, y: 149 },
                    { x: 940, y: 74 },
                    { x: 1015, y: 149 },
                    { x: 1165, y: 299 }
                ];

                this.zombieSPositions = [
                    { x: 955, y: 74 },
                    { x: 955, y: 371 }
                ];
                break;

            case 2:
                this.goldPositions = [
                    { x: 490, y: 223 },
                    { x: 415, y: 223 }
                ];

                this.zomblePositions = [
                    { x: 604, y: 371 },
                    { x: 704, y: 296 },
                    { x: 804, y: 148 },
                    { x: 904, y: 73 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 296 }
                ];

                this.zombieSPositions = [
                    { x: 1204, y: 148 }
                ];
                break;

            case 3:
                this.goldPositions = [
                    { x: 340, y: 373 },
                    { x: 415, y: 223 }
                ];

                this.zomblePositions = [
                    { x: 604, y: 148 },
                    { x: 704, y: 73 },
                    { x: 804, y: 371 },
                    { x: 904, y: 296 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 296 },
                    { x: 1304, y: 73 }
                ];

                this.zombieSPositions = [
                    { x: 1204, y: 148 }
                ];
                break;
    
            case 4:
                this.goldPositions = [
                    { x: 340, y: 298 },
                    { x: 265, y: 373 },
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 73 },
                    { x: 704, y: 148 },
                    { x: 804, y: 296 },
                    { x: 904, y: 221 },
                    { x: 1004, y: 371 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 73 },
                    { x: 1304, y: 148 }           
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 148 }
                ];
                break;

            case 5:
                this.goldPositions = [
                    { x: 265, y: 223 },
                    { x: 340, y: 148 }
                ];
       
                this.zomblePositions = [
                    { x: 604, y: 296 },
                    { x: 704, y: 371 },
                    { x: 804, y: 148 },
                    { x: 904, y: 73 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 73 },
                    { x: 1304, y: 371 },
                    { x: 1404, y: 296 }
                ];
       
                this.zombieSPositions = [
                   { x: 1204, y: 148 }
                ];
                break;

            case 6:
                this.goldPositions = [
                    { x: 340, y: 73 }
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 371 },
                    { x: 704, y: 296 },
                    { x: 804, y: 73 },
                    { x: 904, y: 148 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 296 },
                    { x: 1304, y: 73 },
                    { x: 1404, y: 371 },
                    { x: 1504, y: 148 }            
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 73 }
                ];
                break;

            case 7:
                this.goldPositions = [
                    { x: 115, y: 73 }
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 148 },
                    { x: 704, y: 73 },
                    { x: 804, y: 371 },
                    { x: 904, y: 296 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 73 },
                    { x: 1304, y: 296 },
                    { x: 1404, y: 371 },
                    { x: 1504, y: 148 },
                    { x: 1604, y: 73 }
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 296 }
                ];
                break;

            case 8:
                this.goldPositions = [
                    { x: 115, y: 148 }
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 73 },
                    { x: 704, y: 148 },
                    { x: 804, y: 296 },
                    { x: 904, y: 221 },
                    { x: 1004, y: 371 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 73 },
                    { x: 1304, y: 148 },
                    { x: 1404, y: 296 },
                    { x: 1504, y: 371 },
                    { x: 1604, y: 148 },
                    { x: 1704, y: 221 }                
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 148 }
                ];
                break;

            case 9:
                this.goldPositions = [
                    { x: 115, y: 298 }
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 296 },
                    { x: 704, y: 371 },
                    { x: 804, y: 148 },
                    { x: 904, y: 73 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 73 },
                    { x: 1304, y: 371 },
                    { x: 1404, y: 296 },
                    { x: 1504, y: 148 },
                    { x: 1604, y: 73 },
                    { x: 1704, y: 296 },
                    { x: 1804, y: 371 }
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 371 }
                ];
                break;

            case 10:
                this.goldPositions = [
                    { x: 190, y: 298 },
                    { x: 190, y: 223 }
                ];
    
                this.zomblePositions = [
                    { x: 604, y: 371 },
                    { x: 704, y: 296 },
                    { x: 804, y: 73 },
                    { x: 904, y: 148 },
                    { x: 1004, y: 221 },
                    { x: 1104, y: 148 },
                    { x: 1204, y: 296 },
                    { x: 1304, y: 73 },
                    { x: 1404, y: 371 },
                    { x: 1504, y: 148 },
                    { x: 1604, y: 221 },
                    { x: 1704, y: 73 },
                    { x: 1804, y: 148 },
                    { x: 1904, y: 371 }
                ];
    
                this.zombieSPositions = [
                    { x: 1204, y: 148 }
                ];
                break;

            default:
                this.goldPositions = [];
                this.zomblePositions = [];
                this.zombieSPositions = [];
                break;
        }
    }

    loadLevel() {
      const shuffle = arr => arr.sort(() => Math.random() - 0.5);
      
      const goldCount = 3;
      const zombleCount = 7;
      const zombieSCount = 2;

    const golds = shuffle(this.goldPositions)
        .slice(0, goldCount)
        .map(pos => new Gold(pos.x, pos.y));

    const zombie1 = shuffle(this.zomblePositions)
        .slice(0, zombleCount)
        .map(pos => new Zombie1(pos.x, pos.y));

    const zombie2 = shuffle(this.zombieSPositions)
        .slice(0, zombieSCount)
        .map(pos => new Zombie2(pos.x, pos.y));

    return { golds, zombie1, zombie2 };
}

    nextLevel() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
        } else {
            this.currentLevel = 1;
        }
        this.configureLevel();
    }
}