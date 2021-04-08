class SlingShot {

    constructor(bodyA, pointB) {

        var options = {

            bodyA: ball.body, pointB: pointB, stiffness: 1, length: 150
        
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    attach(body) {

        this.sling.bodyA = body;

    }

    display() {


        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(48,22,8);

            push();

            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);

            pop();

        }

    }

}