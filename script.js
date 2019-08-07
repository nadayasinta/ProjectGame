let playerOne;
let playerTwo;

function startGame() {
    playerOne = new component(30, 30, "red", 225, 225);
    playerTwo = new component(30, 30, "blue", 200, 225);
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
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
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

function updateGameArea() {
    myGameArea.clear();
    playerOne.moveAngle = 0;
    playerTwo.moveAngle = 0;
    playerOne.speed = 0;
    playerTwo.speed = 0;
    if (myGameArea.keys && myGameArea.keys[38]) {playerOne.speed= 1; } // atas
    if (myGameArea.keys && myGameArea.keys[37]) {playerOne.moveAngle = -1; } // kiri
    if (myGameArea.keys && myGameArea.keys[39]) {playerOne.moveAngle = 1; } // kanan
    if (myGameArea.keys && myGameArea.keys[40]) {playerOne.speed= -1; } // bawah
    if (myGameArea.keys && myGameArea.keys[87]) {playerTwo.speed= 1; } // atas
    if (myGameArea.keys && myGameArea.keys[65]) {playerTwo.moveAngle = -1; } // kiri
    if (myGameArea.keys && myGameArea.keys[68]) {playerTwo.moveAngle = 1; } // kanan
    if (myGameArea.keys && myGameArea.keys[83]) {playerTwo.speed= -1; } // bawah
    playerOne.newPos();
    playerTwo.newPos();
    playerOne.update();
    playerTwo.update();
}