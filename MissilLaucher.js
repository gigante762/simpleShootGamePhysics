class MissilLaucher {
  constructor(x, y) {

    this.pos = createVector(x, y);

    this.fireRate = 1;
    this.size = 80;
    this.missels = [];

    this.aim = createVector(0, 0);
    this.maxForce = 15

  }


  show() {

    fill(255, 70)
    strokeWeight(1)
    stroke(0)
    ellipse(this.pos.x, this.pos.y, this.size)
    ellipse(this.pos.x, this.pos.y, this.size / 10)

  }

  update() {

    let mv = createVector(mouseX, mouseY);

    this.aim = p5.Vector.sub(mv, this.pos).mult(-1).limit(this.size / 2)

    //travar a angulação da mira;
    if (this.aim.y > 0) {
      this.aim.y = 0;
    }


    strokeWeight(5)
    stroke(0)
    line(this.pos.x, this.pos.y, this.pos.x + this.aim.x, this.pos.y + this.aim.y)

    for (let i = 0; i < this.missels.length; i++) {
      this.missels[i].applyForce(G);
      this.missels[i].show();
      this.missels[i].update();
      if (this.missels[i].y < ground) {
        this.missels.splice(i, 1);
      }

    }


  }

  shot() {
    let m = new Missil(this.pos.x, this.pos.y)
    m.setVel(this.aim)
    m.vel.limit(this.maxForce)
    this.missels.push(m)
  }


}