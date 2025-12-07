import LevelManager from './source/core/levelmanager.js';
import StartScreen from './source/scenes/menu.js';
import Cell from './source/core/cell.js';

Screen.setVSync(true);

const pad = Pads.get(0);

const cell = new Cell(90, 69);
const startScreen = new StartScreen();

const levelManager = new LevelManager();
let coins, zombie1, zombie2;

const load = {
    bg: new Image("graphics/bg/background.png"),
    defenderST1: new Image("graphics/bg/selectDefender1.png"),
    defenderST2: new Image("graphics/bg/selectDefender2.png"),
    font: new Font("fonts/orbitron_medium.ttf"),
    seletor: new Image("graphics/seletor/seletor.png"),
    startButton: new Image("graphics/menu/start.png"),
    nextlevelImg: new Image("graphics/menu/next_level.png"),
};

load.font.color = Color.new(252, 227, 3);

let estado = "inicio";
let resources = 330;
let levelComplete = false;
let score = 0;

function initLevel(reset = false) {
    const levelData = levelManager.loadLevel(reset);
    coins = levelData.coins;
    zombie1 = levelData.zombie1;
    zombie2 = levelData.zombie2;
}

initLevel();

Sound.setVolume(100);
const bgm = Sound.Stream("sounds/bgm_theme.wav");

Screen.display(() => {
    bgm.play();
    pad.update();
    switch (estado) {
        case "inicio":
            startScreen.draw(load.bg, load.startButton);
            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);
            startScreen.checkStart(pad);

            if (!startScreen.isActive) {
                estado = "jogando";
            }
            break;

        case "jogando":
            load.bg.draw(0, 0);
            load.defenderST1.draw(573, 7);
            load.defenderST2.draw(500, 7);

            levelManager.update();
            
            zombie1 = levelManager.zombie1;
            zombie2 = levelManager.zombie2;

            cell.resources = resources;
            cell.update(zombie1.concat(zombie2));
            resources = cell.resources;
            cell.draw();
            load.seletor.draw(cell.x - 10, cell.y + 4);

            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);

            for (let i = coins.length - 1; i >= 0; i--) {
                const coin = coins[i];
                coin.update();
                coin.draw();
                if (coin.checkCollision(cell.x, cell.y)) {
                    resources += 30;
                    coins.splice(i, 1);
                }
            }

            for (let i = zombie1.length - 1; i >= 0; i--) {
                const z1 = zombie1[i];
                z1.update(cell.npcs);
                z1.draw();

                if (z1.health <= 0) {
                    zombie1.splice(i, 1);
                    score += 10;
                    resources += 10;
                } else if (z1.isOutOfScreen()) {
                    estado = "gameover";
                }
            }

            for (let i = zombie2.length - 1; i >= 0; i--) {
                const z2 = zombie2[i];
                z2.update(cell.npcs);
                z2.draw();

                if (z2.health <= 0) {
                    zombie2.splice(i, 1);
                    score += 20;
                    resources += 20;
                } else if (z2.isOutOfScreen()) {
                    estado = "gameover";
                }
            }

            if (levelManager.isLevelComplete() && !levelComplete) {
                levelComplete = true;
                resources += cell.clearNPCs();
                estado = "fimfase";
            }
            break;

        case "fimfase":
            load.bg.draw(0, 0);

            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);
            // load.font.print(200, 130, `Level ${levelManager.currentLevel} Complete!`);

            load.nextlevelImg.draw(189, 163);

            if (pad.justPressed(Pads.START)) {
                levelComplete = false;
                levelManager.nextLevel();
                initLevel();
                estado = "jogando";
            }
            break;

        case "gameover":
            load.bg.draw(0, 0);

            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);

            load.font.print(220, 220, "GAME OVER");
            load.font.print(145, 250, "Press START to try again");

            if (pad.justPressed(Pads.START)) {
                score = 0;
                resources = 330;
                levelComplete = false;
                cell.clearNPCs();
                initLevel(true);
                estado = "inicio";
                startScreen.reset();
            }
            break;
    }
});