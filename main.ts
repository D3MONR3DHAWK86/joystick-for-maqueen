joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    basic.showIcon(IconNames.Surprised)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Yes)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Angry)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    basic.showIcon(IconNames.Yes)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.No)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Surprised)
})
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
