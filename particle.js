class particle {
    constructor(x,y,radius) {
     var options{
         isStatic = true
     }
      this.body = Bodies.circle(x,y,width,height,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.color= color(random(0,255),(random(0,255),(random(0,255))
      rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
  };