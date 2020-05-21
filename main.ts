pins.servoWritePin(AnalogPin.P4, 0)
let CarSpeed = 0
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.pause(1000)
pins.analogWritePin(AnalogPin.P1, 300)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P4, 90)
basic.forever(function () {
	
})
