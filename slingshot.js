class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.s1=loadImage("sprites/sling1.png")
        this.s2=loadImage("sprites/sling2.png")
        this.s3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }


    display(){
        image(this.s1,200,20)
        image(this.s2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;


                strokeWeight(7);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                image(this.s3,pointA.x+25,pointA.y-10,25,20)
            
           
            stroke(48,22,8)
           

        }
    }
}