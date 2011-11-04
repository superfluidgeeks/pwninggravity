function Message(text,x,y,duration,color){
    this.text=text;
    this.x=x;
    this.y=y;
    this.duration=duration;
    this.color=color;
    this.canDelete=false;
}
Message.prototype.render=function(){
    if(this.duration>0){
        app.ctx.fillStyle = this.color;
        app.ctx.font = "bold 10pt Courier";
        app.ctx.fillText(this.text,this.x,this.y);
        this.duration-=0.5;
        this.y-=0.5;
    }else{
        canDelete=true;
    }
}