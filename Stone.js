class Stone{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.width = 50
        this.height = 50
        this.image = loadImage("polygon.png")
        World.add(myworld, this.body)
        }
        display(){
            push();
        translate(this.body.position.x, this.body.position.y);

        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
}