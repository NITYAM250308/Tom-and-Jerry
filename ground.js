class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true
          }
          this.ground = Bodies.rectangle(x,y,width,height,options)
          this.width=width
          this.height=height
          this.image=loadImage("garden.png")
          World.add(world,this.ground);
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}