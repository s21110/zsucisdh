let 電子骰 = 0
input.onGesture(Gesture.Shake, function () {
    電子骰 = randint(1, 6)
    if (電子骰 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
    } else if (電子骰 == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (電子骰 == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . # . . .
            . . . . .
            . . # . .
            `)
    } else if (電子骰 == 4) {
        basic.showLeds(`
            # . # . .
            . . . . .
            . . . . .
            . . . . .
            # . # . .
            `)
    } else if (電子骰 == 5) {
        basic.showLeds(`
            # . # . .
            . . . . .
            . # . . .
            . . . . .
            # . # . .
            `)
    } else if (電子骰 == 6) {
        basic.showLeds(`
            # . # . .
            . . . . .
            # . # . .
            . . . . .
            # . # . .
            `)
    }
})
basic.forever(function () {
	
})
