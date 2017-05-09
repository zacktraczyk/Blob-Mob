var c = document.getElementById('canvas');
            var ctx = c.getContext('2d');
            var w = c.width;
            var h = c.height;
            var x;
            var y;
            var HowTo = false;
            var sx = 100;
            var sy = 100;
            var wx = 50;
            var wy = 50;
            var esx = 0;
            var esy = 0;
            var ewx = 50;
            var ewy = 50;
            var randNum = 0;
            var colors = ['#ffd6cc', '#ffc2b3', '#ffad99', '#ff9980', '#ff9980'];
            var ecolors = ['#81ea25', '#6bba27', '#96e84e', '#abf966', '#b9f981'];
            var ebcolors = ['#f45642', '#e06757', '#f9543e', '#dd351f', '#ed452f'];
            var rDown = false;
            var lDown = false;
            var uDown = false;
            var dDown = false;
            var attackb = false;
            var attackz = false;
            var attackx = false;
            var power = 50;
            var cool = 0;
            var health = 100;
            var dead = false;
            var rememberplay = false;
            var score = 0;
            var highscore = localStorage.getItem("highscore");
            var recent = 'right';
            var damaging;
            var speed = 1;
            var regeneration = false;
            var Otime = 0;
            var randomColor = '#ffd6cc';
            var background = new Image();
            background.src = 'http://www.photos-public-domain.com/wp-content/uploads/2011/02/crumpled-notebook-paper-texture.jpg';
            
        //--------------FUNCTIONS--------------//

            function getPosition(event) {
                x = event.x;
                y = event.y;

                x -= c.offsetLeft;
                y -= c.offsetTop;

            }

            function random(a) {
                var rand = Math.random() * 10
                if (rand - 5 > 0 && a < 60) {
                    return a + 1;

                } else if (rand - 5 <= 0 && a > 40) {
                    return a - 1;
                } else {
                    return a;
                }
            }

            function srandom(a) {
                var rand = Math.random() * 10
                if (rand > 5) {
                    return a + 1;

                } else {
                    return a - 1;
                }
            }


            function mxrandom(a) {
                var rand = Math.random() * 10
                if (rand > 5 && a < w - wx - 10) {
                    return a + 1;

                } else if (rand <= 5 && a > 10) {
                    return a - 1;
                } else {
                    return a;
                }
            }


            function myrandom(a) {
                var rand = Math.random() * 10
                if (rand > 5 && a > 10) {
                    return a + 1;

                } else if (rand <= 5 && a < h - wy - 10) {
                    return a - 1;
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

            function collide() {
                if (sx < 0 || sy < 0 || sx + wx > w || sy + wy > h) {
                    return true;
                }
            }

            function touch(enemy) {
                if (((sx <= enemy.esx && enemy.esx <= sx + wx) && (sy <= enemy.esy && enemy.esy <= sy + wy)) || ((sx <= enemy.esx + enemy.ewx && enemy.esx + enemy.ewx <= sx + wx) && (sy <= enemy.esy + enemy.ewy && enemy.esy + enemy.ewy <= sy + wy))) {
                    return true;
                }
            }


            function inarea(enemy) {
                if (((sx - (wx / 2 + r) <= enemy.esx && enemy.esx <= sx + wx + (wx / 2 + r)) && (sy - (wy / 2 + r) <= enemy.esy && enemy.esy <= sy + wy + (wy / 2 + r))) || ((sx <= enemy.esx + enemy.ewx && enemy.esx + enemy.ewx <= sx + wx + (wx / 2 + r)) && (sy <= enemy.esy + enemy.ewy && enemy.esy + enemy.ewy <= sy + wy - (wy / 2 + r)))) {
                    return true;
                }
            }


            function setHighScore() {
                if (highscore !== null) {
                    if (score > highscore) {
                        localStorage.setItem("highscore", score);
                    }
                } else {
                    highscore = 0;
                    localStorage.setItem("highscore", score);
                }
            }
            
            function reminderplay() {
                 if (reminderplay == false && Otime >= 100) {
                    ctx.fillStyle = randomColor;
                    ctx.fillStyle = rgb(0, 0, 0);
                    ctx.font = "10px monospace";
                    ctx.fillText(PRESS SPACE TO ATTACK BOI, 10 , h-20);
                 }
            }
            
            function reset(){
                enemy1.state = 'none';
                enemy2.state = 'none';
                enemy3.state = 'none';
                enemy4.state = 'none';
                enemy5.state = 'none';
                enemy6.state = 'none';
                enemy7.state = 'none';
                enemy8.state = 'none';
                enemy9.state = 'none';
                enemy10.state = 'none';
                enemy11.state = 'none';
                enemy12.state = 'none';
                enemy13.state = 'none';
                enemy14.state = 'none';
                enemy15.state = 'none';
                rDown = false;
                lDown = false;
                uDown = false;
                dDown = false;
                attackb = false;
                attackz = false;
                attackx = false;
                speed = 1;
                regeneration = false;
                Otime = 0;
                power = 50;
                dead = false;
                health = 100;
                damaging = false;
                cool = 0;
            }
        //-----------------------------------//
        //--------------ATTACKS--------------//
            function attack() {
                time = 0;
                rememberplay = true;
                var sessionA = setInterval(function() {
                    randomColor = '#adedff';
                    time++;
                    cool++;
                    ctx.clearRect(0, 0, w, h);

                    drawStage();

                    drawChar();

                    stateDef(enemy1);

                    stateDef(enemy2);

                    stateDef(enemy3);

                    stateDef(enemy4);

                    stateDef(enemy5);

                    stateDef(enemy6);

                    stateDef(enemy7);

                    stateDef(enemy8);
                    
                    stateDef(enemy9);
                    
                    stateDef(enemy10);
                    
                    stateDef(enemy11);
                    
                    stateDef(enemy12);
                    
                    stateDef(enemy13);
                    
                    stateDef(enemy14);
                    
                    stateDef(enemy15);

                    drawHealth();

                    drawPower();

                    drawCool();

                    drawScore();

                    if (time < 5 && recent == 'right') sx += 10;
                    else if (time < 5 && recent == 'left') sx -= 10;
                    else if (time > 5 && recent == 'left') sx += 10;
                    else if (time > 5 && recent == 'right') sx -= 10;

                    if (time < 5 && recent == 'down') sy += 10;
                    else if (time < 5 && recent == 'up') sy -= 10;
                    else if (time > 5 && recent == 'up') sy += 10;
                    else if (time > 5 && recent == 'down') sy -= 10;

                    if (time == 5 && touch(enemy1) && enemy1.state != 'dead') enemy1.state = 'dying';
                    if (time == 5 && touch(enemy2) && enemy2.state != 'dead') enemy2.state = 'dying';
                    if (time == 5 && touch(enemy3) && enemy3.state != 'dead') enemy3.state = 'dying';
                    if (time == 5 && touch(enemy4) && enemy4.state != 'dead') enemy4.state = 'dying';
                    if (time == 5 && touch(enemy5) && enemy5.state != 'dead') enemy5.state = 'dying';
                    if (time == 5 && touch(enemy6) && enemy6.state != 'dead') enemy6.state = 'dying';
                    if (time == 5 && touch(enemy7) && enemy7.state != 'dead') enemy7.state = 'dying';
                    if (time == 5 && touch(enemy8) && enemy8.state != 'dead') enemy8.state = 'dying';
                    if (time == 5 && touch(enemy9) && enemy8.state != 'dead') enemy9.state = 'dying';
                    if (time == 5 && touch(enemy10) && enemy8.state != 'dead') enemy10.state = 'dying';
                    if (time == 5 && touch(enemy11) && enemy8.state != 'dead') enemy11.state = 'dying';
                    if (time == 5 && touch(enemy12) && enemy8.state != 'dead') enemy12.state = 'dying';
                    if (time == 5 && touch(enemy13) && enemy8.state != 'dead') enemy13.state = 'dying';
                    if (time == 5 && touch(enemy14) && enemy8.state != 'dead') enemy14.state = 'dying';
                    if (time == 5 && touch(enemy15) && enemy8.state != 'dead') enemy15.state = 'dying';

                    if (time >= 10) {
                        clearInterval(sessionA);
                        attackb = false;
                        main();
                    } else if (collide()) {
                        clearInterval(sessionA);
                        shrink();
                    }
                }, 50);
            }


            function attackZ() {
                time = 0;
                r = 3;
                var sessionAZ = setInterval(function() {
                    randomColor = '#adedff';
                    time++;
                    ctx.clearRect(0, 0, w, h);

                    if (7 >= time) {
                        r--;
                        cool += 2;
                    } else if (time >= 8 && time < 20 && time % 2 == 0) {
                        r -= 3;
                        cool += 2;
                    } else if (time >= 8 && time < 20 && Math.abs(time % 2) == 1) {
                        r += 3;
                        cool += 3;
                    } else if (20 <= time && time < 30) {
                        enemy1.state = 'push';
                        enemy2.state = 'push';
                        enemy3.state = 'push';
                        enemy4.state = 'push';
                        enemy5.state = 'push';
                        enemy6.state = 'push';
                        enemy7.state = 'push';
                        enemy8.state = 'push';
                        enemy9.state = 'push';
                        enemy10.state = 'push';
                        enemy11.state = 'push';
                        enemy12.state = 'push';
                        enemy13.state = 'push';
                        enemy14.state = 'push';
                        enemy15.state = 'push';
                        power--;
                        r += 10;
                        cool += .5;
                    }

                    drawStage();

                    drawChar();

                    stateDef(enemy1);
                    stateDef(enemy2);
                    stateDef(enemy3);
                    stateDef(enemy4);
                    stateDef(enemy5);
                    stateDef(enemy6);
                    stateDef(enemy7);
                    stateDef(enemy8);
                    stateDef(enemy9);
                    stateDef(enemy10);
                    stateDef(enemy11);
                    stateDef(enemy12);
                    stateDef(enemy13);
                    stateDef(enemy14);
                    stateDef(enemy15);

                    ctx.beginPath();
                    ctx.strokeStyle = randomColor;
                    ctx.arc(sx + wx / 2, sy + wy / 2, wx + r, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.strokeStyle = 'black';

                    drawHealth();

                    drawPower();

                    drawCool();

                    drawScore();
                    if (time >= 50) {
                        clearInterval(sessionAZ);
                        attackz = false;
                        main();

                        enemy1.state = 'alive';
                        
                        enemy2.state = 'alive';

                        enemy3.state = 'alive';

                        enemy4.state = 'alive';

                        enemy5.state = 'alive';

                        enemy6.state = 'alive';

                        enemy7.state = 'alive';

                        enemy8.state = 'alive';
                        
                        enemy9.state = 'alive';
                        
                        enemy10.state = 'alive';
                        
                        enemy11.state = 'alive';
                        
                        enemy12.state = 'alive';
                        
                        enemy13.state = 'alive';
                        
                        enemy14.state = 'alive';
                        
                        enemy15.state = 'alive';
                        
                        cool += 1;
                    } else if (collide()) {
                        clearInterval(sessionAZ);
                        attackz = false;
                        shrink();

                        enemy2.state = 'alive';

                        enemy3.state = 'alive';

                        enemy4.state = 'alive';

                        enemy5.state = 'alive';

                        enemy6.state = 'alive';

                        enemy7.state = 'alive';

                        enemy8.state = 'alive';
                        
                        enemy9.state = 'alive';
                        
                        enemy10.state = 'alive';
                        
                        enemy11.state = 'alive';
                        
                        enemy12.state = 'alive';
                        
                        enemy13.state = 'alive';
                        
                        enemy14.state = 'alive';
                        
                        enemy15.state = 'alive';
                    }
                }, 50);

            }

            function regenerate(){
                if(cool == 50){
                    if(Otime % 3 == 0) power-=1;
                    if(health < 100) health++;
                    if(Otime % 2 == 0){
                        wx+=5;
                        wy+=5
                        sx-=2
                        sy-=2;
                    } else {
                        wx-=4;
                        wy-=4;
                        sx+=2;
                        sy+=2;
                        
                    }
                } else {
                    //if(Otime % 2 == 0) cool+=1;
                    cool++;
                }
            }
            
        //--------------------------------------//
        //--------------CHARACTERS--------------//
            function moveChar() {
                if (dDown && regeneration == false) {
                    sy += 4;
                    sx = random(sx);
                    recent = 'down';
                }
                if (rDown && regeneration == false) {
                    sx += 4;
                    sy = random(sy)
                    recent = 'right';
                }
                if (uDown && regeneration == false) {
                    sy -= 4;
                    sx = random(sx);
                    recent = 'up';
                }
                if (lDown && regeneration == false) {
                    sx -= 4;
                    sy = random(sy);
                    recent = 'left';
                }
                if (attackb && regeneration == false) {
                    clearInterval(sessionM);
                    attack();
                } else if (attackz && regeneration == false) {
                    clearInterval(sessionM);
                    attackZ();
                } else if (attackx) {
                    //clearInterval(sessionM);
                    //attackX();
                    regeneration = true;
                } else if (attackx == false){
                    regeneration = false;
                }

                sx = srandom(sx);
                sy = srandom(sy);
                wx = random(wx);
                wy = random(wy);

            }


            function listen() {
                document.addEventListener("keydown", keyDownHandler, false);
                document.addEventListener("keyup", keyUpHandler, false);

                function keyDownHandler(e) {
                	e.preventDefault();
                    if (e.keyCode == 40) dDown = true;
                    if (e.keyCode == 39) rDown = true;
                    if (e.keyCode == 38) uDown = true;
                    if (e.keyCode == 37) lDown = true;
                    if (e.keyCode == 32 && cool == 0) attackb = true;
                    else if (e.keyCode == 90 && cool == 0 && power >= 10) attackz = true;
                    else if (e.keyCode == 88 && cool == 0 && power > 0) attackx = true;
                }

                function keyUpHandler(e) {
                    if (e.keyCode == 40) dDown = false;
                    if (e.keyCode == 39) rDown = false;
                    if (e.keyCode == 38) uDown = false;
                    if (e.keyCode == 37) lDown = false;
                    if (e.keyCode == 88) attackx = false;
                }

            }


            function drawChar() {
                randNum = Math.round(Math.random() * 2);
                //randomColor = colors[randNum];


                ctx.fillStyle = randomColor;
                ctx.fillRect(sx, sy, wx, wy);

                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.fillStyle = 'black';
                ctx.arc(sx + wx / 6, sy + wy / 6, (wx / 4 + wy / 4) / 4, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(sx + wx - wx / 8, sy + wy / 6, (wx / 4 + wy / 4) / 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(sx + wx / 8, sy + wy - wy / 3);
                ctx.bezierCurveTo(sx + wy / 8, sy + wy, sx + wx - wy / 8, sy + wy, sx + wx - wy / 8, sy + wy - wy / 3);
                ctx.stroke();
                ctx.closePath();
            }


            function enemy(state, type) {

                this.state = state,

                this.type = type,
                    
                this.bossIsAlive = false,

                this.spawn = function() {
                    randomLocation(this);
                    this.state = 'alive';
                },

                this.draw = function() {
                    ctx.lineWidth = 1;
                    randNum = Math.round(Math.random() * 2);
                    erandomColor = ecolors[randNum];
                    ctx.fillStyle = erandomColor;
                    this.ewx = wx / 2 - 10;
                    this.ewy = wy - 10;
                    ctx.beginPath();

                    ctx.moveTo(this.esx - this.esx / 20, this.esy);
                    ctx.bezierCurveTo(this.esx - this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy);

                    ctx.bezierCurveTo(this.esx + this.ewx + this.esx / 10, this.esy, this.esx + this.ewx + this.esx / 10, this.esy + this.ewy, this.esx + this.ewx, this.esy + this.ewy);

                    ctx.bezierCurveTo(this.esx + this.ewx / 10, this.esy + this.esy / 4, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy + this.ewy / 2);

                    ctx.bezierCurveTo(this.esx - this.esx / 20, this.esy + this.ewy / 2, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                    ctx.lineWidth = 1;

                    ctx.beginPath();
                    ctx.fillStyle = 'black';
                    ctx.arc(this.esx + this.ewx / 6, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 4, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();

                    ctx.beginPath();
                    ctx.arc(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 6, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();

                    ctx.beginPath();
                    ctx.moveTo(this.esx + this.ewx / 8, this.esy + this.ewy - this.ewy / 3);
                    ctx.bezierCurveTo(this.esx + this.ewy / 8, this.esy + this.ewy, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy - this.ewy / 3);
                    ctx.stroke();
                    ctx.closePath();
                },

                this.drawBoss = function() {
                    ctx.lineWidth = 1;
                    randNum = Math.round(Math.random() * 2);
                    ebrandomColor = ebcolors[randNum];
                    ctx.fillStyle = ebrandomColor;
                    this.ewx = wx - 10;
                    this.ewy = wy * 2 - 10;
                    ctx.beginPath();

                    ctx.moveTo(this.esx - this.esx / 20, this.esy);
                    ctx.bezierCurveTo(this.esx - this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy);

                    ctx.bezierCurveTo(this.esx + this.ewx + this.esx / 10, this.esy, this.esx + this.ewx + this.esx / 10, this.esy + this.ewy, this.esx + this.ewx, this.esy + this.ewy);

                    ctx.bezierCurveTo(this.esx + this.ewx / 10, this.esy + this.esy / 4, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy + this.ewy / 2);

                    ctx.bezierCurveTo(this.esx - this.ewx / 2, this.esy + this.ewy / 2, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                    ctx.lineWidth = 1;

                    ctx.beginPath();
                    ctx.fillStyle = 'black';
                    ctx.arc(this.esx + this.ewx / 6, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 4, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();

                    ctx.beginPath();
                    ctx.arc(this.esx + this.ewx - this.ewx / 8, this.esy + this.ewy / 6, (this.ewx / 4 + this.ewy / 4) / 6, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();

                    ctx.beginPath();
                    ctx.moveTo(this.esx + this.ewy / 8, this.esy + this.ewy);
                    ctx.bezierCurveTo(this.esx + this.ewx / 8, this.esy + this.ewy - this.ewy / 3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy - this.ewy / 3, this.esx + this.ewx - this.ewy / 8, this.esy + this.ewy);
                    ctx.stroke();
                    ctx.closePath();
                },

                this.move = function() {

                    if (this.esx > sx + wx / 10) this.esx -= speed;
                    if (this.esx < sx + wx / 10) this.esx += speed;

                    if (this.esy > sy + wy / 10) this.esy -= speed;
                    if (this.esy < sy + wy / 10) this.esy += speed;

                    this.esx = random(this.esx);
                    this.esy = random(this.esy);
                },

                this.kill = function() {
                    this.ewx -= 2;
                    this.ewy -= 2;

                    ctx.moveTo(this.esx - this.esx / 20, this.esy);
                    ctx.bezierCurveTo(this.esx - this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy - this.esy / 20, this.esx + this.ewx + this.esx / 20, this.esy);

                    ctx.bezierCurveTo(this.esx + this.ewx + this.esx / 10, this.esy, this.esx + this.ewx + this.esx / 10, this.esy + this.ewy, this.esx + this.ewx, this.esy + this.ewy);

                    ctx.bezierCurveTo(this.esx + this.ewx / 10, this.esy + this.esy / 4, this.esx - this.ewx * 2, this.esy + this.ewy / 4, this.esx - this.esx / 20, this.esy);

                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                    if (this.ewx <= 0 || this.ewy <= 0) {
                        score++;
                        if (power < 50) power += 1;
                        this.state = 'dead';
                        if(this.type == 'boss')this.bossIsAlive = false;
                    }
                },

                this.push = function() {
                    if(this.type == 'regular')this.draw();
                    else if(this.type== 'boss')this.drawBoss();
                    if (inarea(this)) {
                        if (this.esx > sx + wx / 10) this.esx += 6;
                        if (this.esx < sx + wx / 10) this.esx -= 6;

                        if (this.esy > sy + wy / 10) this.esy += 6;
                        if (this.esy < sy + wy / 10) this.esy -= 6;
                    } else {
                        this.esx = srandom(this.esx);
                        this.esy = srandom(this.esy);
                    }
                }


            };
            
            function stateDef(a) {
                if (a.type == 'regular') {
                    if (a.state == 'spawn' || a.state == 'dead') {
                        a.spawn();
                    } else if (a.state == 'alive') {
                        a.move();
                        a.draw();
                    } else if (a.state == 'dying') {
                        a.kill();
                    } else if (a.state == 'push') {
                        a.push();
                    }

                } else if (a.type == 'boss') {
                    if (a.state == 'spawn') {
                        a.spawn();
                    } else if (a.state == 'alive') {
                        a.move();
                        a.drawBoss();
                    } else if (a.state == 'dying') {
                        a.kill();
                    } else if (a.state == 'push') {
                        a.push();
                    }

                }
            }
            
            function enemySpawn(){
                if (Otime == 20)enemy1.state = 'spawn';

                if (Otime == 100) enemy2.state = 'spawn';

                if (Otime == 300) enemy3.state = 'spawn';

                if (Otime == 500) enemy4.state = 'spawn';

                if (Otime == 800) enemy5.state = 'spawn';

                if (Otime == 1000) enemy6.state = 'spawn';

                if (Otime == 1500) enemy7.state = 'spawn';

                if (Otime == 1800) enemy8.state = 'spawn';
                    
                if (Otime == 2000) enemy9.state = 'spawn';
                    
                if (Otime == 2500) enemy10.state = 'spawn';
                    
                if (Otime == 3000) enemy11.state = 'spawn';
                
                if (Otime == 3500) enemy12.state = 'spawn';
                
                if (Otime == 4000){ 
                    enemy13.state = 'spawn';
                    enemy14.state = 'spawn';
                    enemy15.state = 'spawn';
                }
            }
            
            function enemeySpeed(){
                if(score >= 20 && score < 40)speed=1.2;
                if(score >= 40 && score < 80)speed=1.25;
                if(score >= 80 && score < 100)speed=1.5;
                if(score >= 100 && score < 200)speed=1.75;
                if(score >= 200 && score < 250)speed=2;
                if(score >= 250 && score < 300)speed=2.5;
                if(score >= 300)speed=3;
            }

        //-------------------------------//
        //--------------HUD--------------//
            function drawStage() {
                ctx.fillStyle = '#fffbf9';
                ctx.fillRect(0, 0, w, h);
                //ctx.drawImage(background, 0, 0, w, h);
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

        //-----------------------------------//
        //--------------SESSION--------------//
            
            function menu() {
                setHighScore();
                sx = 150;
                sy = 150;
                wx = 200;
                wy = 200;
                score = 0;
                highscore = localStorage.getItem("highscore");
                var sessionME = setInterval(function() {
                    ctx.clearRect(0, 0, w, h);
                    grd = ctx.createLinearGradient(0, 0, w, 0);
                    grd.addColorStop(0, '#ffd6cc');
                    grd.addColorStop(0.8, 'grey');
                    grd.addColorStop(1, '#fffbf9');
                    ctx.fillStyle = '#fffbf9';
                    ctx.fillRect(0, 0, w, h);
                    drawChar();
                    ctx.fillStyle = grd;
                    ctx.font = '80px Arial Bold';
                    ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100);
                    ctx.font = '30px Arial Bold';
                    ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400);
                    grd1 = ctx.createLinearGradient(0, 0, w*3, 0);
                    grd1.addColorStop(0, 'grey');
                    grd1.addColorStop(1, 'white');
                    ctx.fillStyle = grd1;
                    ctx.font = '15px sans-serif';
                    ctx.fillText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ", w / 2 - (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2), h - 10);
                    sx = mxrandom(sx);
                    sy = myrandom(sy);
                    wx = srandom(wx);
                    wy = srandom(wy);
                    
                    if(HowTo) HowToPlay();
                    
                    canvas.addEventListener("mousedown", getPosition, false);
                    if (x >= w / 2 - 40 && x <= w / 2 + 40 && y >= 380 && y <= 420) {
                        clearInterval(sessionME);
                        transition();
                        canvas.removeEventListener("mousedown", getPosition, false);
                    } else if(x >= w / 2 - (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2) - 10 && x <= w / 2 + (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2) + 10 && y >= h - 20 && y <= h && HowTo == false){
                        HowTo = true;
                        x = 0;
                        y = 0;
                    } else if((x >= w / 2 - (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2) - 10 && x <= w / 2 + (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2) + 10 && y >= h - 20 && y <= h && HowTo) || (x >= w - 35 - ctx.measureText("X").width && x <=  h - 30 && y >= 30 && y <= 60)){
                        HowTo = false;
                        x = 0;
                        y = 0;
                        
                    }
                    document.body.style.backgroundColor = '#fffbf9';
                }, 50);
            }

            function HowToPlay(){
                ctx.fillStyle = '#ffd6cc';
                ctx.fillRect(30,30,w - 60, h - 60);
                ctx.fillStyle = 'black';
                ctx.font = '20px monospace';
                ctx.fillText("X",w - 35 - ctx.measureText("X").width, 50);
                grd = ctx.createLinearGradient(0, 0, w, 0);
                grd.addColorStop(0, '#ffd6cc');
                grd.addColorStop(0.5, 'grey');
                grd.addColorStop(1, '#fffbf9');
                ctx.fillStyle = grd;
                ctx.font = '50px Arial Bold';
                ctx.fillText("HOW TO PLAY", w / 2 - (ctx.measureText("HOW TO PLAY").width/2), 80);
                ctx.fillStyle = 'grey';
                ctx.font = '15px monospace';
                var instruction1 = "Use the Arrow keys to move,";
                var instruction2 = "And press Space to attack.";
                var instruction3 = "You can only attack if your blue bar is full!";
                var instruction4 = "Try to attack the enemies";
                var instruction5 = "But use Z, your powerup, if you are swarmed.";
                var instruction6 = "You can also hold X to regenerate health.";
                var instruction7 = "Just remember, powerups and regeneration use power!";
                ctx.fillText(instruction1, w / 2 - (ctx.measureText(instruction1).width/2), 122);
                ctx.fillText(instruction2, w / 2 - (ctx.measureText(instruction2).width/2), 154);
                ctx.fillText(instruction3, w / 2 - (ctx.measureText(instruction3).width/2), 186);
                ctx.fillText(instruction4, w / 2 - (ctx.measureText(instruction4).width/2), 218);
                ctx.fillText(instruction5, w / 2 - (ctx.measureText(instruction5).width/2), 250);
                ctx.fillText(instruction6, w / 2 - (ctx.measureText(instruction6).width/2), 282);
                ctx.fillText(instruction7, w / 2 - (ctx.measureText(instruction7).width/2), 314);
                
                var esx = 380;
                var esy = 390;
                var ewx = 20;
                var ewy = 40;
                
                ctx.lineWidth = 1;
                
                randNum = Math.round(Math.random() * 2);
                erandomColor = ecolors[randNum];
                ctx.fillStyle = erandomColor;
                
                ctx.beginPath();

                ctx.moveTo(esx - esx / 20, esy);
                ctx.bezierCurveTo(esx - esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy - esy / 20, esx + ewx + esx / 20, esy);

                ctx.bezierCurveTo(esx + ewx + esx / 10, esy, esx + ewx + esx / 10, esy + ewy, esx + ewx, esy + ewy);

                ctx.bezierCurveTo(esx + ewx / 10, esy + esy / 4, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy + ewy / 2);

                ctx.bezierCurveTo(esx - esx / 20, esy + ewy / 2, esx - ewx * 2, esy + ewy / 4, esx - esx / 20, esy);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                
                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.fillStyle = 'black';
                ctx.arc(esx + ewx / 6, esy + ewy / 6, (ewx / 4 + ewy / 4) / 4, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(esx + ewx - ewx / 8, esy + ewy / 6, (ewx / 4 + ewy / 4) / 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(esx + ewx / 8, esy + ewy - ewy / 3);
                ctx.bezierCurveTo(esx + ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy, esx + ewx - ewy / 8, esy + ewy - ewy / 3);
                ctx.stroke();
                ctx.closePath();
                
                ctx.font = '15px monospace';
                
                ctx.fillText("ENEMY", 390 - (ctx.measureText("ENEMY").width/2), 360);
                
                ctx.fillStyle = 'black';
                ctx.fillRect(w / 2 - 115 / 2 + 5, 395, 115, 20);
                ctx.fillStyle = 'blue';
                ctx.fillRect(w / 2 + 0.5 - 115 / 2 + 5, 396, 113 - (0 / 50) * 113, 18);
                
                ctx.fillStyle = 'black';
                ctx.fillText("COOL-DOWN BAR", w/2 - (ctx.measureText("COOL-DOWN BAR").width/2)+ 5, 360);
                
                ctx.fillStyle = 'black';
                ctx.fillRect((w-60) * (1 / 3)-90, 395, 115, 20);
                ctx.fillStyle = '#33cc33';
                ctx.font = "10px monospace";
                ctx.fillText(20 + "/50", (w-60) * (1 / 3)-90 + 52, 409);
                ctx.fillRect((w-60) * (1 / 3)-90 + 1, 396, (20 / 50) * 113, 18);
                
                ctx.font = '15px monospace';
                ctx.fillStyle = 'black';
                
                ctx.fillText("POWER", 90, 360);
            }
            
            function transition() {
                gw = 0;
                time = 0;
                var sessionT = setInterval(function() {
                    time++;
                    ctx.clearRect(0, 0, w, h);
                    grd = ctx.createLinearGradient(0, 0, w - gw, 0);
                    grd.addColorStop(0, '#ffd6cc');
                    grd.addColorStop(0.8, 'grey');
                    grd.addColorStop(1, '#fffbf9');
                    ctx.fillStyle = '#fffbf9';
                    ctx.fillRect(0, 0, w, h);
                    drawChar();
                    ctx.fillStyle = grd;
                    ctx.font = '80px Arial Bold';
                    ctx.fillText("BLOB MOB", w / 2 - (ctx.measureText("BLOB MOB").width/2), 100);
                    ctx.font = '30px Arial Bold';
                    ctx.fillStyle = grd;
                    ctx.fillText("START", w / 2 - (ctx.measureText("START").width/2), 400);
                    grd1 = ctx.createLinearGradient(0, 0, w*3 - gw*3, 0);
                    grd1.addColorStop(0, 'grey');
                    grd1.addColorStop(1, 'white');
                    ctx.fillStyle = grd1;
                    ctx.font = '15px sans-serif';
                    ctx.fillText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ", w / 2 - (ctx.measureText("xXZBUCKXx GAMING   -   HOW TO PLAY   -   Pretty lit amiright?     ").width/2), h - 10);
                    if (time < 20) {
                        if (time % 2 == 0) {
                            wx -= 4;
                            wy -= 4;
                            sx += 2;
                            sy += 2;
                        } else if (Math.abs(time % 2) == 1) {
                            wx += 4;
                            wy += 4;
                            sx -= 2;
                            sy -= 2;
                        }
                    } else if (time >= 20) {
                        if (gw <= w - 50) gw += 25;
                        sx += 4;
                        sy += 4;
                        sx = srandom(sx);
                        sy = srandom(sy);
                        wx -= 8;
                        wy -= 8;
                    }
                    if (wx <= 50 || wy <= 10) {
                        background.src = 'http://www.photos-public-domain.com/wp-content/uploads/2011/02/crumpled-notebook-paper-texture.jpg';
                        ctx.drawImage(background, 0, 0, w, h);
                        clearInterval(sessionT);
                        main();
                    }
                }, 50);
            }
            
            
            var enemy1 = new enemy('none', 'regular');
            var enemy2 = new enemy('none', 'regular');
            var enemy3 = new enemy('none', 'regular');
            var enemy4 = new enemy('none', 'regular');
            var enemy5 = new enemy('none', 'regular');
            var enemy6 = new enemy('none', 'regular');
            var enemy7 = new enemy('none', 'regular');
            var enemy8 = new enemy('none', 'regular');
            var enemy9 = new enemy('none', 'regular');
            var enemy10 = new enemy('none', 'regular');
            var enemy11 = new enemy('none', 'regular');
            var enemy12 = new enemy('none', 'regular');
            var enemy13 = new enemy('none', 'regular');
            var enemy14 = new enemy('none', 'regular');
            var enemy15 = new enemy('none', 'regular');
            //var enemy1 = new enemy('none', 'boss');

            function main() {
                var sx = 100;
                var sy = 100;
                var wx = 50;
                var wy = 50;
                sessionM = setInterval(function() {
                    Otime++;
                    ctx.clearRect(0, 0, w, h);

                    drawStage();

                    listen();

                    moveChar();

                    drawChar();
                    
                    if(regeneration && damaging == false) regenerate();

                    stateDef(enemy1);

                    stateDef(enemy2);

                    stateDef(enemy3);

                    stateDef(enemy4);

                    stateDef(enemy5);

                    stateDef(enemy6);

                    stateDef(enemy7);

                    stateDef(enemy8);
                    
                    stateDef(enemy9);
                    
                    stateDef(enemy10);
                    
                    stateDef(enemy11);
                    
                    stateDef(enemy12);
                    
                    stateDef(enemy13);
                    
                    stateDef(enemy14);
                    
                    stateDef(enemy15);

                    drawHealth();

                    drawScore();

                    drawPower();

                    drawCool();

                    enemySpawn();
                    
                    enemeySpeed();
                            
                    reminderplay();
                    
                    if (cool > 0 && regeneration == false) {
                        cool--;
                        randomColor = '#adedff';
                    }

                    if ((touch(enemy1) && enemy1.state != 'dead') || (touch(enemy2) && enemy2.state != 'dead') || (touch(enemy3) && enemy3.state != 'dead') || (touch(enemy4) && enemy4.state != 'dead') || (touch(enemy5) && enemy5.state != 'dead') || (touch(enemy6) && enemy6.state != 'dead') || (touch(enemy7) && enemy7.state != 'dead') || (touch(enemy8) && enemy8.state != 'dead') || (touch(enemy9) && enemy9.state != 'dead') || (touch(enemy10) && enemy10.state != 'dead') || (touch(enemy11) && enemy11.state != 'dead') || (touch(enemy12) && enemy12.state != 'dead') || (touch(enemy13) && enemy13.state != 'dead') || (touch(enemy14) && enemy14.state != 'dead') || (touch(enemy15) && enemy15.state != 'dead')) {
                        health--;
                        randomColor = '#ff6d6d';
                        damaging = true;
                        regeneration = false;
                    } else {
                        damaging = false;
                    }
                    
                    if (cool == 0 && damaging == false) randomColor = '#ffd6cc';

                    if (collide() || health <= 0) {
                        clearInterval(sessionM);
                        shrink();
                    }
                    document.body.style.backgroundColor = 'black';
                }, 50);
            }
            
            function shrink() {
                var shrinksx = sx;
                var shrinksy = sy;
                var shrinkwx = wx;
                var shrinkwy = wy;
                var sessionS = setInterval(function() {
                    ctx.clearRect(0, 0, w, h);
                    drawStage();
                    shrinksx += 4;
                    shrinksy += 4;
                    shrinkwx -= 8;
                    shrinkwy -= 8;
                    ctx.fillStyle = randomColor;
                    ctx.fillRect(shrinksx, shrinksy, shrinkwx, shrinkwy);
                    stateDef(enemy1);
                    stateDef(enemy2);
                    stateDef(enemy3);
                    stateDef(enemy4);
                    stateDef(enemy5);
                    stateDef(enemy6);
                    stateDef(enemy7);
                    stateDef(enemy8);
                    stateDef(enemy9);
                    stateDef(enemy10);
                    stateDef(enemy11);
                    stateDef(enemy12);
                    stateDef(enemy13);
                    stateDef(enemy14);
                    stateDef(enemy15);
                    drawHealth();
                    drawPower();
                    drawCool();
                    drawScore();
                    if (shrinkwx <= 0 || shrinkwy <= 0 || shrinksx > w || shrinksy > h) {
                        clearInterval(sessionS);
                        end();
                    }

                }, 150);
            }
            
            function end() {
                gx = -w;
                gx2 = -0.5*w;
                var sessionE = setInterval(function() {
                    if (gx != 0) gx += 2;
                    if (gx2 != 0 + 200) gx2 += 4;
                    setHighScore();
                    randomColor = '#ffd6cc';
                    ctx.clearRect(0, 0, w, 0);
                    ctx.fillStyle = 'black';
                    ctx.fillRect(0, 0, h, w);
                    grd = ctx.createLinearGradient(0, 0, w + gx, 0);
                    grd.addColorStop(0, randomColor);
                    grd.addColorStop(1, 'black');
                    ctx.font = '70px Comic Sans MS';
                    ctx.fillStyle = grd;
                    ctx.fillText("GAME OVER", w / 2 - (ctx.measureText("GAME OVER").width/2), h / 2 - 5);
                    ctx.font = '12px monospace';
                    if(highscore < score){
                        ctx.fillText("The high score was " + highscore, w / 2 - (ctx.measureText("The high score was " + highscore).width/2), h * 8.5 / 16);
                        ctx.fillText("Your score is " + score, w / 2 - (ctx.measureText("Your score is " + score).width/2), h * 9 / 16);
                    }
                    else {
                        ctx.fillText("The high score is " + highscore, w / 2 - (ctx.measureText("The high score is " + highscore).width/2), h * 8.5 / 16);
                        ctx.fillText("Your score was " + score, w / 2 - (ctx.measureText("Your score was " + score).width/2), h * 9 / 16);
                    }
                    ctx.font = '20px monospace';
                    grd2 = ctx.createLinearGradient(0, 0, w + gx2, 0);
                    grd2.addColorStop(0, randomColor);
                    grd2.addColorStop(1, 'black');
                    ctx.fillStyle = grd2;
                    ctx.fillText("TITLE >>",w - (ctx.measureText("TITLE >>").width), h - 10)
                    canvas.addEventListener("mousedown", getPosition, false);
                    if (x >= w - (ctx.measureText("TITLE >>").width)-10 && x <= w && y >= h - 20 && y <= h) {
                        location.reload();
                    }
                }, 50);
        }
