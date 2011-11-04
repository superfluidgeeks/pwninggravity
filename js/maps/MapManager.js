function MapManager(){
    levels:["Level1","Level2","Level3","Level4","Level5","Level6","Level7"]
} 
MapManager.prototype.init=function(){
    map.allMaps.push(Level1);
    map.allMaps.push(Level2);
    map.allMaps.push(Level3);
    map.allMaps.push(Level4);
    map.allMaps.push(Level5);
    map.allMaps.push(Level6);    map.allMaps.push(Level7);
}