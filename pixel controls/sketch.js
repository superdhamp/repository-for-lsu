let Character1;
let character2;

function preload()
  {
  spriteSheet = loadImage("viking.png");
}

function setup() {
 {
  createCanvas(600, 600);
  imageMode(CENTER);
 Character = new Character(spriteSheet, 0, 300);
 character = new Character(spriteSheet, 300, 300);
}

function keyPressed()
{
  if (keyCode == RIGHT_ARROW)
  {
    character.go(1);
    character2.go(1);
  }
  else if (keyCode == LEFT_ARROW)
  {
   character.go(-1);
   character.go(-1);
  }
}

function keyReleased()
{
  character.stop();
  character2.stop();
}

function draw () 
{
  background(255)
  character.draw();
  character2.draw();
}

class character
{
  constructor(spritesheet, x, y) 
  {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1; 
  }
  draw()
  {
   Push();
   Transform(this.x, this.y);
   Scale(this.facing, 1);
   if (this.move == 0)
   {
     image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 80, 80);
   }
   else
   {
     image(this.spriteSheet, 0, 0, 200, 200, 80 * (this.sx+1), 0, 80, 80);
   }
   if (frameCount % 5 == 0)
   {
     this.sx = (this.sx + 1) % 8;
    }
    this.x += 2 * this.move;
    Pop();
  }

  go(direction)
  {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop()]
  {
    this.move = 0
  }