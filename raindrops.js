class Drop {
    constructor(x,y) {
        var options = {
            friction:0
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.body);
    }
    update() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body,{x:random(0, 400),y:random(0, 400)});
        }
    }
    display () {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}