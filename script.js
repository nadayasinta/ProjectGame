// Variable yang dibutuhkan
let playerOne;
let playerTwo;
var bullets = [];
var myObstacle;
let healthOne;
let healthTwo;
var myMusic;


// Fungsi untuk merandom obstacle di map
function randomObs(){
    var randTemp = Math.floor(Math.random()*3)
    switch(randTemp){
        case 0:
            return [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0], 
                [0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0], 
                [0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0], 
                [0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0], 
                [0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0], 
                [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  
                [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],  
            ];
        break;
        case 1:
           return [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0], 
                [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0], 
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], 
                [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0], 
                [0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0], 
                [0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],  
            ];
        break;
        case 2:
            return [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], 
                [0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0], 
                [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0], 
                [0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0], 
                [0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0], 
                [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0], 
                [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], 
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  
            ];             
        break;    
        }
}

// Variable yang berisi maps dengan obstacle
var myObs = new randomObs()

// Variable yang berisi koordinat obstacle
var obsArr = obsArray(myObs);

// Fungsi untuk membuat array yang berisi koordinat obstacle
function obsArray(myObs){
    const obsArr=[]
    for (i=0;i<myObs.length;i++){
        for (j=0;j<myObs[i].length;j++){
            if (myObs[i][j]===1){
               obsArr.push([(j*50)+25,(i*50)+25])
            }
        }
    }
    return obsArr
}

// Fungsi untuk memulai game
function startGame() {
    document.getElementById("home-page").remove();
    myMusic = new sound("./img/music.mp3");
    myMusic.play();
    // playerOne = new player(30, 30, "./img/stone.png", 1010, 490,"image");
    playerOne = new player(30, 30, "red", 1240, 580);
    playerTwo = new player(30, 30, "blue", 40, 60); 
    healthOne = new health(100, 300, 'white', 20, 30)
    healthTwo = new health(100, 300, 'white', 1079, 30)
    myObstacle  = new obstacle(50, 50, "./img/batu.png", myObs)   
    myGameArea.start();
}

// Game Area
let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        
        this.canvas.width = 1331;
        this.canvas.height = 625;
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

// Fungsi untuk membuat obstacle
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

// Fungsi untuk membuat player
function player(width, height, color, x, y, type) {
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
        
        if (type === "image") {
            ctx = myGameArea.context;
            ctx.save();
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            // ctx.drawImage(this.image, 
            //     this.x, 
            //     this.y,
            //     this.width, this.height);
                // if (count===0) {
                // ctx = myGameArea.context;
                // ctx.save();
                // ctx.translate(this.x, this.y);
                // ctx.rotate(this.angle);
                // ctx.drawImage(this.image, 
                //     this.x, 
                //     this.y,
                //     this.width, this.height);
                //     counter++;
                // }
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

// Fungsi untuk memunculkan keterangan health player
function health(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.nilai = 100;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = '20px arial';
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    }
  }

  // Kelas untuk membuat objek peluru
class Bullet {
    constructor(x, y, xv, sudut) {
        this.xv = xv
        this.sudut = sudut
        this.x = x
        this.y = y        
        this.x += 4*this.xv * Math.sin(this.sudut)
        this.y -= 4*this.xv * Math.cos(this.sudut)
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

// Fungsi untuk membuat sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
} 

// Fungsi untuk mengupdate game arena
function updateGameArea() {
    if (healthOne.nilai <= 0){
        // myMusic.stop();
        myGameArea.stop();
        return alert('Player 2 Menang!')
    }
    if(healthTwo.nilai <= 0){
        // myMusic.stop();
        myGameArea.stop();
        return alert('Player 1 Menang!');
    }
    myGameArea.clear()
    
    playerOne.moveAngle = 0;
    playerTwo.moveAngle = 0;
    playerOne.speed = 0;
    playerTwo.speed = 0;

    // Kontrol pemain
    if (myGameArea.keys && myGameArea.keys[38]) {playerOne.speed= 5; } // atas
    if (myGameArea.keys && myGameArea.keys[37]) {playerOne.moveAngle = -5; } // kiri
    if (myGameArea.keys && myGameArea.keys[39]) {playerOne.moveAngle = 5; } // kanan
    if (myGameArea.keys && myGameArea.keys[40]) {playerOne.speed= -5; } // bawah
    if (myGameArea.keys && myGameArea.keys[83]) {playerTwo.speed= 5; } // atas
    if (myGameArea.keys && myGameArea.keys[65]) {playerTwo.moveAngle = -5; } // kiri
    if (myGameArea.keys && myGameArea.keys[68]) {playerTwo.moveAngle = 5; } // kanan
    if (myGameArea.keys && myGameArea.keys[87]) {playerTwo.speed= -5; } // bawah

    // Handling nabrak tembok
    if (playerOne.x < playerOne.width/2){
        playerOne.x = playerOne.width;
    }
    if (playerOne.x > myGameArea.canvas.width - playerOne.width/2){
        playerOne.x = myGameArea.canvas.width - playerOne.width;
    }
    if (playerOne.y < playerOne.height/2){
        playerOne.y = playerOne.height;
    }
    if (playerOne.y > myGameArea.canvas.height - playerOne.height/2){
        playerOne.y = myGameArea.canvas.height - playerOne.height;
    }
    if (playerTwo.x < playerTwo.width/2){
        playerTwo.x = playerTwo.width;
    }
    if (playerTwo.x > myGameArea.canvas.width - playerTwo.width/2){
        playerTwo.x = myGameArea.canvas.width - playerTwo.width;
    }
    if (playerTwo.y < playerTwo.height/2){
        playerTwo.y = playerTwo.height;
    }
    if (playerTwo.y > myGameArea.canvas.height - playerTwo.height/2){
        playerTwo.y = myGameArea.canvas.height - playerTwo.height;
    }

    // Handling nabrak obstacle
    for (let i in obsArr){
        if (playerOne.x >= obsArr[i][0]-25 - playerOne.width/2 && playerOne.y >= obsArr[i][1]-25 - playerOne.height/2 && playerOne.x <= obsArr[i][0]+25 + playerOne.width/2 && playerOne.y <= obsArr[i][1]+25 + playerOne.height/2 ){
            if(playerOne.x >= obsArr[i][0]-25 - playerOne.width/2 && playerOne.y >= obsArr[i][1]-25 - playerOne.height/2 && playerOne.y <= obsArr[i][1]+25 + playerOne.height/2) { 
                playerOne.x = obsArr[i][0]-25 - playerOne.width 
            } // tabrak dari kiri
            else if (playerOne.y >= obsArr[i][1]-25 - playerOne.height/2 && playerOne.x <= obsArr[i][0]+25 + playerOne.width/2 && playerOne.y <= obsArr[i][1]+25 + playerOne.height/2 ){
                playerOne.x = obsArr[i][0]+25 + playerOne.width
            } // tabrak dari kanan
            else if (playerOne.x >= obsArr[i][0]-25 - playerOne.width/2 && playerOne.y >= obsArr[i][1]-25 - playerOne.height/2 && playerOne.x <= obsArr[i][0]+25 + playerOne.width/2 ){
                playerOne.y = obsArr[i][1]-25 - playerOne.height
            } // tabrak dari atas
            else if (playerOne.x >= obsArr[i][0]-25 - playerOne.width/2 && playerOne.x <= obsArr[i][0]+25 + playerOne.width/2 && playerOne.y <= obsArr[i][1]+25 + playerOne.height/2 ){
                playerOne.y = obsArr[i][1]+25 + playerOne.height
            } // tabrak dari bawah
        }
        if (playerTwo.x >= obsArr[i][0]-25 - playerTwo.width/2 && playerTwo.y >= obsArr[i][1]-25 - playerTwo.height/2 && playerTwo.x <= obsArr[i][0]+25 + playerTwo.width/2 && playerTwo.y <= obsArr[i][1]+25 + playerTwo.height/2 ){
            if(playerTwo.x >= obsArr[i][0]-25 - playerTwo.width/2 && playerTwo.y >= obsArr[i][1]-25 - playerTwo.height/2 && playerTwo.y <= obsArr[i][1]+25 + playerTwo.height/2) { 
                playerTwo.x = obsArr[i][0]-25 - playerTwo.width 
            } // tabrak dari kiri
            else if (playerTwo.y >= obsArr[i][1]-25 - playerTwo.height/2 && playerTwo.x <= obsArr[i][0]+25 + playerTwo.width/2 && playerTwo.y <= obsArr[i][1]+25 + playerTwo.height/2 ){
                playerTwo.x = obsArr[i][0]+25 + playerTwo.width
            } // tabrak dari kanan
            else if (playerTwo.x >= obsArr[i][0]-25 - playerTwo.width/2 && playerTwo.y >= obsArr[i][1]-25 - playerTwo.height/2 && playerTwo.x <= obsArr[i][0]+25 + playerTwo.width/2 ){
                playerTwo.y = obsArr[i][1]-25 - playerTwo.height
            } // tabrak dari atas
            else if (playerTwo.x >= obsArr[i][0]-25 - playerTwo.width/2 && playerTwo.x <= obsArr[i][0]+25 + playerTwo.width/2 && playerTwo.y <= obsArr[i][1]+25 + playerTwo.height/2 ){
                playerTwo.y = obsArr[i][1]+25 + playerTwo.height
            } // tabrak dari bawah
        }
    }

    // Handling nabrak lawan
    if (playerOne.x >= playerTwo.x-playerTwo.width/2 - playerOne.width/2 && playerOne.y >= playerTwo.y-playerTwo.height/2 - playerOne.height/2 && playerOne.x <= playerTwo.x+playerTwo.width/2 - playerOne.width/2 && playerOne.y <= playerTwo.y+playerTwo.height/2 - playerOne.height/2 ){
        playerOne.x = playerTwo.x-playerTwo.width/2 - playerOne.width
        playerOne.y = playerTwo.y-playerTwo.height/2 - playerOne.width 
    }
    if (playerTwo.x >= playerOne.x-playerOne.width/2 - playerTwo.width/2 && playerTwo.y >= playerOne.y-playerOne.height/2 - playerTwo.height/2 && playerTwo.x <= playerOne.x+playerOne.width/2 - playerTwo.width/2 && playerTwo.y <= playerOne.y+playerOne.height/2 - playerTwo.height/2 ){
        playerTwo.x = playerOne.x-playerOne.width/2 - playerTwo.width
        playerTwo.y = playerOne.y-playerOne.height/2 - playerTwo.width 
    }

    // Handling kena tembakan 
    for (let i in bullets){
        if (bullets[i].x > playerOne.x-playerOne.width/2 && bullets[i].y > playerOne.y-playerOne.height/2 && bullets[i].y < playerOne.y+playerOne.height/2 && bullets[i].x < playerOne.x+playerOne.width/2) {
            bullets.splice(i,1);
            healthOne.nilai -= 1;
            healthOne.update();
        }
    }
    for (let i in bullets){
        if (bullets[i].x > playerTwo.x-playerTwo.width/2 && bullets[i].y > playerTwo.y-playerTwo.height/2 && bullets[i].y < playerTwo.y+playerTwo.height/2 && bullets[i].x < playerTwo.x+playerTwo.width/2) {
            bullets.splice(i,1);
            healthTwo.nilai -= 1;
            healthTwo.update();

        }
    }

    // Untuk save posisi player setelah digerakan
    playerOne.newPos();
    playerTwo.newPos();

    // Untuk menembak dengan menekan tombol keyboard
    if (myGameArea.keys && myGameArea.keys[77]) {bullets.push(new Bullet(playerOne.x, playerOne.y, 5, playerOne.angle))} // bawah
    if (myGameArea.keys && myGameArea.keys[9]) {bullets.push(new Bullet(playerTwo.x, playerTwo.y, -5, playerTwo.angle))} // bawah
    for (b of bullets) {
        b.move()
        b.draw()
        b.delete()
    }

    // Untuk memunculkan teks info health player
    healthOne.text = "Health Player 1: " + healthOne.nilai;
    healthTwo.text = "Health Player 2: " + healthTwo.nilai;
    healthOne.update();
    healthTwo.update();

    // Untuk mengupdate obstacle
    myObstacle.update();

    // Untuk mengupdate player
    playerOne.update();
    playerTwo.update();


    
}

// Fungsi untuk halaman depan
function homePage() {
    myMusic = new sound("./sound/music.mp3");
    myMusic.play();
}

// Fungsi untuk menjalankan suara
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}