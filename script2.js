var pacman = {
    x: 6,
    y: 10,
    
}

var ghostBlue ={
    x:6,
    y:5,
}
var ghostRed ={
    x:6,
    y:5,
}
var ghostOrange ={
    x:6,
    y:5,
}
var ghostPink ={
    x:6,
    y:5,
}

var map = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,2,1,1,1,2,1,2,1,1,1,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,2,2,1,1,0,1,1,2,2,2,1], 
    [1,2,1,1,1,1,0,1,1,1,1,2,1], 
    [1,2,1,1,0,0,0,0,0,1,1,2,1], 
    [1,2,1,1,4,4.1,4.2,4.3,0,1,1,2,1], 
    [1,2,1,1,1,1,1,1,1,1,1,2,1], 
    [1,2,2,2,2,2,2,2,2,2,2,2,1], 
    [1,2,1,1,1,1,5,1,1,1,1,2,1],
    [6,2,2,2,2,2,2,2,2,2,2,2,7],
    [1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,1,2,2,2,1,2,1],
    [1,2,2,2,1,1,1,1,1,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
]

var el = document.getElementById('world');

function drawWorld(){
    el.innerHTML = '';
    for(var y = 0; y < map.length ; y = y + 1) {
        for(var x = 0; x < map[y].length ; x = x + 1) {		
            if (map[y][x] === 0) {
                el.innerHTML += "<div class='ghostHome'></div>";
            }           
            
            else if (map[y][x] === 1) {
                el.innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                el.innerHTML += "<div class='coin1'></div>";
            }
            else if (map[y][x] === 3) {
                el.innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 4) {
                el.innerHTML += "<div class='ghostBlue'></div>";
            }
            else if (map[y][x] === 4.1) {
                el.innerHTML += "<div class='ghostRed'></div>";
            }
            else if (map[y][x] === 4.2) {
                el.innerHTML += "<div class='ghostYellow'></div>";
            }
            else if (map[y][x] === 4.3) {
                el.innerHTML += "<div class='ghostPink'></div>";
            }
            else if (map[y][x] === 5) {
                el.innerHTML += "<div class='pacman'></div>";
            }
            else if (map[y][x] === 6) {
                el.innerHTML += "<div class='coin2'></div>";
            }
            else if (map[y][x] === 7) {
                el.innerHTML += "<div class='coin3'></div>";
            }
        }
        el.innerHTML += "<br>";
    }
}

drawWorld();

document.onkeydown = function(event){
    if (event.keyCode === 37){ // PACMAN MOVE LEFT
        // console.log(pacman.y,pacman.x)
         if (pacman.y===11 && pacman.x===0){
            pacman.y=11;
            pacman.x=12;
            map[11][0] = 3;        
            map[11][12] = 5;


        } else if ( map[pacman.y][pacman.x-1] !== 1){
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5;       
            
        } 
        drawWorld();
    }   else if (event.keyCode === 38){ // PACMAN MOVE UP
        
        if ( map[pacman.y-1][pacman.x] !== 1){
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld(); 
        }
       
    }   else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
        console.log(pacman.y, pacman.x );
     if (pacman.y===11 && pacman.x===12){
        pacman.y=11;
        pacman.x=-1;
        map[11][12] = 3;
        map[11][-1] = 5;           
    
    } else if ( map[pacman.y][pacman.x+1] !== 1){
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }   else if (event.keyCode === 40){ // PACMAN MOVE DOWN
        if ( map[pacman.y+1][pacman.x] !== 1){
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    // console.log(map)
}
// document.onkeyup = function(event){
//     if (event.keyCode === 38 || event.keyCode === 40){ 
//         map[ghostBlue.y+1][ghostBlue.x] !==1;
//     }

// }
    

