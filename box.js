class Box {
    constructor (x,y,w,h) {
     var options = {
     density:0.04,
     restitution:0.8,
     friction:1.0
     }
     this.body = Bodies.rectangle(x,y,w,h,options)   
     this.w = w
     this.h = h
     World.add(world,this.body)
    }
    display(){
    var angle = this.body.angle
    push()
    stroke("red")
    strokeWeight(4)
    fill("green")
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    
    
    }
    }
    