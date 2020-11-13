
/*
let knap = document.querySelector("#knap");

console.log(knap);

knap.addEventListener("click", ()=>{
    alert("Du har klippet på knappen");
} )

document.addEventListener("keyup", (e)=>{
      console.log(e);
})
*/

let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext('2d'); 


maze =
[
    [0,0,0,0,0,2,2,2,4,0],
    [0,3,2,2,2,2,3,3,0,0],
    [0,2,2,0,3,3,3,0,0,0],
    [0,2,2,2,2,2,2,2,2,0],   
    [0,0,0,0,3,0,0,3,2,3],
    [0,2,2,2,2,2,2,2,2,0],
    [0,2,3,2,0,3,0,3,0,3],
    [0,2,2,3,0,2,0,2,0,0],
    [0,0,2,2,2,2,2,2,1,0],
    [0,0,0,0,0,0,0,0,0,0]

]

let wall = 0;
let player = 1;
let road = 2;
let trap = 3;
let finish = 4;
let health = 100


 
function playsound(){

    let gameSound = new Audio('/sound/background-game-melody-loop.mp3');
    gameSound.pause();

}

function playlose(){

    let gameSound = new Audio('/sound/losing-bell-game-show-sound.mp3');
    gameSound.play();


}


let tileSize = 50;

let playerPosition = {x:0, y:0};

function drawMaze(){

    for(let y= 0; y < maze.length; y++){

      for(let x = 0; x < maze[y].length; x++){

        if(maze[y][x] === wall){
            ctx.fillStyle = "black";
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === road){
            ctx.fillStyle = "white++";
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === player){
            playerPosition.x = x; 
            playerPosition.y = y; 
            ctx.fillStyle = "yellow";
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === trap){
            ctx.fillStyle = "blue";
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === finish){
            ctx.fillStyle = "green";
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }
      }
    }

}

drawMaze();

window.addEventListener("keydown", (e)=>{
  
    switch(e.keyCode){
        case 37: // Left
    
        if (maze[playerPosition.y] [playerPosition.x -1] === road){ // Spørg om der er vej på venstre tile for playeren
            maze[playerPosition.y] [playerPosition.x -1] = player // Players nye position
            maze[playerPosition.y] [playerPosition.x ] = road // Players gamle postion
            drawMaze();
            playsound();
        
    } 
    if (maze[playerPosition.y ] [playerPosition.x -1 ] === trap){
            alert ("Du har ramt mig ! haha")
            playlose();
        }
        break;
        case 39: // Right
    
        if (maze[playerPosition.y] [playerPosition.x +1] === road){ // Spørg om der er vej på venstre tile for playeren
            maze[playerPosition.y] [playerPosition.x +1] = player // Players nye position
            maze[playerPosition.y] [playerPosition.x ] = road // Players gamle postion
            drawMaze();
            
        }
        else if (maze[playerPosition.y ] [playerPosition.x +1 ] === trap){
            alert ("Du har ramt mig ! haha");
            playlose();

        }
         else if (maze[playerPosition.y ] [playerPosition.x +1 ] === finish){
            alert ("Tillyke du har vundet!");

        }

        // Endgame
        
        
     
        break;
        case 40: // Down
    
        if (maze[playerPosition.y +1] [playerPosition.x ] === road){ // Spørg om der er vej på venstre tile for playeren
            maze[playerPosition.y +1] [playerPosition.x ] = player // Players nye position
            maze[playerPosition.y] [playerPosition.x ] = road // Players gamle postion
            drawMaze();
            
        }

        if (maze[playerPosition.y +1] [playerPosition.x ] === trap){
            alert ("Du har ramt mig ! haha")
            playlose();
        }


    
        break;
        case 38: // Up
    
        if (maze[playerPosition.y -1] [playerPosition.x ] === road){ // Spørg om der er vej på venstre tile for playeren
            maze[playerPosition.y -1] [playerPosition.x ] = player // Players nye position
            maze[playerPosition.y] [playerPosition.x ] = road // Players gamle postion
            drawMaze();
            
        }   
        else if (maze[playerPosition.y -1] [playerPosition.x ] === trap){
            alert ("Du har ramt mig ! haha")
            playlose();
        } 
    } 
} )


window.addEventListener("load", drawMaze);

