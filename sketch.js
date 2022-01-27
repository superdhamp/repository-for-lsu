function setup() {
  createCanvas(1200, 800);
  strokeWeight(20);
  background(255)
  brushColor = color(0);


}

function draw() {
  if (mouseIsPressed) {
    if (mouseX <= 50) {
      if (mouseY <= 50) {
        brushColor = color(0, 0, 255);
      } else if (mouseY <= 100) {
        brushColor = color(66, 244, 194);
      } else if (mouseY <= 150) {
        brushColor = color(255, 0, 199);
      } else if (mouseY <= 200) {
        brushColor = color(249, 99, 0);
      } else if (mouseY <= 250) {
        brushColor = color(255, 22, 26);
      } else if (mouseY <= 300) {
        brushColor = color(242, 255, 0);
      } else if (mouseY <= 350) {
        brushColor = color(0, 137, 9);
       } else if (mouseY <= 400) {
        brushColor = color(0, 0, 0);
      } else if (mouseY <= 450) {
        brushColor = color(300, 300, 300);
      }
    }
    stroke(brushColor)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //noStroke();
  //start coding for your color squares here!
  stroke(color(0));
  fill(0, 0, 255);
  rect(0, 0, 50, 50);
  fill(66, 244, 194);
  rect(0, 50, 50, 50);
  fill(255, 0, 199);
  rect(0, 100, 50, 50);
  fill(249, 99, 0);
  rect(0, 150, 50, 50)
  fill(255, 22, 26);
  rect(0, 200, 50, 50);
  fill(242, 255, 0);
  rect(0, 250, 50, 50);
  fill(0, 138, 9);
  rect(0, 300, 50, 50);
  fill(0, 0, 0);
  rect(0, 350, 50, 50);
  fill(300, 300,300);
  rect(0, 400, 50, 50);
  
  print(brushColor)

}