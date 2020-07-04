class Paper {
    constructor(x, y,width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
          //opacity:100          
      }
      
      this.body = Matter.Bodies.circle(x, y, 15, options);
      this.width = 25;
      this.height = 25;
      //this.radius = radius;
      this.image = loadImage("paper.png");
      //this.opacity = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(250);
      noStroke();
      ellipse(0,0,this.width,this.height);

      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };