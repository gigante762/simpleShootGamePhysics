class Enemi{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.size = random(10,70)
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    //reset acc
    this.acc.x = 0;
    this.acc.y = 0;
  }
  
  show(){
    fill(255,30,27)
    strokeWeight(0);
    ellipse(this.pos.x, this.pos.y,this.size)
  }
}