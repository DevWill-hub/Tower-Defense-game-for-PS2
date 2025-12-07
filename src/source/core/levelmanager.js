import Coin from '../entities/coin.js';
import Zombie1 from '../entities/zombie1.js';
import Zombie2 from '../entities/zombie2.js';

export default class LevelManager {
    constructor() {
        this.currentLevel = 1;
        this.maxLevel = 20;
        
        this.coins = [];
        this.zombie1 = [];
        this.zombie2 = [];
        
        this.waves = [];
        this.currentWave = 0;
        this.waveActive = false;
        this.waveTimer = 0;
        this.spawnTimer = 0;
        this.spawnQueue = [];
        
        this.timeBetweenWaves = 180;
        this.timeBetweenSpawns = 30;
        this.initialDelay = 120;
        
        this.levelStarted = false;
        this.allWavesComplete = false;
        
        this.spawnLanes = [74, 149, 224, 299, 374];
    }
    
    configureLevel() {
        this.waves = [];
        this.currentWave = 0;
        this.waveActive = false;
        this.waveTimer = this.initialDelay;
        this.spawnTimer = 0;
        this.spawnQueue = [];
        this.levelStarted = false;
        this.allWavesComplete = false;
        
        this.coins = [];
        this.zombie1 = [];
        this.zombie2 = [];
        
        switch (this.currentLevel) {
            case 1:
                this.setupLevel1();
                break;
            case 2:
                this.setupLevel2();
                break;
            case 3:
                this.setupLevel3();
                break;
            case 4:
                this.setupLevel4();
                break;
            case 5:
                this.setupLevel5();
                break;
            case 6:
                this.setupLevel6();
                break;
            case 7:
                this.setupLevel7();
                break;
            case 8:
                this.setupLevel8();
                break;
            case 9:
                this.setupLevel9();
                break;
            case 10:
                this.setupLevel10();
                break;
            default:
                this.setupProceduralLevel();
                break;
        }
    }

    setupLevel1() {
        this.addCoins([
            { x: 340, y: 373 },
            { x: 490, y: 74 },
            { x: 415, y: 149 },
            { x: 415, y: 299 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 240,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 74 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'normal', lane: 224 },
                { type: 'strong', lane: 149 }
            ]
        });
    }

    setupLevel2() {
        this.addCoins([
            { x: 490, y: 223 },
            { x: 415, y: 223 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 200,
            zombies: [
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 },
                { type: 'strong', lane: 74 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 374 }
            ]
        });
    }

    setupLevel3() {
        this.addCoins([
            { x: 340, y: 373 },
            { x: 415, y: 223 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 200,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 224 }
            ]
        });

        this.addWave({
            delay: 150,
            zombies: [
                { type: 'strong', lane: 374 }
            ]
        });
    }

    setupLevel4() {
        this.addCoins([
            { x: 340, y: 298 },
            { x: 265, y: 373 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 }
            ]
        });

        this.addWave({
            delay: 150,
            zombies: [
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'strong', lane: 149 },
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 200,
            zombies: [
                { type: 'strong', lane: 224 },
                { type: 'strong', lane: 299 }
            ]
        });
    }

    setupLevel5() {
        this.addCoins([
            { x: 265, y: 223 },
            { x: 340, y: 148 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 200,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'normal', lane: 224 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 150,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 }
            ]
        });
    }

    setupLevel6() {
        this.addCoins([
            { x: 340, y: 73 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 }
            ]
        });

        this.addWave({
            delay: 160,
            zombies: [
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 374 },
                { type: 'strong', lane: 74 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'strong', lane: 224 },
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 120,
            zombies: [
                { type: 'strong', lane: 374 },
                { type: 'strong', lane: 74 }
            ]
        });
    }

    setupLevel7() {
        this.addCoins([
            { x: 115, y: 73 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 224 }
            ]
        });

        this.addWave({
            delay: 150,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 150,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 120,
            zombies: [
                { type: 'strong', lane: 224 }
            ]
        });
    }

    setupLevel8() {
        this.addCoins([
            { x: 115, y: 148 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 140,
            zombies: [
                { type: 'strong', lane: 224 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 160,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 },
                { type: 'strong', lane: 299 }
            ]
        });

        this.addWave({
            delay: 140,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 120,
            zombies: [
                { type: 'normal', lane: 224 },
                { type: 'strong', lane: 149 }
            ]
        });
    }

    setupLevel9() {
        this.addCoins([
            { x: 115, y: 298 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 120,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 140,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 224 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 160,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 299 },
                { type: 'strong', lane: 224 }
            ]
        });

        this.addWave({
            delay: 100,
            zombies: [
                { type: 'strong', lane: 149 },
                { type: 'strong', lane: 299 }
            ]
        });
    }

    setupLevel10() {
        this.addCoins([
            { x: 190, y: 298 },
            { x: 190, y: 223 }
        ]);

        this.addWave({
            delay: 0,
            zombies: [
                { type: 'normal', lane: 74 },
                { type: 'normal', lane: 149 },
                { type: 'normal', lane: 224 },
                { type: 'normal', lane: 299 },
                { type: 'normal', lane: 374 }
            ]
        });

        this.addWave({
            delay: 180,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 140,
            zombies: [
                { type: 'normal', lane: 149 },
                { type: 'strong', lane: 224 },
                { type: 'normal', lane: 299 }
            ]
        });

        this.addWave({
            delay: 120,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 149 },
                { type: 'strong', lane: 299 },
                { type: 'strong', lane: 374 }
            ]
        });

        this.addWave({
            delay: 100,
            zombies: [
                { type: 'strong', lane: 74 },
                { type: 'strong', lane: 224 },
                { type: 'strong', lane: 374 }
            ]
        });
    }

    setupProceduralLevel() {
        const difficulty = this.currentLevel - 10;
        const numWaves = 4 + Math.floor(difficulty / 2);
        
        const coinCount = Math.max(1, 3 - Math.floor(difficulty / 3));
        const coinPositions = [];
        for (let i = 0; i < coinCount; i++) {
            coinPositions.push({
                x: 115 + Math.floor(Math.random() * 4) * 75,
                y: this.spawnLanes[Math.floor(Math.random() * this.spawnLanes.length)]
            });
        }
        this.addCoins(coinPositions);

        for (let w = 0; w < numWaves; w++) {
            const zombiesInWave = [];
            const zombieCount = 2 + Math.floor(Math.random() * 3) + Math.floor(difficulty / 2);
            const strongChance = 0.2 + (difficulty * 0.05);

            const usedLanes = [];
            
            for (let z = 0; z < zombieCount; z++) {
                let lane;
                const availableLanes = this.spawnLanes.filter(l => !usedLanes.includes(l));
                
                if (availableLanes.length > 0) {
                    lane = availableLanes[Math.floor(Math.random() * availableLanes.length)];
                } else {
                    lane = this.spawnLanes[Math.floor(Math.random() * this.spawnLanes.length)];
                }
                usedLanes.push(lane);

                zombiesInWave.push({
                    type: Math.random() < strongChance ? 'strong' : 'normal',
                    lane: lane
                });
            }

            this.addWave({
                delay: w === 0 ? 0 : 120 - (difficulty * 5),
                zombies: zombiesInWave
            });
        }
    }

    addCoins(positions) {
        for (const pos of positions) {
            this.coins.push(new Coin(pos.x, pos.y));
        }
    }

    addWave(waveConfig) {
        this.waves.push({
            delay: waveConfig.delay || 180,
            zombies: waveConfig.zombies || [],
            spawned: false
        });
    }

    update() {
        if (!this.levelStarted) {
            this.waveTimer--;
            if (this.waveTimer <= 0) {
                this.levelStarted = true;
                this.startNextWave();
            }
            return;
        }

        if (this.spawnQueue.length > 0) {
            this.spawnTimer--;
            if (this.spawnTimer <= 0) {
                this.spawnNextZombie();
                this.spawnTimer = this.timeBetweenSpawns;
            }
        }

        if (this.spawnQueue.length === 0 && this.waveActive) {
            this.waveActive = false;
            
            if (this.currentWave < this.waves.length) {
                this.waveTimer = this.waves[this.currentWave].delay;
            } else {
                this.allWavesComplete = true;
            }
        }

        if (!this.waveActive && !this.allWavesComplete && this.currentWave < this.waves.length) {
            this.waveTimer--;
            if (this.waveTimer <= 0) {
                this.startNextWave();
            }
        }
    }

    startNextWave() {
        if (this.currentWave >= this.waves.length) {
            this.allWavesComplete = true;
            return;
        }

        const wave = this.waves[this.currentWave];
        
        const shuffled = [...wave.zombies].sort(() => Math.random() - 0.5);
        
        for (const z of shuffled) {
            this.spawnQueue.push({
                type: z.type,
                lane: z.lane,
                xOffset: Math.floor(Math.random() * 100)
            });
        }

        wave.spawned = true;
        this.waveActive = true;
        this.spawnTimer = 0;
        this.currentWave++;
    }

    spawnNextZombie() {
        if (this.spawnQueue.length === 0) return;

        const spawn = this.spawnQueue.shift();
        const baseX = 640 + spawn.xOffset;

        if (spawn.type === 'normal') {
            this.zombie1.push(new Zombie1(baseX, spawn.lane));
        } else if (spawn.type === 'strong') {
            this.zombie2.push(new Zombie2(baseX, spawn.lane));
        }
    }

    isLevelComplete() {
        return this.allWavesComplete && 
               this.zombie1.length === 0 && 
               this.zombie2.length === 0;
    }

    getWaveInfo() {
        return {
            current: this.currentWave,
            total: this.waves.length,
            active: this.waveActive,
            timeToNext: this.waveTimer
        };
    }


    loadLevel(reset = false) {
        if (reset) {
            this.currentLevel = 1;
        }
        this.configureLevel();
        
        return {
            coins: this.coins,
            zombie1: this.zombie1,
            zombie2: this.zombie2
        };
    }

    nextLevel() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
        } else {
            this.currentLevel = 1;
        }
    }
}