class Missil{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.size = 10;
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }
  
  
  show(){
    push()
    translate(this.pos.x, this.pos.y);
    
    rotate(this.vel.heading())
    strokeWeight(1);
    fill(198, 154, 31)
    triangle(0-this.size/3, 0-this.size/3, 0-this.size/3, 0+this.size/3, this.size,0)
    
    pop()
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    //reset acc
    this.acc.x = 0;
    this.acc.y = 0;
    
    
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  setVel(vector){
    this.vel.x = vector.x
    this.vel.y = vector.y
  }
  
  
}