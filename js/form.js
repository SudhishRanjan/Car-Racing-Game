class Form{
    constructor(){this.input=createInput("name")
    this.button=createButton('play')
    this.greeting=createElement('h3')
    this.reset=createButton('reset')

}
    
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        this.reset.position(displayWidth-100,20)
        title.position(displayWidth/2-50,0)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            playerCount+=1
            player.index=playerCount;
            player.name=this.input.value()
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
        })
        

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}