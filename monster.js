class Monster{
    constructor(x, y) {
        var options = {
          //isStatic:true,
            'frictionAir':0.005,
            'density': 0.5,
            "friction":0.5
        }
        this.body = Bodies.circle(x, y,20,options);
        this.diameter = 20;
        //this.height = height;
        this.image = loadImage("images/Monster-02.png");
        //this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill("black");
        imageMode(CENTER);
        image(this.image, 0,0, this.diameter);
        pop();
      }
}