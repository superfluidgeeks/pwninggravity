var App={
    canvas:null,
    ctx:null,
    width:null,
    height:null,
    init:function(){
        this.width=window.innerWidth;
        this.height=window.innerHeight;
        document.getElementById("body").innerHTML="<div id='contorls'></div><div id='can'><canvas id='canvas' width='"+this.width+"' height='"+this.height+"'></canvas></div>";
        this.canvas=document.getElementById("canvas");
        this.ctx=this.canvas.getContext("2d");
        this.drawControls();
    },
    drawControls:function(){
        var block=map.obstacle.block.object;
        var block = "<span id='block' class='control' onclick='mouse.selectedObject="+block+"'>block</span>";
        var block2=map.obstacle.block2.object;
        var block2 = "<span id='block' class='control' onclick='mouse.selectedObject="+block2+"'>block2</span>";
        var key=map.obstacle.key.object;
        var key = "<span id='key' class='control' onclick='mouse.selectedObject="+key+"'>key</span>";
        var door=map.obstacle.door.object;
        var door = "<span id='door' class='control' onclick='mouse.selectedObject="+door+"'>door</span>";
        var exitShield=map.obstacle.exitShield.object;
        var exitShield = "<span id='exitShield' class='control' onclick='mouse.selectedObject="+exitShield+"'>exitShield</span>";
        var wires=map.obstacle.wires.object;
        var wires = "<span id='wires' class='control' onclick='mouse.selectedObject="+wires+"'>wires</span>";
        var coin=map.obstacle.coin.object;
        var coin = "<span id='coin' class='control' onclick='mouse.selectedObject="+coin+"'>coin</span>";
        var startPos=map.obstacle.startPos.object;
        var startPos = "<span id='startPos' class='control' onclick='mouse.selectedObject="+startPos+"'>startPos</span>";
        var finish=map.obstacle.finish.object;
        var finish = "<span id='block' class='control' onclick='mouse.selectedObject="+finish+"'>finish</span>";
        var clear = "<span id='block' class='control' onclick='mouse.selectedObject=0'>clear</span>";
        document.getElementById("contorls").innerHTML="Name: <input type='text' id='name' name='name'/><button onclick='map.printMap();'>Save</button><button onclick='app.reload();'>Clear</button><button onclick='window.location=\"../\"'>Game</button><br>"+block+"   "+block2+"   "+key+"   "+door+"   "+exitShield+"   "+wires+"   "+coin+"   "+startPos+"   "+finish+"   "+clear+"   <span id='makeBorder' onclick='map.makeBorder()'>Make Border</span><br>Selected <span id='selected'></span>   Position <span id='position'></span><br><button onclick='map.commit();'>Commit</button>";
    },
    reload:function(){
        window.location="./index.html";
    }
}
function init(){
    app.init();
    map.init();
}

$(document).mousemove(function(e){
      mouse.x=e.pageX ;
      mouse.y=e.pageY-100;
});

$(document).click(function(e){
    mouse.x=e.pageX ;
    mouse.y=e.pageY-100;
    if(mouse.y>0)mouse.click();
});
mouse=Mouse;
map=Map;
app=App;
init();
map.draw();