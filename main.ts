input.onButtonPressed(Button.A, function () {
    basic.showNumber(vochtigheid)
})
input.onButtonPressed(Button.B, function () {
    if (music.volume() == 0) {
        music.setVolume(127)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else {
        music.setVolume(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
let vochtigheid = 0
led.setBrightness(64)
music.setVolume(127)
basic.forever(function () {
	
})
basic.forever(function () {
    vochtigheid = pins.analogReadPin(AnalogPin.P0)
    if (vochtigheid > 1010) {
        basic.showLeds(`
            . . # # .
            . # # . .
            # # # . #
            # # # # #
            # # # # #
            `)
    } else if (vochtigheid > 850) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Confused)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    basic.pause(5000)
})
