function startGame() {
    var randTemp = Math.floor(Math.random()*3)
    var randTemp = 1
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
        
    var myObstacle  = new obstacle(50, 50, "./img/stone.png", myObs1)          
                 
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
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

function updateGameArea() {
    myGameArea.clear();
    myObstacle.update();
}