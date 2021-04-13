class birds extends Basedesign {
    constructor(x, y) {
      super(x,y,50,50)
      this.image = loadImage("sprites/bird.png")
      this.smokeimage = loadImage("sprites/smoke.png")
      this.path = []
    };
    display(){
      
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();

      if(this.body.velocity.x > 10 && this.body.position.x > 200)
      {
        var bird_position =[this.body.position.x,this.body.position.y]
        this.path.push(bird_position)
      }


for (var index = 0; index < this.path.length; index++) {
  image(this.smokeimage,this.path[index][0],this.path[index][1])
  
}
    };
  };
  