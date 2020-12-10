class Bin{
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    } 
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    this.image = loadImage("sprites/dustbingreen.png")
    World.add(world,this.image)
    }
    display(){
    imageMode(CENTER)
    //fill(255,0,0)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}