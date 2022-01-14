let misLaucher;
let G;
let ground = 500;
let enemies;
function setup() {
  createCanvas(700, 500);

  frameRate(60);
  //gravity
  G = createVector(0, 0.2);


  enemies = new Enemi(width-70, height-70);

  misLaucher = new MissilLaucher(50, 350);

  misLaucher.pos.x = misLaucher.size / 2 + 30;
  misLaucher.pos.y = height - misLaucher.size / 2 - 30;

}

function draw() {
  background(25, 87, 200);

  //gound
  fill(8, 107, 49)
  noStroke()
  rect(0, ground - 10, width, height)

  misLaucher.show();
  //handle the missils
  misLaucher.update();


  enemies.update();
  enemies.show();
  for (let j = 0; j < misLaucher.missels.length; j++) {

    if (dist(misLaucher.missels[j].pos.x, misLaucher.missels[j].pos.y, enemies.pos.x, enemies.pos.y) <= enemies.size / 2 || enemies.pos.x + enemies.size / 2 < 0) {
      misLaucher.missels.splice(j, 1);
      enemies.pos.x = random(0+enemies.size/2, width-enemies.size/2);
      enemies.pos.y = random(0+enemies.size/2, height-enemies.size/2);
    }
    

  }
}

function mousePressed() {
  misLaucher.shot()
}



