class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(myworld, this.body);
  }
  display(){
    if (this.body.speed <3) {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    } else{
      World.remove(myworld, this.body)
      push();
      this.visibility = this.visibility -5;
      pop();
    }
  }
};