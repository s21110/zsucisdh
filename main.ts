let 電子骰 = 0
input.onGesture(Gesture.Shake, function () {
    電子骰 = randint(1, 6)
    basic.showNumber(電子骰)
})
basic.forever(function () {
	
})
