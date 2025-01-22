radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.setGroup(255)
    basic.showNumber(255)
    radio.sendString("DATOS")
})
input.onButtonPressed(Button.A, function () {
    CODIGO_PETICION += 1
    radio.setGroup(CODIGO_PETICION)
    basic.showNumber(CODIGO_PETICION)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(CODIGO_PETICION)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
let CODIGO_PETICION = 0
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
CODIGO_PETICION = 1
basic.showNumber(CODIGO_PETICION)
radio.setGroup(CODIGO_PETICION)
