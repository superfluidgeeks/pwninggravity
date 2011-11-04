function init(){
    instructions=new Instructions();
    instructions.show();
    mapManager=new MapManager();
    scene=new Scene();
    logger=new Logger();
    logger.loglevel=0;
    hud=new HUD();
    game=new Game();
    map=new Map();
    player=new Player();
}
app=new App();
function App(){
    this.width=null;
    this.height=null;
    this.canvas=null;
    this.ctx=null;
    this.touch=false;
    this.debug=false;
}
App.prototype.init=function(){ 
    this.width=window.innerWidth;
    this.height=window.innerHeight;
    document.getElementById("body").innerHTML="<div id='left' class='controller' onMouseDown='if(app.touch)player.left=true;' onMouseUp='if(app.touch)player.left=false;' ></div><div id='rotate' class='controller' onclick='if(app.touch)player.rotate();'></div><div id='right' class='controller' onMouseDown='if(app.touch)player.right=true;' onMouseUp='if(app.touch)player.right=false;' ></div><canvas id='canvas' width='"+this.width+"' height='"+this.height+"'>Your browser does not support the canvas tag</canvas>";
    this.canvas=document.getElementById("canvas");
    this.ctx=this.canvas.getContext("2d");
    game.fps=50;
	game.currentLevel="Level1";
    mapManager.init();
    map.loadLevel("Level1");
    map.init();
    player.init();
    this.run();
}
App.prototype.run=function(){
	game.start(); 
}
init();
window.onresize=function(){
    //map.resize();
}

//app.init();

