function Player(){
    this.x=100;
    this.y=100;
    this.height=32;
    this.width=32;
    this.img=new Image();
	this.mainSpeed=5;
    this.speed=this.mainSpeed;
	this.speedIncrease=0;
    this.up=false;
    this.right=false;
    this.left=false;
    this.down=false;
    this.angle=0;
    this.inventory=new Array();
    this.hasKey=false;
    this.spriteX=0;
    this.spriteY=32;
    this.spriteResX=32;
    this.spriteResY=32;
    this.gravityTimer=100;
    this.totalGravityTimer=100;
	this.gravityTimerfactor=1;
    this.finish=false;
    this.life=3;
	this.damageCooldownMax=100;
	this.damageCooldown=this.damageCooldownMax;
}
    Player.prototype.init=function(){
		try{
			this.img.src="./gfx/player/spriteNew.png";
			this.x=map.startPointX;
			this.y=map.startPointY;
			this.spriteResY>map.resolutionY;
			this.spriteResX=map.resolutionX;
			this.hasKey=false;
			this.angle=0;
			map.physicDir="down";
			return true;
		}catch(excp){
			return false;
		}
    }

    Player.prototype.update=function(){
		if(!((this.x>0&&this.x<app.width)&&(this.y>0&&this.y<app.height))||this.isInTrap()){
			this.life--;
			if(this.life<=0){
				game.gameOver();
			}else{
				game.restartLevel();
			}
		}
		
        if(this.right&&!this.collides("right",this.speed)){
			this.x+=this.speed;
			this.speed+=this.speedIncrease;
			if(map.physicDir=="down")this.spriteY=32;
			if(map.physicDir=="up")this.spriteY=0;
			if(this.spriteX==0)this.spriteX=32;
			else if(this.spriteX==32)this.spriteX=64;
			else if(this.spriteX==64)this.spriteX=0;
		}
		if(this.left&&!this.collides("left",this.speed)){
			this.x-=this.speed;
			this.speed+=this.speedIncrease;
			if(map.physicDir=="down")this.spriteY=0;
			if(map.physicDir=="up")this.spriteY=32;
			if(this.spriteX==0)this.spriteX=32;
			else if(this.spriteX==32)this.spriteX=64;
			else if(this.spriteX==64)this.spriteX=0;
		}
		
		if(this.collides("left",this.speed))this.speed=this.mainSpeed;
		else if(this.collides("right",this.speed))this.speed=this.mainSpeed;
		else if(this.collides("down",this.speed))this.speed=this.mainSpeed;
		else if(this.collides("up",this.speed))this.speed=this.mainSpeed;
		

		if(map.physicDir=="down"&&!this.collides("down",this.speed)){
			this.speed+=this.speedIncrease;
			this.y+=this.speed;
		}
		if(map.physicDir=="up"&&!this.collides("up",this.speed)){
			this.speed+=this.speedIncrease;
			this.y-=this.speed;
		}
		if(map.physicDir=="up"){
			this.gravityTimer-=this.gravityTimerfactor;
		}
		if(map.physicDir=="down"&&this.gravityTimer<this.totalGravityTimer){
			this.gravityTimer+=this.gravityTimerfactor;
		}
		if(this.gravityTimer<=0){
			map.physicDir="down";
			this.angle=0;
		}
		
		if(this.canTakeItem()){
			game.score++;
			logger.debug("+1 score");
			scene.newItemText("+1 Score",this.x+map.resolutionX/2,this.y,20,"rgba(200,200,200,1)");
			scene.newSmoke(this.x+map.resolutionX/2,this.y,25,"rgba(200,216,1,0.1)",10,1,500,true,20);
		}
		if(this.canTakeKey()){
			this.inventory.push("key");
			logger.debug("Key found");
			scene.newItemText("Key found",this.x+map.resolutionX/2,this.y,20,"rgba(200,200,200,1)");
			scene.newSmoke(this.x+map.resolutionX/2,this.y,25,"rgba(200,216,1,0.1)",10,1,500,true,20);
			this.hasKey=true;
			map.openDoor();
		}
		if(this.isInFinishArea()){   
			game.nextLevel();
			this.angle=0;
		}
		this.isInFinishArea();
		this.draw();
	}
	Player.prototype.isInTrap=function(){
		var x=Math.round(this.x/map.resolutionX);
		var y=Math.round(this.y/map.resolutionY);
		if(map.mapArray[y][x]==scene.obstacle.trap.object){
			return true;
		}
		return false;
	}
	Player.prototype.levelCompletedAnimation=function(){
       this.spriteX=96;
       if(this.spriteY==0)this.spriteY=32;
       else if(this.spriteY==32)this.spriteY=64;
       else if(this.spriteY==64)this.spriteY=0;
       if(!this.collides("down",this.speed))this.y+=this.speed;
       this.draw();
	}
	Player.prototype.canTakeItem=function(){
		var x=Math.round(this.x/map.resolutionX);
		var y=Math.round(this.y/map.resolutionY);
		if(map.mapArray[y][x]==scene.obstacle.coin.object){
			map.clearPosition(x,y);
			return true;
		}
		return false;
	}
   Player.prototype.isInFinishArea=function(){
		var x=Math.round(this.x/map.resolutionX);
		var y=Math.round(this.y/map.resolutionY);
		if(map.mapArray[y][x]==scene.obstacle.finish.object&&this.hasKey){
			return true;
		}
		return false;
	}
	Player.prototype.canTakeKey=function(){
		var x=Math.round(this.x/map.resolutionX);
		var y=Math.round(this.y/map.resolutionY);
		if(map.mapArray[y][x]==scene.obstacle.key.object){
			map.clearPosition(x,y);
			return true;
		}
		return false;
	}
   //check if currently is colliding
   Player.prototype.collides=function(dir,speed){
		var direction =dir;
		var vy=0;
		var vx=0;        
		if(direction=="down")vy=speed;
		else if(direction=="up")vy=speed*-1;
		else if(direction=="left")vx=speed*-1;
		else if(direction=="right")vx=speed;        
		for(var y=0;y<map.mapArray.length;y++){
			for(var x=0;x<map.mapArray[y].length;x++){
				if(map.canObjectCollide(map.mapArray[y][x])){
					if((((this.x+vx)+map.resolutionX > x*map.resolutionX)&&((this.x+vx)<(x*map.resolutionX+map.resolutionX)))&&
					   (((this.y+vy)+map.resolutionY > y*map.resolutionY)&&((this.y+vy)<(y*map.resolutionY+map.resolutionY)))){
						return true;                   
					}
				}
			}
		} 
		return false;
	}
   //draw player
   Player.prototype.draw=function(){
		app.ctx.fillRect(this.x,this.y,map.resolutionX, map.resolutionY);
		app.ctx.save();
		app.ctx.translate(this.x+map.resolutionX/2, this.y+map.resolutionY/2); 
		app.ctx.rotate(this.angle * Math.PI/180);
		app.ctx.drawImage(this.img, this.spriteX, this.spriteY, this.width, this.height, -map.resolutionX/2, -map.resolutionY/2, this.spriteResX, this.spriteResY);
		app.ctx.restore();
   }
   Player.prototype.rotate=function(){
		if(map.physicDir=="down"&&this.gravityTimer==this.totalGravityTimer){
			map.physicDir="up";
			this.angle=180;
			game.countGravityChanges++;
		}else if(map.physicDir=="up"){
			map.physicDir="down";
			this.angle=0;
		}else{
			hud.history.push("Your gravityengine is currently not ready!");
		}
	}
$(document).keydown(function(e) {
	var key = e.which;    
   if(key == 65)player.left=true;
   if(key == 68)player.right=true;
});
$(document).keyup(function(e) {
   var key = e.which;    
   if(key == 65)player.left=false;//a
   if(key == 68)player.right=false;//d
   if(key == 87)player.rotate();//w
});