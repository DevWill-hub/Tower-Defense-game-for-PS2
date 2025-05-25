import SoundManager from './src/Scripts/sounds.js';
import StartScreen from './src/Scripts/menu.js';
import Cell from './src/Cell.js';
import LevelManager from './src/LevelManager.js';
// import Debug from './src/Scripts/Modules/debug.js';


const soundManager = new SoundManager();
const cell = new Cell(90, 69);
const startScreen = new StartScreen();
// const debug = new Debug();

const levelManager = new LevelManager();
levelManager.configureLevel();
let { golds, zombie1, zombie2 } = levelManager.loadLevel();

soundManager.playBackgroundMusic("assets/Music/music.ogg");
soundManager.setBackgroundVolume(100);

const setupScreen = () => {
    const videoMode = Screen.getMode();
    videoMode.width = 640;
    videoMode.height = 448;
    videoMode.double_buffering = true;
    Screen.setMode(videoMode);
    Screen.setVSync(true);
    Screen.setFrameCounter(true);
};

const load = {
  bg: new Image("assets/bg/background.png"),
  defenderST1: new Image("assets/bg/selectDefender1.png"),
  defenderST2: new Image("assets/bg/selectDefender2.png"),
  font: new Font("assets/Fonts/Orbitron-Medium.ttf"),
  seletor: new Image("assets/Seletor/seletor.png"),
  levelCompleteMessage: new Image("assets/Menu/mesagem.png"),
};

load.font.color = Color.new(252, 227, 3);

let estado = "inicio";
let gameStarted = false;
let resources = 330;
let levelComplete = false;
let score = 0;

Screen.display(() => {
    switch (estado) {
        case "inicio":
            startScreen.draw();
            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);
            startScreen.checkStart();

            if (!startScreen.isActive) {
                startScreen.free();
                estado = "jogando";
            }
            break;

        case "jogando":
            load.bg.draw(0, 0);
            load.defenderST1.draw(573, 7);
            load.defenderST2.draw(500, 7);

//            debug.print();

            cell.resources = resources;
            cell.update(zombie1.concat(zombie2));
            resources = cell.resources;
            cell.draw();
            load.seletor.draw(cell.x - 10, cell.y + 4);

            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);

            for (let i = golds.length - 1; i >= 0; i--) {
                const gold = golds[i];
                gold.update();
                gold.draw();
                if (gold.checkCollision(cell.x, cell.y)) {
                    resources += 30;
                    golds.splice(i, 1);
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

            if (zombie1.length === 0 && zombie2.length === 0 && !levelComplete) {
                levelComplete = true;
                resources += cell.clearNPCs();
                estado = "fimfase";
            }
            break;

        case "fimfase":
            load.bg.draw(0, 0);
            
            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);
            
            
            load.levelCompleteMessage.draw(189, 163);
            const padFim = Pads.get(0);
            if (padFim.justPressed(Pads.START)) {
                levelComplete = false;
                levelManager.nextLevel();
                ({ golds, zombie1, zombie2 } = levelManager.loadLevel());
                estado = "jogando";
            }
            break;

        case "gameover":
            load.bg.draw(0, 0);
            
            load.font.print(10, 0, `Score: ${score}`);
            load.font.print(10, 30, `Resources: ${resources}`);
            
            load.font.print(220, 220, "GAME OVER");
            load.font.print(170, 250, "Press START to try again");
            const padOver = Pads.get(0);
            if (padOver.justPressed(Pads.START)) {
                score = 0;
                resources = 330;
                levelComplete = false;
                ({ golds, zombie1, zombie2 } = levelManager.loadLevel(true));
                cell.clearNPCs();
                estado = "inicio";
                startScreen.reset();
            }
            break;
    }
});

setupScreen();