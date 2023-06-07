// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const parrafo = document.querySelector('.puntos')
const width = canvas.width =  window.innerWidth;
const height = canvas.height = window.innerHeight;
//entre 5 y 10 

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{

    constructor(x,y,velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.exists= true;
    }
    draw(){
      corazon(this.x,this.y,this.color)
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        // ctx.fill();
    }

    update(){
      if((this.x + this.size) >= width){
        this.velX = -(this.velX);
      }
      if((this.x- this.size) <=0){
        this.velX = -(this.velX);
      }
      if((this.y + this.size) >= height){
        this.velY = -(this.velY);
      }
      if((this.y - this.size) <= 0){
        this.velY = -(this.velY);
      }
      this.x += this.velX;
      this.y +=this.velY;
    
    }
    collisionDetect(){
      for(const ball of balls){
        if(!(this === ball) && ball.exists){
          const dx = this.x-ball.x;
          const dy = this.y-ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if(distance<this.size+ball.size){
            ball.color=this.color = randomRGB();
          }
        }
      }
    }

}
class Shape extends Ball{
  constructor(x,y,velX, velY){
    super(x,y,velX,velY);
   
    this.size=20
    
    
  
  }

}
class EvilCircle extends Shape{
  constructor(x,y){
    super(x,y,20,20)

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
    window.addEventListener("mousedown", (e) => {
      switch (e.target.id) {
        case "btnIzquierda":
          this.x -= this.velX;
          break;
        case "btnDerecha":
          this.x += this.velX;
          break;
        case "btnArriba":
          this.y -= this.velY;
          break;
        case "btnAbajo":
          this.y += this.velY;
          break;
      }
    });
  }
  
  draw(){
   
    ctx.beginPath();
    ctx.lineWidth= 3
    ctx.strokeStyle = "white";
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
   
}
update(){
  if((this.x + this.size) >= width){
    this.x = -(this.x);
  }
  if((this.x- this.size) <=0){
    this.x = -(this.x);
  }
  if((this.y + this.size) >= height){
    this.y = -(this.y);
  }
  if((this.y - this.size) <= 0){
    this.y = -(this.y);
  }


}
collisionDetect(){
  for(const ball of balls){
    if(ball.exists){
      const dx = this.x-ball.x;
      const dy = this.y-ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if(distance<this.size+ball.size){
        ball.exists = false;
      }
    }
  }
}
  
}
const balls = [];

while (balls.length < 100){
  const size = random(30,30);
  const velocidad=30;
  const ball = new Ball (
    random(0+size, width-size),
    random(0+size,height-size),
    random(-velocidad,velocidad),
    random(-velocidad,velocidad),
    randomRGB(),
    size
  );
  balls.push(ball);
 
}
const evil = new EvilCircle(
 
  this.x=random(0+20, width-20),
 this.y= random(0+20,height-20),


)

function loop(){
  
   ctx.fillStyle = "rgba(0,0,0,0.25)";

   ctx.fillRect(0,0, width, height);
   
  evil.draw();

evil.update();
evil.collisionDetect();
let suma=0
  for(const ball of balls){
    if (ball.exists===true){
      suma++;
    ball.draw();
    ball.update();
   // ball.collisionDetect();
  }
  }
  if (suma===0){
   alert(`♥♥♥ GANASTE MI CORAZON ♥♥♥`)
  
   for(const ball of balls){
        ball.exists=true
        const size = random(30,30);
        ball.exists.x=  random(0+size, width-size)
        ball.exists.y= random(0+size,height-size)
        evil.x=random(0+size, width-size)
        evil.y= random(0+size,height-size)

  }
  }
     
     // ball.collisionDetect();
    
    

  parrafo.innerText='Corazones: '+suma;
  requestAnimationFrame(loop);
}

loop();

function corazon(x,y,color) {
  
 

    // Ejemplo de curvas cúbicas
    ctx.beginPath();
    ctx.fillStyle =color;
    ctx.moveTo(x, y);
    const div= 2
    ctx.bezierCurveTo((x), y-3/div,x-5/div, y-15/div, x-25/div,y-15/div);
    ctx.bezierCurveTo(x-55/div, y-15/div, x-55/div, y+22.5/div, x-55/div, y+22.5/div);
    ctx.bezierCurveTo(x-55/div, y+40/div, x-35/div, y+62/div, (x), y+80/div);
    ctx.bezierCurveTo(x+35/div, y+62/div, x+55/div, y+40/div,x+55/div, y+22.5/div);
    ctx.bezierCurveTo(x+55/div, y+22.5/div,x+55/div, y-15/div, x+25/div, y-15/div);
    ctx.bezierCurveTo(x+10/div, y-15/div, (x), y-3/div, (x), (y));
    ctx.fill();
  }

function fondo(){
  var b = document.body;


e = [];
h = [];

v = 32 + 8 + 2;
R = Math.random;
C = Math.cos;
Y = 10;

for (i = 0; i < Y; i += 0.2)
  h.push([width / 2 + 210 * Math.pow(Math.sin(i), 3),
    height / 2 + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))
  ]);

for (i = 0; i < Y; i += 0.2)
  h.push([width / 2 + 150 * Math.pow(Math.sin(i), 3),
  height / 2 + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))
  ]);

for (i = 0; i < Y; i += 0.8)
  h.push([width / 2 + 90 * Math.pow(Math.sin(i), 3),
  height / 2 + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))
  ]);

for (i = 0; i < v;) {
  x = R() * width;
  y = R() * height;
  H = 80 * (i / v) + Math.random * 100;
  S = 40 * R() + 60;
  B = 60 * R() + 20;
  f = [];
  for (k = 0; k < v;) f[k++] = {
    x: x,
    y: y,
    X: 0,
    Y: 0,
    R: 1 - k / v + 1,
    S: R() + 1,
    q: ~~(R() * v),
    D: 2 * (i % 2) - 1,
    F: 0.2 * R() + 0.7,
    //f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,1)"
    //f: "hsla(0, 100%, 50%, 1)"
    f: "hsla(" + ~~H + "," + ~~S + "%,"+ (~~B + 10) +"%,1)"
  };
  e[i++] = f
}

function path(d) {
  ctx.fillStyle = d.f;
 ctx.beginPath();
  ctx.arc(d.x, d.y, d.R, 0, Y, 50);
  ctx.closePath();
  ctx.fill()
}
var grd = ctx.createLinearGradient(0, 0, width, height);
grd.addColorStop(0, 'rgb(71,164,239)');
grd.addColorStop(1, 'rgb(233,9,244)');
setInterval(function() {
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);
  for (i = v; i--;) {
    f = e[i];
    u = f[0];
    q = h[u.q];
    D = u.x - q[0];
    E = u.y - q[1];
    G = Math.sqrt(D * D + E * E);
    10 > G && (0.95 < R() ? u.q = ~~(R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
    u.X += -D / G * u.S;
    u.Y += -E / G * u.S;
    u.x += u.X;
    u.y += u.Y;
    path(u);
    u.X *= u.F;
    u.Y *= u.F;
    for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
  }
}, 25);
}
let tabla = document.querySelector('table');
tabla.setAttribute("style", `top: ${height-200}px; right: ${width/3}px;`)

