function Instructions(){}
Instructions.prototype.show=function(){
        msg+="<b>Touchscreen:</b> flip gravity: touch center; walk left: touch left 30% of screen; walk right: touch right 30% of screen (currently disabled) <br>";
        msg+="get the key to open the door and access next level<br><br>";
        msg+="<button onclick='app.init()'>Play</button><br>";
        msg+="</div>";
        msg+=this.changeLog();
        msg+="<img src='./gfx/screens/screen.png'><br>&copy; fabiogianini.ch";
        msg+="</center>";
        document.getElementById("body").innerHTML=msg;
    }
Instructions.prototype.changeLog=function(){
    var message="";
    message+="<h2>Changelog</h2>";
    message+="<li>1.0.2 keyboard controls now with a, w, d</li>";
    message+="<li>1.0.1 refresh interval removed</li>";
    return message;
}
Instructions.prototype.gameEnd=function(){
    document.getElementById("body").innerHTML="<center><h1>Sorry there are no more levels :-(</h1><br><a href='./index.html'>Back to Home</a></center>";
Instructions.prototype.gameOver=function(){
    document.getElementById("body").innerHTML="<center><h1><img src='./gfx/player/gameOver.png'><br>Game::Over</h1><br><a href='./index.html'>Back to Home</a></center>";