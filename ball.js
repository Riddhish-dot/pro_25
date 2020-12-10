class Ball{
    constructor(x,y,r){
        var options = {
            resistution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        strokeWeight(3)
        fill("pink")
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}