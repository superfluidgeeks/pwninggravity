function HUD(){
    this.history=new Array();
}
HUD.prototype.pendulum=function(x,y,angle){
    app.ctx.fillStyle = "rgba(200,200,200,0.5)";
    app.ctx.font = "bold 10pt Courier";
    app.ctx.fillText("Gravitiy ",x-30,y-20);
    app.ctx.fillText("Flips: "+game.countGravityChanges,x-30,y-30);
    app.ctx.save();
    app.ctx.translate(x,y);
    app.ctx.rotate(angle * Math.PI/180);        
    app.ctx.strokeStyle = "rgba(255,255,255,0.5)";
    app.ctx.lineWidth=4;
    app.ctx.lineCap="round";        
    app.ctx.beginPath();
    app.ctx.moveTo(0, 0);
    app.ctx.lineTo(0, 20);
    app.ctx.lineTo(20, 0);
    app.ctx.lineTo(0,0);
    app.ctx.stroke();
    app.ctx.closePath();        
    app.ctx.restore();
}
HUD.prototype.clearHistory=function(){
    this.history=new Array();
}
HUD.prototype.life=function(){
	for(var i=0;i<player.life;i++){
		app.ctx.fillStyle = "rgba(200,100,100,0.5)";
		app.ctx.fillRect(app.width-150-(i*40),app.height-100, 30, 30);
	}
}
HUD.prototype.levelCompletedShow=function(){
    app.ctx.fillStyle = "rgba(200,200,200,0.8)";
    app.ctx.font = "bold 50pt Courier";
    app.ctx.fillText("Level succeed",app.width/2-300, app.height/2-50);
}
HUD.prototype.showFPS=function(dateDiff){
    app.ctx.fillStyle = "rgba(200,200,200,0.8)";
    app.ctx.font = "bold 25pt Courier";
    app.ctx.fillText("FPS: "+Math.round(dateDiff),150, 150);
}
HUD.prototype.showScores=function(){
    app.ctx.fillStyle = "rgba(200,200,200,0.8)";
    app.ctx.font = "bold 25pt Courier";
    app.ctx.fillText("Score: "+game.score,app.width/2, 100);
}
HUD.prototype.showBigMessage=function(msg){
    app.ctx.fillStyle = "rgba(200,200,200,0.8)";
    app.ctx.font = "bold 50pt Courier";
    app.ctx.fillText(msg,app.width/2-msg.length, app.height/2-50);
}
HUD.prototype.gravityTimer=function(){  
    app.ctx.beginPath();
    app.ctx.strokeStyle = "rgba(100,200,100,0.8)";
    app.ctx.arc(player.x+map.resolutionX/2, player.y+map.resolutionY/2, 50, 0, player.gravityTimer/15, false);
    app.ctx.lineWidth = 10;
    app.ctx.stroke(); 
    app.ctx.closePath();      
}
HUD.prototype.showHistory=function(){
    //app.ctx.fillStyle = "rgba(100,100,100,0.5)";
    //app.ctx.fillRect(40,50,600, 220);
    app.ctx.fillStyle = "rgba(200,200,200,0.8)";
    app.ctx.font = "bold 18pt Courier";
    var x=50;
    var y=75;
    if(this.history.length>10){
        for(var i=this.history.length-10;i<this.history.length;i++){  
            app.ctx.fillText("$>"+this.history[i],x,y);
            y+=20;
        }
    }else{
        for(var i=0;i<this.history.length;i++){  
            app.ctx.fillText("$>"+this.history[i],x,y);
            y+=20;
        }
    }
}