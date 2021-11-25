let shapeArr = [];
let x,y,size;
let xSpeed, ySpeed, xDir, yDir;
let shapey1;
let shapey2;
let circ;

function setup() {
  createCanvas (600,600);
  x = width/2;  //middle
  y = height/2; //centre
  size = 10;
  xSpeed = random(0.3,5);
  ySpeed = random(0.3,5);
  xDir = 1;
  yDir = 1;
  //shapey1 = new MovingShape();
  //shapey2 = new MovingShape();
  for(let i = 0; i < 200; i++) {
    shapeArr.push(new MovingShape(random(0, width), random(0,height),random(1,40)));
  }
  circ = new MovingCircle(random(0, width), random(0,height),random(1,40));
}

function draw() {
  noStroke();
  rectMode(CORNER);
  fill(255,255,255,80);
  rect(0, 0, width, height);
  //shapey1.move();
  //shapey1.display();
  //shapey2.move();
  //shapey2.display();
  circ.move();
  circ.display();
  
  move();
  display();
  for(let i = 0; i < 200; i++) {
    shapeArr[i].move();
    shapeArr[i].display();
  }
}
function move() {
  x = x + (xSpeed * xDir);
  y = y + (ySpeed * yDir);
  if(x > (width-size) || x < size){
             xDir = xDir * -1;

  }
  if(y > (height-size) || y < size){
              yDir = yDir * -1

  }

}
function display() {
  stroke(10);
  rectMode(CENTER);
  fill(0);
  rect(x, y, size, size);

}
class MovingShape {

  constructor(startX, startY, startSize){
    this.x = width/2;  //middle
    this.y = height/2; //centre
    this.size = 10;
    this.xSpeed = random(0.3,5);
    this.ySpeed = random(0.3,5);
    this.xDir = 1;
    this.yDir = 1;
    this.x = startX;
    this.y = startY;
    this.size = startSize;
  }

  move(){
    this.x = this.x + (this.xSpeed * this.xDir);
    this.y = this.y + (this.ySpeed * this.yDir);

    if(this.x > (width-(this.size/2)) || this.x < (this.size/2)){
        this.xDir = this.xDir * -1;
            
    }

    if(this.y > (height-(this.size/2)) || this.y < (this.size/2)){
        this.yDir = this.yDir * -1;
    }

  }

  display(){
    stroke(10);
    rectMode(CENTER);
    fill(0);
    rect(this.x, this.y, this.size, this.size);

  }
}
class MovingCircle extends MovingShape {
  constructor(startX, startY, startSize, colour){
    super(startX,startY,startSize);
    this.colour = color(255,255,0);

  }

  move() {
    super.move();

  }

  display() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size, this.size)

  }
}