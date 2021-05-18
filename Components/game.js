class Game{
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      home = new Home();
      home.display();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    } else{
      console.log("Room full! Try again later.");
    }
    
  }

  play(){
    Player.getPlayerInfo();
    home.hideForGame();
    
    if(allPlayers !== undefined){
      background("#C68767");
      image(battlegroundImage, 0, 0, windowWidth, windowHeight);

      var index = 0;

      for(var plr in allPlayers){
        index = index + 1;

        if (index === player.index){
          noFill();
          strokeWeight(10);
          stroke("red");
          ellipse(x, y, 120, 120);
        }
      }
    } 
  }
}