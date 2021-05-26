class spaceship{
    constructor(){
this.body=Bodies.rectangle(300,400,30,30);
World.add(world,this.body);
this.image=loadImage("Spaceship.png");
    }
    display(){
image(this.image,300,400,120,100);
    }
}
