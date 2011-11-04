var Map={
    //y24 x28
    resolutionY:null,
    resolutionX:null,
    sprite:new Image(),
    mapArray:[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    init:function(){
        this.resolutionY=Math.round(app.height/this.mapArray.length);
        this.resolutionX=Math.round(app.width/this.mapArray[0].length);
        setInterval("map.draw();",1000/24);
        this.sprite.src=this.obstacle.spriteSrc;

    },
    makeBorder:function(){
        for(var x=0;x<this.mapArray[0].length;x++){
            this.mapArray[0][x]=1;
        }
        for(var x=0;x<this.mapArray[0].length;x++){
            this.mapArray[this.mapArray.length-1][x]=1;
        }
        for(var y=0;y<this.mapArray.length;y++){
            this.mapArray[y][0]=1;
        }
        for(var y=0;y<this.mapArray.length;y++){
            this.mapArray[y][this.mapArray[0].length-1]=1;
        }
    },
    obstacle:{
	block:{object:1,spriteX:64,spriteY:0},
	key:{object:3,spriteX:64,spriteY:64},
	door:{object:4,spriteX:128,spriteY:0},
	exitShield:{object:6,spriteX:192,spriteY:0},
	wires:{object:7,spriteX:256,spriteY:0},
	coin:{object:8,spriteX:0,spriteY:64},
	block2:{object:9,spriteX:0,spriteY:0},
	
	startPos:{object:2},
	finish:{object:5},
	spriteSrc:"../gfx/map/mapSrite.png"
    },
    draw:function(){
        app.ctx.clearRect(0, 0, app.width, app.height);
        app.ctx.fillStyle = "rgba(50,50,100,0.8)";
        app.ctx.fillRect(0,0,app.width, app.height);
        document.getElementById("selected").innerHTML=mouse.selectedObject;
        for(var y=0;y<this.mapArray.length;y++){
            for(var x=0;x<this.mapArray[y].length;x++){
                //app.ctx.fillStyle = "rgba(200,200,200,0.8)";
                //app.ctx.fillRect(x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);        
                if(this.mapArray[y][x]==this.obstacle.block.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.block.spriteX, this.obstacle.block.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.key.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.key.spriteX, this.obstacle.key.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.door.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.door.spriteX, this.obstacle.door.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.exitShield.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.exitShield.spriteX, this.obstacle.exitShield.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.wires.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.wires.spriteX, this.obstacle.wires.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.coin.object){
                    app.ctx.drawImage(this.sprite, this.obstacle.coin.spriteX, this.obstacle.coin.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.startPos.object){
                    app.ctx.fillStyle = "rgba(100,200,100,0.8)";
                    app.ctx.fillRect(x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
                if(this.mapArray[y][x]==this.obstacle.finish.object){
                    app.ctx.fillStyle = "rgba(200,100,100,0.8)";
                    app.ctx.fillRect(x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
                }
				if(this.mapArray[y][x]==this.obstacle.block2.object){
					app.ctx.drawImage(this.sprite, this.obstacle.block2.spriteX, this.obstacle.block2.spriteY, 64, 64, x*this.resolutionX, y*this.resolutionY, this.resolutionX, this.resolutionY);
				}
            }
        this.drawHover();

        }
    },
    printMap:function(){
        var name=document.getElementById("name").value;

        var result="var "+name+"={";
        result+="<br>name:\'"+name+"\	',";
        result+="<br>mapArray:[<br>";

        for(var y=0;y<this.mapArray.length;y++){
            result+="[";
            for(var x=0;x<this.mapArray[y].length;x++){
                result+=this.mapArray[y][x]+",";
            }
            result+="],<br>";
            result=result.replace(",]","]");
        }
        result+="],collidingObjects:[1,4]<br>}";
        result=result.replace("],<br>]","]<br>]");
        document.getElementById("can").innerHTML=result;
        return result;
    },
    commit:function(){
        //document.getElementById("can").innerHTML=" <?php $map='"+this.printMap()+"';
        //window.location
    },
    drawHover:function(){
        var x=Math.round(mouse.x/this.resolutionX);
        var y=Math.round(mouse.y/this.resolutionY);
        app.ctx.fillStyle = "rgba(100,200,100,0.2)";
        app.ctx.fillRect(x*this.resolutionX,y*this.resolutionY, this.resolutionX, this.resolutionY);
        document.getElementById("position").innerHTML=mouse.x+"/"+mouse.y+" - "+x+"/"+y;
    }
}