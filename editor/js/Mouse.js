var Mouse={
    x:null,
    y:null,
    selectedObject:1,
    click:function(){
        var x=Math.round(this.x/map.resolutionX);

        var y=Math.round(this.y/map.resolutionY);

        map.mapArray[y][x]=this.selectedObject;

        console.log(x+"/"+y);

    }
}
