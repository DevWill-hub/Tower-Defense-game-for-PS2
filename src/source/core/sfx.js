export const sfx = (() => {
    const laser = Sound.Sfx("sounds/sfx_laser.adp");
    laser.volume = 25;

    function play() {
        laser.play();
    }

    return { play };
})();