class Block {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.02,
        'density':2.3,
        'friction':0.4,
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width,this.height);
    }
  };