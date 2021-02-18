class Drops{
    constructor(x,y,r){
        var options = {
            friction: 0.1,
            restitution: 0.1,
            isStatic: false,
            density: 9
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}