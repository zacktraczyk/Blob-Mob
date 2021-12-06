//Howler Sound
let titleTheme = new Howl({
    src: ['Sound/Good-portion-of-distortion.mp3'],
    volume: 0.7,
    loop: true
});

let mainTheme = new Howl({
    src: ['Sound/8-lit.mp3'],
    volume: 0.5,
    loop: true
    
});

let endTheme = new Howl({
    src: ['Sound/Game-Over.mp3'],
    volume: 1,
    loop: true
});

//Length of segment ~= 2100
var hlSound = true;

let effects = new Howl({
    src: ['Sound/Sound-effects.mp3'],
    sprite: {
        attack: [0, 400],
        healthLoss: [2031, 2350, true],
        btn: [4980, 500],
        death: [6450, 1000],
        push: [8500, 5000],
        heal: [14000, 10000]
    }
});


function muteSound() {
    if(monce) {
        if (muted) muted = false;
        else muted = true;
        
        monce = false;
    }
    
    if(muted) {
        mainTheme.mute(true);
        titleTheme.mute(true);
        effects.mute(true);
        endTheme.mute(true);
    } else {
        mainTheme.mute(false);
        titleTheme.mute(false);
        effects.mute(false);
        endTheme.mute(false);
    }
    
    mainTheme.volume(mSound);
    effects.volume(eSound);
}
