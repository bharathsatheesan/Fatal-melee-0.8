class Player {
  constructor(){
    this.index = null;
    this.character = 1;
    this.name = null;
    this.rank = null;
    this.totalPlayers = 0;
    this.x = 100;
    this.y = 100;
    this.isHitting = false;
    this.health = 200;
    this.kills = 0;
    this.damage = 0;
    this.angle = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      character:home.name[this.character-1],
      x:this.x,
      y:this.y,
      isHitting:this.isHitting,
      health:this.health,
      kills:this.kills,
      damage:this.damage,
      angle:this.angle
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
