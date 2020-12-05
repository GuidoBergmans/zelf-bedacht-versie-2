namespace SpriteKind {
    export const munt = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false)
})
function levelmap () {
    if (level == 0) {
        tiles.setTilemap(tilemap`level_8`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level_9`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level_10`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level_11`)
    } else if (level == 4) {
        autootje.destroy()
        autootje = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 4 7 7 7 7 7 7 c 7 . . . 
            . . 7 c 4 7 7 7 7 7 7 c c 7 . . 
            . 7 c c 4 4 4 4 4 4 7 c c 4 7 d 
            . 7 c 7 7 7 7 7 7 7 7 b c 4 7 7 
            . 7 7 7 b b 7 b b b 7 7 b 4 7 7 
            . 7 7 b b b 7 b b b b 7 7 7 7 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 
            . 7 7 f f f 7 7 7 7 7 f f f 7 d 
            . 7 f f f f f 7 7 7 f f f f f 7 
            . f f f f f f f 7 f f f f f f f 
            . f f f f f f 7 7 f f f f f f . 
            . . f f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        autootje.ay = 400
        autootje.vx = 100
        scene.cameraFollowSprite(autootje)
        tiles.setTilemap(tilemap`level_12`)
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level_13`)
    } else if (level == 6) {
        tiles.setTilemap(tilemap`level_14`)
    } else {
        game.over(true)
    }
    autootje.say("level " + (level + 1), 5000)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, myTiles.tile49)
    tiles.setTileAt(tiles.getTileLocation(Math.round(autootje.x / 16), 5), myTiles.transparency16)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile41, function (sprite, location) {
    bonus_levelmap()
    autootje = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 4 7 7 7 7 7 7 c 7 . . . 
        . . 7 c 4 7 7 7 7 7 7 c c 7 . . 
        . 7 c c 4 4 4 4 4 4 7 c c 4 7 d 
        . 7 c 7 7 7 7 7 7 7 7 b c 4 7 7 
        . 7 7 7 b b 7 b b b 7 7 b 4 7 7 
        . 7 7 b b b 7 b b b b 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 
        . 7 7 f f f 7 7 7 7 7 f f f 7 d 
        . 7 f f f f f 7 7 7 f f f f f 7 
        . f f f f f f f 7 f f f f f f f 
        . f f f f f f 7 7 f f f f f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    autootje.ay = 400
    autootje.vx = 100
    scene.cameraFollowSprite(autootje)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile28, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, myTiles.tile51)
    tiles.setTileAt(tiles.getTileLocation(Math.round(autootje.x / 16), 5), myTiles.transparency16)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, myTiles.tile9)
    info.changeScoreBy(1)
    autootje.startEffect(effects.spray, 500)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile42, function (sprite, location) {
    bonus_levelmap()
    autootje = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 4 7 7 7 7 7 7 c 7 . . . 
        . . 7 c 4 7 7 7 7 7 7 c c 7 . . 
        . 7 c c 4 4 4 4 4 4 7 c c 4 7 d 
        . 7 c 7 7 7 7 7 7 7 7 b c 4 7 7 
        . 7 7 7 b b 7 b b b 7 7 b 4 7 7 
        . 7 7 b b b 7 b b b b 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 
        . 7 7 f f f 7 7 7 7 7 f f f 7 d 
        . 7 f f f f f 7 7 7 f f f f f 7 
        . f f f f f f f 7 f f f f f f f 
        . f f f f f f 7 7 f f f f f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    autootje.ay = 400
    autootje.vx = 100
    scene.cameraFollowSprite(autootje)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (autootje.isHittingTile(CollisionDirection.Bottom)) {
        autootje.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    autootje.vx = 0
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    autootje.vx = 100
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile40, function (sprite, location) {
    bonus_levelmap()
    autootje = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 4 7 7 7 7 7 7 c 7 . . . 
        . . 7 c 4 7 7 7 7 7 7 c c 7 . . 
        . 7 c c 4 4 4 4 4 4 7 c c 4 7 d 
        . 7 c 7 7 7 7 7 7 7 7 b c 4 7 7 
        . 7 7 7 b b 7 b b b 7 7 b 4 7 7 
        . 7 7 b b b 7 b b b b 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 
        . 7 7 f f f 7 7 7 7 7 f f f 7 d 
        . 7 f f f f f 7 7 7 f f f f f 7 
        . f f f f f f f 7 f f f f f f f 
        . f f f f f f 7 7 f f f f f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    autootje.ay = 400
    autootje.vx = 100
    scene.cameraFollowSprite(autootje)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, myTiles.tile50)
})
function bonus_levelmap () {
    tiles.setTilemap(tilemap`level_16`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    autootje.vx = 150
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.over(false)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    autootje.setPosition(0, 0)
    autootje.ay = 400
    autootje.vx = 100
    level += 1
    levelmap()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile32, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, myTiles.tile51)
    tiles.setTileAt(tiles.getTileLocation(Math.round(autootje.x / 16), 5), myTiles.transparency16)
    scene.cameraShake(4, 500)
})
let level = 0
let autootje: Sprite = null
effects.confetti.startScreenEffect()
scene.setBackgroundColor(6)
autootje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
levelmap()
info.setLife(3)
autootje.ay = 400
autootje.vx = 100
scene.cameraFollowSprite(autootje)
effects.confetti.endScreenEffect()
forever(function () {
    if (autootje.vx < 10) {
        autootje.vx = 100
    }
})