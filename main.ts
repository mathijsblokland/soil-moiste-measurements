let vochtigheid = 0
led.setBrightness(64)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1)
    vochtigheid = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    led.plotBarGraph(
    vochtigheid,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(vochtigheid)
    }
    basic.pause(5000)
})
basic.forever(function () {
	
})
