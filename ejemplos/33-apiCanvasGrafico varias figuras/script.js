const canvas =document.querySelector('.myCanvas');
const width = canvas.width= window.innerWidth;
const height = canvas.height= window.innerHeight;
const ctx= canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,width,height);


// // ejemplos de rectangulos
// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50,50,100,150);
// ctx.fillStyle =("rgb(0,255,0");
// ctx.fillRect(75,75,100,100);
// ctx.fillStyle=("rgba(0,0,255,0.75)");
// ctx.fillRect(25,100,175,50)
// ctx.fillStyle=("rgba(255,0,255,0.25)");
// ctx.fillRect(100,125,175,50)
// ctx.lineWidth = 5
// ctx.strokeStyle ="rgb(255,255,255)";
// ctx.strokeRect(25,25,175,200)




//dibuja triangulo
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
 ctx.lineWidth = 5
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
console.log(triHeight)
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();



// dibuja circulo
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();




//dibuja pacman
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }