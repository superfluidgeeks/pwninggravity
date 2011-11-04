function Logger(){
    loglevel:null
}
Logger.prototype.debug=function(msg){
    if(this.loglevel<=0)console.log("[DEBUG]>>"+msg);
}
Logger.prototype.error=function(msg){
    if(this.loglevel<=1)console.log("[ERROR]>>"+msg);
}
Logger.prototype.info=function(msg){
    if(this.loglevel<=2)console.log("[INFO]>>"+msg);        
}