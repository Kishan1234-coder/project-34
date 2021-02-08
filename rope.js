class Rope {
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 1.2,
            length: 250
        }
        
        this.rope = Constraint.create(options);

        

        World.add(world,this.rope);
        
        
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(bodyA){
        this.rope.bodyA = bodyA;
    }

    
    display(){
         
        
      

        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        
        push();
        //stroke(48,22,8);
         //strokeWeight(4);
         //line(pointA.x,pointA.y,pointB.x,pointB.y);
        

        pop();

        }
    }   
}



