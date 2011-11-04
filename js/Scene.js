function Scene(){
	this.collidingObjects=[1,4,9];
	this.traps=[10];
}
    Scene.prototype.initializeSmokePointOnMap=function(){
        for(var y=0;y<map.mapArray.length;y++){
            for(var x=0;x<map.mapArray[y].length;x++){
                if(map.mapArray[y][x]==this.obstacle.block2.object){
                    this.newSmoke(x*map.resolutionX+map.resolutionX,y*map.resolutionY,10,"rgba(100,100,100,0.2)",5,1,200,false,map.resolutionX);
                }
            }
        }
    }
    Scene.prototype.newSmoke=function(x,y,duration,color,speed,lifeSpeed,cubeCount,canDissappear,spread){
        var smoke=new Smoke(x,y,duration,color,speed,lifeSpeed,cubeCount,canDissappear,spread);
		smoke.init();
        game.smokePoint.push(smoke);        }    Scene.prototype.newItemText=function(msg,x,y, duration,color){        var message=new Message(msg,x,y, duration,color)        game.screenMessages.push(message);    }    Scene.prototype.obstacle={		block:{object:1,spriteX:64,spriteY:0},		key:{object:3,spriteX:64,spriteY:64},		door:{object:4,spriteX:128,spriteY:0},		exitShield:{object:6,spriteX:192,spriteY:0},		wires:{object:7,spriteX:256,spriteY:0},		coin:{object:8,spriteX:0,spriteY:64},		block2:{object:9,spriteX:0,spriteY:0},		trap:{object:10,spriteX:320,spriteY:0},				startPos:{object:2},		finish:{object:5},		spriteSrc:"./gfx/map/mapSrite.png"    }