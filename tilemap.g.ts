// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010102020101010101010101010101010102020102020101010202020101030303030303030303030303020201010302010101010101020102030202010103020101010101010101010301010101030202010101010101010103020101010301010202020101010102030201010103020101010102020201020302010102030201010101010101010103010101010302010202020202010102030101010103020101010102020102020301010101030101010101010102020203010101010303030303030303030303030101010102020101010101020202010101010202020201010101010101010101010102020102020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
