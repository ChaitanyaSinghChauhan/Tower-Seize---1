class Shot {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.02,
        'density':2.3,
        'friction':0.4,
          isStatic: true,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER); 
      image(this.image,pos.x,pos.y,this.width,this.height);
    }
  };