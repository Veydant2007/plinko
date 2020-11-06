class plinko {
    constructor(x,y,radius) {
     
      this.body = Bodies.circle(x,y,width,height);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
  };