class Chain{
    constructor(A,B){
   
        var options = {
            bodyA : A,
            bodyB : B,
            stiffness : 0.04,
            length : 10
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    display(){

        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);

    }

}