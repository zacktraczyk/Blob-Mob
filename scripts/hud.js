function drawStage() {
    ctx.fillStyle = '#fffbf9';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(background, 0, 0, w, h);
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, w, h);
}

function drawHealth() {
    ctx.fillStyle = 'black';
    ctx.fillRect(w / 2, 10, 240, 20);
    ctx.fillStyle = randomColor;
    ctx.font = "10px monospace";
    ctx.fillText(health + "/100", w / 2 + 100, 23);
    ctx.fillRect(w / 2 + 1, 11, (health / 100) * 238, 18);
}

function drawPower() {
    ctx.fillStyle = 'black';
    ctx.fillRect(w - w * (1 / 4), 40, 115, 20);
    ctx.fillStyle = '#33cc33';
    ctx.font = "10px monospace";
    ctx.fillText(power + "/50", w - w * (1 / 4) + 52, 53);
    ctx.fillRect(w - w * (1 / 4) + 1, 41, (power / 50) * 113, 18);
}

function drawCool() {
    ctx.fillStyle = 'black';
    ctx.fillRect(w / 2, 40, 115, 20);
    ctx.fillStyle = 'blue';
    ctx.fillRect(w / 2 + 1, 41, 113 - (cool / 50) * 113, 18);
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = "20px monospace";
    ctx.fillText("Score: " + score, 18, 28, w / 2);
    ctx.fillText("High-Score: " + highscore, 18, 58, w / 2);
}
