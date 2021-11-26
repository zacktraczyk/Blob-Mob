function random(a) {
    var rand = Math.random() * 10;
    if (rand - 5 > 0 && a < 60) {
        return a + 1;
    } else if (rand - 5 <= 0 && a > 40) {
        return a - 1;
    } else {
        return a;
    }
}

function srandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5) {
        return a + 1;

    } else {
        return a - 1;
    }
}


function mxrandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5 && a < w - wx - 10) {
        return a + 1;

    } else if (rand <= 5 && a > 10) {
        return a - 1;
    } else {
        return a;
    }
}


function myrandom(a) {
    var rand = Math.random() * 10;
    if (rand > 5 && a > 10) {
        return a - 1;

    } else if (rand <= 5 && a < h - wy - 10) {
        return a + 1;
    } else {
        return a;
    }
}

function randomLocation(a) {
    if (Math.random() * 10 >= 5) {
        if (Math.random() * 10 >= 5) {
            a.esx = Math.random() * w;
            a.esy = -50 * Math.random() - 20;
        } else {
            a.esx = Math.random() * w;
            a.esy = h + 50 * Math.random() + 20;
        }
    } else {
        if (Math.random() * 10 >= 5) {
            a.esx = -50 * Math.random() - 20;
            a.esy = Math.random() * h;
        } else {
            a.esx = w + 50 * Math.random() + 20;
            a.esy = Math.random() * h;
        }
    }

}
