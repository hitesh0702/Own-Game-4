class welocome{
    constructor(){
this.title=createElement("h1");
this.input=createInput("").attribute("placeHolder","Enter Your Name Here");
this.button=createButton("Play");
this.greeting=createElement("h2");
    }
    display(){
        background("red");
        this.title.html("SpaceShip Game")
        this.title.position(700,200);
        this.title.style("color","blue")
        this.input.position(700,320);
        this.button.position(700,380)
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input.hide();
            this.button.hide();
            var name=this.input.value();
            
            gameState="Play"
        })
    }
}
