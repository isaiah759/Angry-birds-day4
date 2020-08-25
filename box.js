class Box {
  //create the constructor
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    //create the objects with bodies
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
     //give the position
    var pos =this.body.position;
    var angle=this.body.angle;
    //to start the function of angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);

    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    rect(0, 0, this.width, this.height);
    //to end the angle function
    pop();

  }
};
