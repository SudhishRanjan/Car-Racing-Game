class Game{
    constructor(){
    
    }
  getState(){
      var gameStateref=database.ref('gameState')
      gameStateref.on("value",function(data){
          gameState=data.val()
      })
      

}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState===0){player=new Player()
        var playerCountRef=await database.ref('playerCount').once("value")
        if(playerCountRef.exists){
            playerCount=playerCountRef.val()
            player.getCount()
        }
    
    form=new Form()
    form.display()

    }
    car1=createSprite(100,200);
    car1.addImage("car1",car1Img)
    car2=createSprite(300,200);
    car2.addImage("car2",car2Img)
    car3=createSprite(500,200);
    car3.addImage("car3",car3Img)
    car4=createSprite(700,200);
    car4.addImage("car4",car4Img)
    cars=[car1,car2,car3,car4];
}
play(){
    form.hide()
    textSize(30)
    text("GAME STARTS",120,100)
    Player.getPlayersInfo()
    if(allPlayers!=undefined)
    {var displayPosition=130
        background(groundImg)
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0,x=100,y=0
   for (var plr in allPlayers){
      index=index+1
      x=x+200
      y=displayHeight-allPlayers[plr].distance
      cars[index-1].x=x
      cars[index-1].y=y
      if(index===player.index){
          cars[index-1].shapeColor="red"
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
      }
   }
    }
    if(keyIsDown(UP_ARROW)&&player.distance<4000){
        player.distance+=50
        player.update()
    }
    if(player.distance>3860){
        gameState=2
    }
    drawSprites()
        
}
end(){
    console.log("game ends")
}
}