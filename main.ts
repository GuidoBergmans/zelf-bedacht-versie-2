namespace SpriteKind {
    export const munt = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false)
})
function levelmap () {
    if (level == 0) {
        tiles.setTilemap(tilemap`level_8`)
        score_voor_bonus = 34
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level_9`)
        score_voor_bonus = 65 / info.score()
    } else if (level == 2) {
        score_voor_bonus = 1000000
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
    } else if (level == 7) {
        tiles.setTilemap(tilemap`level_15`)
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
    if (info.score() >= score_voor_bonus) {
        info.changeScoreBy(10)
        autootje.say("je hebt 10 punten voor de bonus gehaald")
    }
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
let score_voor_bonus = 0
let level = 0
let autootje: Sprite = null
game.showLongText("Dit is een game waarbij je met spatie balk kan springen en met het pijltje naar rechts kan je harder gaan. Pas op voor het water want als je dat aanraakt dan ben je af. Bij de cactussen en bomen gaat er een leven af. Succes", DialogLayout.Full)
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
info.setLife(3)
autootje.ay = 400
autootje.vx = 100
scene.cameraFollowSprite(autootje)
effects.confetti.endScreenEffect()
levelmap()
forever(function () {
    if (autootje.vx < 10) {
        autootje.vx = 100
    }
})
