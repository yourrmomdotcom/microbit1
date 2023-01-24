let rps = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("B B A C C F - E ", 100000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    rps = randint(0, 3)
    if (rps == 1) {
        basic.showString("r")
    } else if (rps == 2) {
        basic.showString("p")
    } else {
        basic.showString("s")
    }
})
