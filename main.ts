namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Jogador = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Jogador, SpriteKind.Food, function (sprite, otherSprite) {
    JogadorUm.startEffect(effects.hearts, 1000)
    info.changeScoreBy(1)
    JogadorUm.y = 120
})
function Level2 () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffc2cffffffffffffffffffffcffffffffffffffffc2cffffffffffffffffffffcffffffffffffffffc2cffffffffffffffffffffcffffffffffffffffc2cffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cffffffffffff
        fff2fffffffffffffffffffff222fffffffffffffff2fffffffffffffffffffff222fffffffffffffff2fffffffffffffffffffff222fffffffffffffff2fffffffffffffffffffff222ffffffffffff
        ffb2bffffffffffffffffffffc2cffffffffffffffb2bffffffffffffffffffffc2cffffffffffffffb2bffffffffffffffffffffc2cffffffffffffffb2bffffffffffffffffffffc2cffffffffffff
        f22222ffffffffffffccfffffffffffffffffffff22222ffffffffffffccfffffffffffffffffffff22222ffffffffffffccfffffffffffffffffffff22222ffffffffffffccffffffffffffffffffff
        ff2b2fffffffffffffccffffffffffffffffffffff2b2fffffffffffffccffffffffffffffffffffff2b2fffffffffffffccffffffffffffffffffffff2b2fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffffffffffffffc2cfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffff22222222222ffffffffffffffccfffffffffffff22222222222ffffffffffffffccfffffffffffff22222222222ffffffffffffffccfffffffffffff22222222222ffffffff
        ffffffffffffffff22222222222222222222ffffffffffffffffffff22222222222222222222ffffffffffffffffffff22222222222222222222ffffffffffffffffffff22222222222222222222ffff
        fffffffffffff22222222222222222222222222ffffffffffffff22222222222222222222222222ffffffffffffff22222222222222222222222222ffffffffffffff22222222222222222222222222f
        22fffffffff2222222222222222222222222222222fffffffff2222222222222222222222222222222fffffffff2222222222222222222222222222222fffffffff22222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        bbbbbbbbbbbb22222222222222222222bbbbbbbbbbbbbbbbbbbb22222222222222222222bbbbbbbbbbbbbbbbbbbb22222222222222222222bbbbbbbbbbbbbbbbbbbb22222222222222222222bbbbbbbb
        bbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbb
        bbbbbbbbb2222222bbbbbbbbb22cbbbbbbbbbbbbbbbbbbbbb2222222bbbbbbbbb22cbbbbbbbbbbbbbbbbbbbbb2222222bbbbbbbbb22cbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbb22cbbbbbbbbbbbb
        bbbbbbb2222222bb22bbbbbbbccbbccbbbbbbbbbbbbbbbb22cccccbb22bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbbccbbbbbbbccbbccbbbbbbbbb
        bbbbbbbcc2bbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        2bbbbbbbcccccccccbbbbbbbbbbbbbbb222222222bbbbbbbcccccccccbbbbbbbbbbbbbbb222222222bbbbbbbcccccccccbbbbbbbbbbbbbbb222222222bbbbbbbcccccccccbbbbbbbbbbbbbbb22222222
        222bbbbbbbcccccbbbbbbbbbbbbbbb222ccbbbbb222bbbbbbbcccccbbbbbbbbbbbbbbb222ccbbbbb222bbbbbbbcccccbbbbbbbbbbbbbbb222ccbbbbb222bbbbbbbcccccbbbbbbbbbbbbbbb222ccbbbbb
        cc2bbbbbbbbbbbbbbbbbbbbbbbbbbb2cccbbbccccc2bbbbbbbbbbbbbbbbbbbbbbbbbbb2cccbbbccccc2bbbbbbbbbbbbbbbbbbbbbbbbbbb2cccbbbccccc2bbbbbbbbbbbbbbbbbbbbbbbbbbb2cccbbbccc
        cccbbbbbbbbbbbb222bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb222bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb222bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb222bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb222bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb222bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb222bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb222bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb222222bbb33ddddddddddddddddd33bbbbbbbbbb222222bbb33ddddddddddddddddd33bbbbbbbbbb222222bbb33ddddddddddddddddd33bbbbbbbbbb222222bbb33ddddddddddddddddd33bbbbbbb
        bbb22222ddddddddddddddddddddddddddddd3bbbbb22222ddddddddddddddddddddddddddddd3bbbbb22222ddddddddddddddddddddddddddddd3bbbbb22222ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddd22222ddddddddddddddddddddddddddddddddddd22222ddd
        dddddddddddddd2222222222ddddddd22dddd22ddddddddddddddd2222222222ddddddd22dddd22ddddddddddddddd2222222222ddddddd22dddd33ddddddddddddddd2222222222ddddddd22dddd33d
        dddddddddddd222ddddddddd22dddddbbbbbbbbddddddddddddd222ddddddddd22dddddbbbbbbbbddddddddddddd222ddddddddd22dddddbbbbbbbbddddddddddddd222ddddddddd22dddddbbbbbbbbd
        ddddddddddd222d3bbbbbbbbd22dddddbbbbbbddddddddddddd222d3bbbbbbbbd22dddddbbbbbbddddddddddddd222d3bbbbbbbbd22dddddbbbbbbddddddddddddd222d3bbbbbbbbd22dddddbbbbbbdd
        ddddddddddd22bbbbbbbbbbbb22dddddddddddddddddddddddd22bbbbbbbbbbbb22dddddddddddddddddddddddd22bbbbbbbbbbbb22dddddddddddddddddddddddd22bbbbbbbbbbbb22ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d222222ddddddddd222222ddddddddddddddddddd222222ddddddddd222222ddddddddddddddddddd222222ddddddddd222222ddddddddddddddddddd222222ddddddddd222222dddddddddddddddddd
        222222222dddddddddddddddddddddddddddddd2222222222dddddddddddddddddddddddddddddd2222222222dddddddddddddddddddddddddddddd2222222222dddddddddddddddddddddddddddddd3
        22222222dddddddddddddddddddddddddddddddd22222222dddddddddddddddddddddddddddddddd22222222dddddddddddddddddddddddddddddddd22222222dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222d
        22ddddddddddddddddddddd222dddddddddddd2222ddddddddddddddddddddd222dddddddddddd2222ddddddddddddddddddddd222dddddddddddd2222ddddddddddddddddddddd222dddddddddddd22
        d222ddddddddddddddddd222ddddddddddddddddd222ddddddddddddddddd222ddddddddddddddddd222ddddddddddddddddd222ddddddddddddddddd222ddddddddddddddddd222dddddddddddddddd
        ddd22ddddddddddddddd22dddd3bbbbbbbbbbb3dddd22ddddddddddddddd22dddd3bbbbbbbbbbb3dddd22ddddddddddddddd22dddd3bbbbbbbbbbb3dddd22ddddddddddddddd22dddd3bbbbbbbbbbb3d
        b3dd2ddddddddddddddd2dd3bbbbbbbbbbbbbbbbb3dd2ddddddddddddddd2dd3bbbbbbbbbbbbbbbbb3dd2ddddddddddddddd2dd3bbbbbbbbbbbbbbbbb3dd2ddddddddddddddd2dd3bbbbbbbbbbbbbbbb
        bb222ddddddddddddddd22bbbbbbbbbbbbbbbbbbbb222ddddddddddddddd22bbbbbbbbbbbbbbbbbbbb222ddddddddddddddd22bbbbbbbbbbbbbbbbbbbb222ddddddddddddddd22bbbbbbbbbbbbbbbbbb
        bbb2dddddddddddddddd2bbbbbbbbbbbbbbbbbbbbbb2dddddddddddddddd2bbbbbbbbbbbbbbbbbbbbbb2dddddddddddddddd2bbbbbbbbbbbbbbbbbbbbbb2dddddddddddddddd2bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb22dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222ddddddddddddddddddddddddddd2222222222222ddddddddddddddddd
        dddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddd
        dddd2222222222222222ddd2222222dddddddddddddd2222222222222222ddd2222222dddddddddddddd2222222222222222ddd2222222dddddddddddddd2222222222222222ddd2222222dddddddddd
        dd2222222222222222222dddddd222222ddddddddd2222222222222222222dddddd222222ddddddddd2222222222222222222dddddd222222ddddddddd2222222222222222222dddddd222222ddddddd
        2222222222222222222222ddddddddddddddd2222222222222222222222222ddddddddddddddd2222222222222222222222222ddddddddddddddd2222222222222222222222222ddddddddddddddd222
        22222222222222222222222222dddddddd22222222222222222222222222222222dddddddd22222222222222222222222222222222dddddddd22222222222222222222222222222222dddddddd222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    Chegada = sprites.create(img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Food)
    Chegada.setPosition(80, 10)
    JogadorUm = sprites.create(img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `, SpriteKind.Jogador)
    animation.runImageAnimation(
    JogadorUm,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . b b b b f c c c f . . . 
        . . . . . . . f f d d d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    250,
    true
    )
    scaling.scaleToPercent(JogadorUm, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    JogadorUm.setPosition(77, 120)
    controller.moveSprite(JogadorUm)
    JogadorUm.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Jogador, SpriteKind.Projectile, function (sprite, otherSprite) {
    JogadorUm.startEffect(effects.fire, 1000)
    info.changeLifeBy(-1)
    JogadorUm.y = 120
})
function Level1 () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    Chegada = sprites.create(img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Food)
    Chegada.setPosition(80, 10)
    JogadorUm = sprites.create(img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `, SpriteKind.Jogador)
    animation.runImageAnimation(
    JogadorUm,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . b b b b f c c c f . . . 
        . . . . . . . f f d d d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    250,
    true
    )
    scaling.scaleToPercent(JogadorUm, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    JogadorUm.setPosition(77, 120)
    controller.moveSprite(JogadorUm)
    JogadorUm.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (otherSprite == ícone_fácil && controller.A.isPressed()) {
        Level = 1
        ControleLevel()
    }
    if (otherSprite == ícone_difícil && controller.A.isPressed()) {
        Level = 2
        ControleLevel()
    }
})
function ControleLevel () {
    if (Level == 0) {
        scene.setBackgroundImage(img`
            eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
            222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
            222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
            222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
            e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
            eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
            2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
            2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
            2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
            eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
            eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
            eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
            eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
            eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
            eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
            eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
            eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
            eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
            eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
            eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
            eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
            eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
            eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
            eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
            eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
            eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
            eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
            eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
            eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
            ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
            ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
            eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
            eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
            eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
            eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
            eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
            eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
            eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
            ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
            ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
            e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
            e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
            eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
            eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
            ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
            ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
            e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
            e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
            22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
            22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
            222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
            2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
            2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
            222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
            222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
            222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
            22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
            22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
            22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
            2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
            2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
            2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
            2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
            ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
            ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
            eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
            eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
            2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
            222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
            22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
            222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
            eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
            222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
            222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
            222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
            222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
            222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
            222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
            222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
            222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
            222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
            222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
            222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
            222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
            222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
            222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
            222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
            222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
            222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
            222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
            222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
            2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
            2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
            2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
            2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
            2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
            222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
            222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
            2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
            222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
            222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
            222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
            222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
            2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
            22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
            22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
            22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
            22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
            22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
            22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
            22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
            22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
            222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
            222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
            222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
            222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
            222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
            222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
            `)
        Nome_jogo = textsprite.create("Theater Fall")
        Nome_jogo.setPosition(81, 30)
        Nome_jogo.setOutline(1, 15)
        texto_facil = textsprite.create("Easy", 0, 1)
        texto_facil.setOutline(1, 15)
        texto_facil.setPosition(31, 95)
        texto_difícil = textsprite.create("Hard")
        texto_difícil.setOutline(1, 15)
        texto_difícil.setPosition(129, 95)
        ícone_fácil = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Button)
        animation.runImageAnimation(
        ícone_fácil,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        250,
        true
        )
        scaling.scaleToPercent(ícone_fácil, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        ícone_fácil.setPosition(30, 105)
        ícone_difícil = sprites.create(img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `, SpriteKind.Button)
        animation.runImageAnimation(
        ícone_difícil,
        [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `],
        250,
        true
        )
        scaling.scaleToPercent(ícone_difícil, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        ícone_difícil.setPosition(130, 105)
        Cursor = sprites.create(img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c b 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b 3 3 3 3 3 c . . 
            f b c c c d d d b b 3 3 3 3 c . 
            f b c b d d d d d d b b 3 3 b c 
            . c b d c d d d d d d b c 3 3 c 
            . c d d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d b f f c c c b f 
            . . c d d d d b d d b f b b f f 
            . . . c d d d b b d d f f f f . 
            . . . f f b b f b b b b . . . . 
            . . . f b b b f f . . . . . . . 
            `, SpriteKind.Player)
        animation.runImageAnimation(
        Cursor,
        [img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c b 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b 3 3 3 3 3 c . . 
            f b c c c d d d b b 3 3 3 3 c . 
            f b c b d d d d d d b b 3 3 b c 
            . c b d c d d d d d d b c 3 3 c 
            . c d d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d b f f c c c b f 
            . . c d d d d b d d b f b b f f 
            . . . c d d d b b d d f f f f . 
            . . . f f b b f b b b b . . . . 
            . . . f b b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c c 3 1 1 1 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b b 3 3 1 1 c . . 
            f b c c b d d d d b b 3 3 c c . 
            f b c d d d d d d d b b 3 3 b c 
            . c d d c d d d d d d b b 3 3 c 
            . c d d c d d d c d d b c 3 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b b f f d d c c c b f 
            . . c d d b d d b f c c b b f f 
            . . . c d b b d d f c c f f f . 
            . . . . c f b b b b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b 1 1 3 3 3 3 3 3 b b . . 
            c c c 3 1 1 1 3 3 3 3 3 3 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b 3 3 3 1 1 c . . 
            f b c c c d d d b b 3 3 3 c c . 
            f b c b d d d d d d b b 3 3 b c 
            . c b d d d d d d d d b c 3 3 c 
            . c d c c d d d d d d c c c 3 f 
            . f d d d d d c c d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d b f f c b b f f 
            . . f b d d d b b d d f f f f . 
            . . f f f c c b d d d f . . . . 
            `,img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c 3 3 3 3 3 3 3 c . . 
            f b c c c b b b b 3 3 3 3 3 c . 
            f b c c d d d d d b b 3 3 3 3 c 
            . c c d c d d d d d d b c 3 3 c 
            . c b d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `],
        250,
        true
        )
        controller.moveSprite(Cursor)
        Cursor.setStayInScreen(true)
        music.play(music.createSong(assets.song`Menu`), music.PlaybackMode.LoopingInBackground)
    }
    if (Level == 1) {
        Level1()
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        sprites.destroy(Nome_jogo)
        sprites.destroy(texto_difícil)
        sprites.destroy(texto_facil)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    }
    if (Level == 2) {
        Level2()
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        sprites.destroy(Nome_jogo)
        sprites.destroy(texto_difícil)
        sprites.destroy(texto_facil)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    }
}
let Obstáculo: Sprite = null
let Cursor: Sprite = null
let texto_difícil: TextSprite = null
let texto_facil: TextSprite = null
let Nome_jogo: TextSprite = null
let ícone_difícil: Sprite = null
let ícone_fácil: Sprite = null
let Chegada: Sprite = null
let JogadorUm: Sprite = null
let Level = 0
Level = 0
ControleLevel()
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 1) {
            if (Math.percentChance(30)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . . . c c c c c c . . . . . . 
                    . . . c 6 7 7 7 7 6 c . . . . . 
                    . . c 7 7 7 7 7 7 7 7 c . . . . 
                    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                    . . f 7 7 7 7 6 c 7 7 6 f c . . 
                    . . . f c c c c 7 7 6 f 7 7 c . 
                    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                    . . c c c c c c c c c f . . . . 
                    `, -60, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . . . c c c c c c . . . . . . 
                    . . . c 6 7 7 7 7 6 c . . . . . 
                    . . c 7 7 7 7 7 7 7 7 c . . . . 
                    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                    . . f 7 7 7 7 6 c 7 7 6 f c . . 
                    . . . f c c c c 7 7 6 f 7 7 c . 
                    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                    . . c c c c c c c c c f . . . . 
                    `,img`
                    . . . c c c c c c . . . . . . . 
                    . . c 6 7 7 7 7 6 c . . . . . . 
                    . c 7 7 7 7 7 7 7 7 c . . . . . 
                    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                    . f 7 7 7 7 6 c 7 7 6 f . . . . 
                    . . f c c c c 7 7 6 f c c c . . 
                    . . c 6 2 7 7 7 f c c 7 7 7 c . 
                    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                    . . c 6 1 1 1 1 1 7 6 6 c c . . 
                    . . . c c c c c c c c c c . . . 
                    `],
                250,
                true
                )
                Obstáculo.y = 92
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 2) {
            if (Math.percentChance(20)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . f f f . . . . . . . . . . . 
                    f f f c c . . . . . . . . f f f 
                    f f c c . . c c . . . f c b b c 
                    f f c 3 c c 3 c c f f b b b c . 
                    f f b 3 b c 3 b c f b b c c c . 
                    . c b b b b b b c f b c b c c . 
                    . c b b b b b b c b b c b b c . 
                    c b 1 b b b 1 b b b c c c b c . 
                    c b b b b b b b b c c c c c . . 
                    f b c b b b c b b b b f c . . . 
                    f b 1 f f f 1 b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, -60, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . f f f . . . . . . . . f f f 
                    . f f c c . . . . . . f c b b c 
                    f f c c . . . . . . f c b b c . 
                    f c f c . . . . . . f b c c c . 
                    f f f c c . c c . f c b b c c . 
                    f f c 3 c c 3 c c f b c b b c . 
                    f f b 3 b c 3 b c f b c c b c . 
                    . c b b b b b b c b b c c c . . 
                    . c 1 b b b 1 b b c c c c . . . 
                    c b b b b b b b b b c c . . . . 
                    c b c b b b c b b b b f . . . . 
                    f b 1 f f f 1 b b b b f c . . . 
                    f b b b b b b b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `,img`
                    . . f f f . . . . . . . . . . . 
                    f f f c c . . . . . . . . f f f 
                    f f c c . . c c . . . f c b b c 
                    f f c 3 c c 3 c c f f b b b c . 
                    f f b 3 b c 3 b c f b b c c c . 
                    . c b b b b b b c f b c b c c . 
                    . c b b b b b b c b b c b b c . 
                    c b 1 b b b 1 b b b c c c b c . 
                    c b b b b b b b b c c c c c . . 
                    f b c b b b c b b b b f c . . . 
                    f b 1 f f f 1 b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . c c . . c c . . . . . . . . 
                    . . c 3 c c 3 c c c . . . . . . 
                    . c b 3 b c 3 b c c c . . . . . 
                    . c b b b b b b b b f f . . . . 
                    c c b b b b b b b b f f . . . . 
                    c b 1 b b b 1 b b c f f f . . . 
                    c b b b b b b b b f f f f . . . 
                    f b c b b b c b c c b b b . . . 
                    f b 1 f f f 1 b f c c c c . . . 
                    . f b b b b b b f b b c c . . . 
                    c c f b b b b b c c b b c . . . 
                    c c c f f f f f f c c b b c . . 
                    . c c c . . . . . . c c c c c . 
                    . . c c c . . . . . . . c c c c 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . f f f . . . . . . . . f f f . 
                    f f c . . . . . . . f c b b c . 
                    f c c . . . . . . f c b b c . . 
                    c f . . . . . . . f b c c c . . 
                    c f f . . . . . f f b b c c . . 
                    f f f c c . c c f b c b b c . . 
                    f f f c c c c c f b c c b c . . 
                    . f c 3 c c 3 b c b c c c . . . 
                    . c b 3 b c 3 b b c c c c . . . 
                    c c b b b b b b b b c c . . . . 
                    c b 1 b b b 1 b b b b f c . . . 
                    f b b b b b b b b b b f c c . . 
                    f b c b b b c b b b b f . . . . 
                    . f 1 f f f 1 b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `],
                125,
                true
                )
                Obstáculo.y = 92
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 1) {
            if (Math.percentChance(30)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    ........................
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef...cc.......
                    .ffffee2222ef.cdc.......
                    .fe222ffffe2fcddc.......
                    fffffffeeeffcddc........
                    ffe44ebf44ecddc.........
                    fee4d41fddecdc..........
                    .feee4dddedccc..........
                    ..ffee44e4dde...........
                    ...f222244ee............
                    ...f2222e2f.............
                    ...f444455f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `, 50, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    ........................
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef...cc.......
                    .ffffee2222ef.cdc.......
                    .fe222ffffe2fcddc.......
                    fffffffeeeffcddc........
                    ffe44ebf44ecddc.........
                    fee4d41fddecdc..........
                    .feee4dddedccc..........
                    ..ffee44e4dde...........
                    ...f222244ee............
                    ...f2222e2f.............
                    ...f444455f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    .......fff..............
                    ....fffff2f.............
                    ..ffeeeee22ff...........
                    .ffeeeeee222ff..........
                    .feeeefffeeeef..........
                    .fffffeee2222ef.........
                    fffe222fffffe2f.........
                    fffffffffeeefff.....cc..
                    fefe44ebbf44eef...ccdc..
                    .fee4d4bbfddef..ccddcc..
                    ..feee4dddddfeecdddc....
                    ...f2222222eeddcdcc.....
                    ...f444445e44ddccc......
                    ...ffffffffeeee.........
                    ...fff...ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    .......ff...............
                    ....ffff2ff.............
                    ..ffeeeef2ff............
                    .ffeeeeef22ff...........
                    .feeeeffeeeef...........
                    .fffffee2222ef..........
                    fffe222ffffe2f..........
                    ffffffffeeefff..........
                    fefe44ebf44eef..........
                    .fee4d4bfddef...........
                    ..feee4dddee.c..........
                    ...f2222eeddeccccccc....
                    ...f444e44ddecddddd.....
                    ...fffffeeee.ccccc......
                    ..ffffffff...c..........
                    ..fff..ff...............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef............
                    .ffffee2222ef...........
                    .fe222ffffe2f...........
                    fffffffeeefff...........
                    ffe44ebf44eef...........
                    fee4d41fddef............
                    .feee4ddddf.............
                    ..fdde444ef.............
                    ..fdde22ccc.............
                    ...eef22cdc.............
                    ...f4444cddc............
                    ....fffffcddc...........
                    .....fff..cddc..........
                    ...........cdc..........
                    ............cc..........
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                250,
                true
                )
                Obstáculo.y = 73
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 2) {
            if (Math.percentChance(20)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . c c c c 6 3 c . . 
                    . . . . . . c 6 3 3 3 3 6 c . . 
                    . . . . . c 6 6 3 3 3 3 3 3 c . 
                    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
                    . c c c c c 6 6 c c 3 3 3 3 3 c 
                    b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
                    f f 5 c c c 3 c 5 f f 6 6 6 c c 
                    f f 5 c c c c c 5 f f 3 3 3 3 c 
                    . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
                    . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
                    c 4 5 5 4 4 4 4 5 5 4 c b b . . 
                    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                    . c c c c c c c c c . . c c c . 
                    `, 50, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . . c c . . . . . . . . . . . 
                    . . c 3 6 c c c c . . . . . . . 
                    . . c 6 3 3 3 3 6 c . . . . . . 
                    . c 3 3 3 3 3 c c 6 c . c c . . 
                    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
                    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
                    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
                    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
                    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
                    c 3 3 3 3 3 c c b 5 5 5 5 c . . 
                    . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
                    . . b b b c c 5 b b 4 4 b 5 c . 
                    . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
                    . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
                    . c c c 4 4 4 c 5 5 5 5 c 5 c . 
                    . . . . . . . c c c c c c c . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . c c . . . . . . . . . . 
                    . . . c 3 6 c c c c . . . . . . 
                    . . . c 6 3 3 3 6 6 c . . . . . 
                    . . c 3 3 3 3 3 3 6 6 c . . . . 
                    . c 3 3 3 3 3 3 c c 6 6 c c c b 
                    . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
                    . c c 3 3 3 6 f f 5 c 6 c 5 f f 
                    . c c 6 6 6 6 f f 5 c c c 5 f f 
                    . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
                    . c 3 3 3 3 c c c 4 5 5 5 5 c . 
                    . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
                    . . . c b b c 5 b b 4 4 b 5 c . 
                    . . . c 5 c c 5 5 5 c 4 5 c c . 
                    . . . c c c c 5 5 5 5 c c . . . 
                    . . . . . . c c c c c c . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . c 3 6 c c c c . . . . . . . 
                    . . c 6 3 3 3 6 6 c . . . . . . 
                    . c 3 3 3 3 3 3 6 6 c . . . . . 
                    c 3 3 3 3 3 3 c c 6 6 c c c b . 
                    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
                    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
                    c c 6 6 6 6 f f 5 c c c 5 f f . 
                    c 3 3 3 3 c c c 5 5 3 5 5 b . . 
                    c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
                    . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
                    . . c b 5 5 5 b 4 4 4 b 5 5 c . 
                    . . b c 5 5 5 c 4 4 4 5 5 5 c . 
                    . . c c 5 5 5 5 c 4 c c c c . . 
                    . . c c c c c c c c c c . . . . 
                    `,img`
                    . . . c c . . . . . . . . . . . 
                    . . c 3 6 c c c c . . . . . . . 
                    . . c 6 3 3 3 3 6 c . . . . . . 
                    . c 3 3 3 3 3 c c 6 c . c c . . 
                    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
                    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
                    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
                    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
                    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
                    c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
                    . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
                    . . c c b 5 5 5 c 4 4 4 b 4 5 b 
                    . . b b c 5 5 5 c 4 4 b 5 5 4 c 
                    . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
                    . c 5 c c c c c c 4 c 5 5 5 5 c 
                    . c c c . . . . . c c c c c c . 
                    `],
                250,
                true
                )
                Obstáculo.y = 73
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 1) {
            if (Math.percentChance(30)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 2 2 2 2 e . . . 
                    . . . . . . 2 2 2 2 d 2 2 e . . 
                    . . . . . e 2 2 2 2 2 2 2 e . . 
                    . . . . . e 2 2 2 2 2 2 2 e . . 
                    . . . . . e 2 2 2 2 2 e f f c c 
                    . . . . . e e 2 2 e f f f f b c 
                    . . . e e e f e 2 2 e f f f d c 
                    . . e e 2 2 d f e 2 c b 4 4 c c 
                    . . e e 2 2 d f e c 4 1 1 4 c . 
                    . . b 1 1 d e e e c 4 4 4 4 c . 
                    . . . f f f f f d d 4 4 4 b c . 
                    . . . . f f f f d d c c c c . . 
                    . . . . . f f f f f c c c . . . 
                    . . . . e e e f f . . . . . . . 
                    . . . . e e e e f f . . . . . . 
                    `, 50, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . . . 2 2 2 2 2 e . . . . . . 
                    . . . 2 2 2 2 d 2 2 e . . . . . 
                    . . e 2 2 2 2 2 2 2 e . . . . . 
                    . . e 2 2 2 2 2 2 2 e . . . . . 
                    . . e 2 2 2 2 2 e f f c c . . . 
                    . . e e 2 2 e f f f f b c . . . 
                    . e e e f e 2 b f f f d c . . . 
                    e e 2 2 d f 2 e f f f b c . . . 
                    e e 2 2 d f e c b 4 4 c . . . . 
                    b 1 1 d e e c 4 1 1 4 c . . . . 
                    . f f e e e e 4 4 4 4 c . . . . 
                    . . f f d d e 4 4 4 b c . . . . 
                    . . f f d d e c c c c d . . . . 
                    . . . f f f f . . . . . . . . . 
                    . . f f f e e e . . . . . . . . 
                    . . f f f f e e e . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 e . . . . 
                    . . . . . 2 2 2 2 d 2 2 e . . . 
                    . . . . e 2 2 2 2 2 2 2 e . . . 
                    . . . . e 2 2 2 2 2 2 2 e . . . 
                    . . . . e 2 2 2 2 2 e f f c c . 
                    . . . . e e 2 2 e f f f f b c . 
                    . . . e e e f e e f f f f d c . 
                    . . e e 2 2 d f c b 4 4 c b c . 
                    . . e e 2 2 b c 4 1 1 4 c . . . 
                    . . b 1 1 b e c 4 4 4 4 c . . . 
                    . . f f f f d d 4 4 4 b c . . . 
                    f f f f f f d d c c c c . . . . 
                    f f f . f f f f c c c . . . . . 
                    f f . . . . e e e . . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 e . . . . 
                    . . . . . 2 2 2 2 d 2 2 e . . . 
                    . . . . e 2 2 2 2 2 2 2 e . . . 
                    . . . . e 2 2 2 2 2 2 2 e . . . 
                    . . . . e 2 2 2 2 2 e f f c c . 
                    . . . . e e 2 2 e f f f f b c . 
                    . . e e e f e e f f f f f d c . 
                    . e e 2 2 d f c b 4 4 c 1 b c . 
                    . e e 2 2 b c 4 1 1 4 c c . . . 
                    . b 1 1 b e c 4 4 4 4 c . . . . 
                    . . f f f d d 4 4 4 b c d . . . 
                    e e f f f d d c c c c d d . . . 
                    e e e f f f f c c c . . . . . . 
                    e e . . . . f f f . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 2 2 2 2 e . . . 
                    . . . . . . 2 2 2 2 d 2 2 e . . 
                    . . . . . e 2 2 2 2 2 2 2 e . . 
                    . . . . . e 2 2 2 2 2 2 2 e . . 
                    . . . . . e 2 2 2 2 2 e f f c c 
                    . . . . . e e 2 2 e f f f f b c 
                    . . . e e e f e 2 2 e f f f d c 
                    . . e e 2 2 d f e 2 c b 4 4 c c 
                    . . e e 2 2 d f e c 4 1 1 4 c . 
                    . . b 1 1 d e e e c 4 4 4 4 c . 
                    . . . f f f f f d d 4 4 4 b c . 
                    . . . . f f f f d d c c c c . . 
                    . . . . . f f f f f c c c . . . 
                    . . . . e e e f f . . . . . . . 
                    . . . . e e e e f f . . . . . . 
                    `],
                250,
                true
                )
                Obstáculo.y = 25
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 1) {
            if (Math.percentChance(30)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    ..............cfff..............
                    ............ccddbf..............
                    ...........cbddbff.........ccc..
                    ..........fccbbcf.........cbbc..
                    ...fffffffccccccff.......cdbc...
                    .ffcbbbbbbbbbbbbbcfff....cdbf...
                    fcbbbbbbbbbcbbbbbbcccff.cdbf....
                    fbcbbbbffbbbcbcbbbcccccffdcf....
                    fbb1111ffbbbcbcbbbccccccbbcf....
                    .fb11111111bbcbbbccccccccbbcf...
                    ..fccc33cb11bbbbcccccccfffbbf...
                    ...fc131c111bbbcccccbdbc..fbbf..
                    ....f33c111cbbccdddddbc....fff..
                    .....ff1111fdbbccddbcc..........
                    .......cccccfdbbbfcc............
                    .............fffff..............
                    `, -60, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    .............ccfff..............
                    ...........ccddbcf..............
                    ..........ccddbbf...............
                    ..........fccbbcf...............
                    .....fffffccccccff.........ccc..
                    ...ffbbbbbbbcbbbbcfff....ccbbc..
                    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                    ffbbbbbbffbbcbcbbbcccccfcdbbf...
                    fbcbbb11ff1bcbbbbbcccccffbbf....
                    fbbb11111111bbbbbcccccccbbcf....
                    .fb11133cc11bbbbcccccccccccf....
                    ..fccc31c111bbbcccccbdbffbbcf...
                    ...fc13c111cbbbfcddddcc..fbbf...
                    ....fccc111fbdbbccdcc.....fbbf..
                    ........ccccfcdbbcc........fff..
                    .............fffff..............
                    `,img`
                    .............ccfff..............
                    ............cddbbf..............
                    ...........cddbbf...............
                    ..........fccbbcf............ccc
                    ....ffffffccccccff.........ccbbc
                    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                    fbcbbbbbffbbcbcbbbcccccfffdbbf..
                    fbbb1111ff1bcbcbbbcccccccbbbcf..
                    .fb11111111bbbbbbcccccccccbccf..
                    ..fccc33cc11bbbbccccccccfffbbcf.
                    ...fc131c111bbbcccccbdbc...fbbf.
                    ....f33c111cbbbfdddddcc.....fbbf
                    .....ff1111fbdbbfddcc........fff
                    .......cccccfbdbbfc.............
                    .............fffff..............
                    `,img`
                    ..............cfff..............
                    ............ccddbf..............
                    ...........cbddbff.........ccc..
                    ..........fccbbcf.........cbbc..
                    ...fffffffccccccff.......cdbc...
                    .ffcbbbbbbbbbbbbbcfff....cdbf...
                    fcbbbbbbbbbcbbbbbbcccff.cdbf....
                    fbcbbbbffbbbcbcbbbcccccffdcf....
                    fbb1111ffbbbcbcbbbccccccbbcf....
                    .fb11111111bbcbbbccccccccbbcf...
                    ..fccc33cb11bbbbcccccccfffbbf...
                    ...fc131c111bbbcccccbdbc..fbbf..
                    ....f33c111cbbccdddddbc....fff..
                    .....ff1111fdbbccddbcc..........
                    .......cccccfdbbbfcc............
                    .............fffff..............
                    `,img`
                    .............ccfff..............
                    ............cddbbf..............
                    ...........cddbbf...............
                    ..........fccbbcf............ccc
                    ....ffffffccccccff.........ccbbc
                    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                    fbcbbbbbffbbcbcbbbcccccfffdbbf..
                    fbbb1111ff1bcbcbbbcccccccbbbcf..
                    .fb11111111bbbbbbcccccccccbccf..
                    ..fccc33cc11bbbbccccccccfffbbcf.
                    ...fc131c111bbbcccccbdbc...fbbf.
                    ....f33c111cbbbfdddddcc.....fbbf
                    .....ff1111fbdbbfddcc........fff
                    .......cccccfbdbbfc.............
                    .............fffff..............
                    `],
                250,
                true
                )
                Obstáculo.y = 45
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 2) {
            if (Math.percentChance(20)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . f d d d d e e e f f . . . . . 
                    . . f f f f f e e e e f . . . . 
                    . . . . f f e e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `, -60, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . f f 
                    c c c c c d d d e e f c . f e f 
                    . f d d d d d e e f f . . f e f 
                    . . f f f f f e e e e f . f e f 
                    . . . . f e e e e e e e f f e f 
                    . . . f e f f e f e e e e f f . 
                    . . . f e f f e f e e e e f . . 
                    . . . f d b f d b f f e f . . . 
                    . . . f d d c d d b b d f . . . 
                    . . . . f f f f f f f f f . . . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    c d e e d d d d e e d d f . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e b d c . f f 
                    . f d d d d e e e f f c . f e f 
                    . f f f f f f e e e e f . f e f 
                    . f f f f e e e e e e e f f e f 
                    f d d f d d f e f e e e e f f . 
                    f d b f d b f e f e e e e f . . 
                    f f f f f f f f f f f f e f . . 
                    . . . . . . . . . f c d d f . . 
                    . . . . . . . . . . f f f f . . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f f . . . . 
                    . c d d d d d d e e d d f . . . 
                    . c d f d d f d e e b d c . . . 
                    c d d f d d f d e e b d c . f f 
                    c d e e d d d d e e f c . f e f 
                    c d d d d c d e e e f . . f e f 
                    . f c c c d e e e f f . . f e f 
                    . . f f f f f e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . f f e f e e f e e e e f . . 
                    . f e f f e e f f f e e e f . . 
                    f d d b d d c f f f f f f b f . 
                    f d d c d d d f . . f c d d f . 
                    . f f f f f f f . . . f f f . . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f f f . . . . 
                    . . f d d d e e e e d d f . . . 
                    . c d d d d d e e e b d c . . . 
                    . c d d d d d d e e b d c . . . 
                    c d d f d d f d e e f c . f f . 
                    c d d f d d f d e e f . . f e f 
                    c d e e d d d d e e f . . f e f 
                    . f d d d c d e e f f . . f e f 
                    . . f f f d e e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . . . f f e e e e e b f f . . 
                    . . . f e f f e e c d d f f . . 
                    . . f d d b d d c f f f . . . . 
                    . . f d d c d d d f f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . f d d d d e e e f f . . . . . 
                    . . f f f f f e e e e f . . . . 
                    . . . . f f e e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `],
                250,
                true
                )
                Obstáculo.y = 45
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Level != 0) {
        if (Level != 2) {
            if (Math.percentChance(20)) {
                Obstáculo = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c c c . . . . 
                    . . . . . . c d d d d d c . . . 
                    . . . . . . c c c c c d c . . . 
                    . . . . . c 4 4 4 4 d c c . . . 
                    . . . . c d 4 4 4 4 4 1 c . . . 
                    . . . c 4 4 1 4 4 4 4 4 1 c . . 
                    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
                    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
                    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
                    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
                    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
                    . f 4 4 4 4 1 4 4 4 4 c b c f f 
                    . . f f f d 4 4 4 4 c d d c . . 
                    . . . . . f f f f f c c c . . . 
                    . . . . . . . . . . . . . . . . 
                    `, 50, 0)
                animation.runImageAnimation(
                Obstáculo,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c . . . . . . . . 
                    . . . c d d d d c c . . . . . . 
                    . . . c d c c c c c c . . . . . 
                    . . . c c d 4 4 4 4 c c . . . . 
                    c c . c 1 4 4 4 4 4 d 4 c . . . 
                    c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
                    c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
                    f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
                    f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
                    f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
                    f f f f d 4 f 4 c 1 4 4 4 4 f . 
                    . . c f c 4 f f 4 4 d 4 f f . . 
                    . . c b d c 4 4 4 4 f f . . . . 
                    . . c d d d f f f f . . . . . . 
                    . . . c c c . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c c . . . . . . . 
                    . . . c d d d d d c . . . . . . 
                    . . . c d c c c c c . . . . . . 
                    . . . c c d 4 4 4 4 c . . . . . 
                    . . . c 1 4 4 4 4 4 d c . . . . 
                    . . c 1 4 4 4 4 4 1 4 4 c . . . 
                    c c c 1 4 4 4 4 1 4 4 4 4 c . . 
                    c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
                    f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
                    f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
                    f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
                    f f c b c 4 4 4 4 1 4 4 4 4 f . 
                    . . c d d c 4 4 4 4 d f f f . . 
                    . . . c c c f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . c c c c . . . . . . . . 
                    . . . c d d d d c c . . . . . . 
                    . . . c d c c c c c c . . . . . 
                    c c . c c d 4 4 4 4 c c . . . . 
                    c 4 c c 1 4 4 4 4 4 d 4 c . . . 
                    f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
                    f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
                    f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
                    f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
                    f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
                    . . f f d 4 4 c c 1 4 4 4 4 f . 
                    . . . f c 4 4 4 4 4 d 4 f f . . 
                    . . c b d c 4 4 4 4 f f . . . . 
                    . . c d d d f f f f . . . . . . 
                    . . . c c c . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . c c c c . . . . . . . . . 
                    . . c d d d d c c . . . . . . . 
                    . . c d d c c c c c c . . . . . 
                    c c c c c d 4 4 4 4 c c c . . . 
                    f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
                    f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
                    f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
                    f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
                    f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
                    . . f d 4 4 f 4 4 1 4 4 4 4 f . 
                    . . . f d 4 4 c c 4 1 4 4 f . . 
                    . . . f c 4 4 4 4 4 4 d f . . . 
                    . . c b d c 4 4 4 4 f f . . . . 
                    . . c d d d f f f f . . . . . . 
                    . . . c c c . . . . . . . . . . 
                    `],
                250,
                true
                )
                Obstáculo.y = 25
            }
        }
    }
})
