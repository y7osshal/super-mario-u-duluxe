music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.InBackground)
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042100100014000129140018000324252718001c000224291c002000012720002400012906001c00010a006400f401640000040000000000000000000000000000000002060014001800012008001c000e050046006603320000040a002d000000640014000132000201000218001000140001251400180001201c00200001203c004000012c`), music.PlaybackMode.LoopingInBackground)
let Mario = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 1 2 2 2 . . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f d d f d . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . f d d d f d . . . . . 
    . . d . . d f f f d d . . . . . 
    . . d . . . . d d . . . . d . f 
    . . . d . . . d d . . . d . f f 
    . . . d . 2 8 2 2 8 2 . d . . . 
    . . . . d 2 5 2 2 5 2 d . . . . 
    . . . . . 2 8 2 2 8 2 . . . . . 
    . . . . . 2 8 2 2 8 2 . . . . . 
    `, SpriteKind.Player)
Mario.x = 5
Mario.y = 5
controller.moveSprite(Mario)
scene.setBackgroundImage(assets.image`world 12`)
