joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.initJoystickBit()
})
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # . # .
    . # # # .
    `)
basic.forever(function () {
	
})
