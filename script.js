let playerOne;
let playerTwo;
var bullets = [];
var myObstacle;

function startGame() {
    playerOne = new component(30, 30, "red", 240, 220);
    playerTwo = new component(30, 30, "blue", 240, 20); 
    var randTemp = Math.floor(Math.random()*3)
    switch(randTemp){
        case 0:
            var myObs1  = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0], 
                [0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0], 
                [0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0], 
                [0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],  
            ];
            break;
        case 1:
            var myObs1  = [
                [0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0], 
                [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1], 
                [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1], 
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0], 
                [0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0], 
                [0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],  
            ];
            break;
        case 2:
            var myObs1  = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0], 
                [0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0], 
                [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0], 
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], 
                [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0], 
                [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0], 
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],  
            ];
            break;    
        }
        
    myObstacle  = new obstacle(50, 50, "./img/stone.png", myObs1)          
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (event) {
            event.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[event.keyCode] = (event.type == "keydown");
        })
        window.addEventListener('keyup', function (event) {
            myGameArea.keys[event.keyCode] = (event.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function obstacle(width, height, img, x) {
    this.image = new Image();
    this.image.src = img;
    this.width = width;
    this.height = height;
    this.x = x;   
    this.update = function() {
        for (i=0;i<this.x.length;i++){
            for (j=0;j<this.x[i].length;j++){
                if (this.x[i][j]===1){
                    ctx = myGameArea.context;
                    ctx.drawImage(this.image,
                        j*50,
                        i*50,
                        this.width, this.height);
                }
            }
        }
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        
        if (type == "image") {
            ctx = myGameArea.context;
            ctx.save();
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                ctx.rotate(this.angle);
                ctx.translate(this.x, this.y);
        } else {
            ctx = myGameArea.context;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = color;
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        }
        
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

class Bullet {
    constructor(x, y, xv, sudut) {
      this.x = x
      this.y = y
      this.xv = xv
      this.sudut = sudut
      this.size = 3
      this.timer = 0
    }
    move() {
      this.x += this.xv * Math.sin(this.sudut)
      this.y -= this.xv * Math.cos(this.sudut)
      this.timer++
    }
    draw() {
      ctx.fillStyle = "green";
      ctx.fillRect(this.x, this.y, 3, 3);
    }
    delete() {
      if (this.timer == 50) {
        bullets.splice(bullets.indexOf(this), 1);
      }
    }
  }

function updateGameArea() {
    myGameArea.clear();
    playerOne.moveAngle = 0;
    playerTwo.moveAngle = 0;
    playerOne.speed = 0;
    playerTwo.speed = 0;
    if (myGameArea.keys && myGameArea.keys[38]) {playerOne.speed= 5; } // atas
    if (myGameArea.keys && myGameArea.keys[37]) {playerOne.moveAngle = -5; } // kiri
    if (myGameArea.keys && myGameArea.keys[39]) {playerOne.moveAngle = 5; } // kanan
    if (myGameArea.keys && myGameArea.keys[40]) {playerOne.speed= -5; } // bawah
    if (myGameArea.keys && myGameArea.keys[83]) {playerTwo.speed= 5; } // atas
    if (myGameArea.keys && myGameArea.keys[65]) {playerTwo.moveAngle = -5; } // kiri
    if (myGameArea.keys && myGameArea.keys[68]) {playerTwo.moveAngle = 5; } // kanan
    if (myGameArea.keys && myGameArea.keys[87]) {playerTwo.speed= -5; } // bawah
    playerOne.newPos();
    playerTwo.newPos();
    if (myGameArea.keys && myGameArea.keys[32]) {bullets.push(new Bullet(playerOne.x, playerOne.y, 5, playerOne.angle))} // bawah
    if (myGameArea.keys && myGameArea.keys[9]) {bullets.push(new Bullet(playerTwo.x, playerTwo.y, -5, playerTwo.angle))} // bawah
    for (b of bullets) {
        b.move()
        b.draw()
        b.delete()
    }
    myObstacle.update();
    playerOne.update();
    playerTwo.update();
    
}