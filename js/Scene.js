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
        game.smokePoint.push(smoke);    