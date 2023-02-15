input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
    timer = 15
    while (timer > 0) {
        if (input.magneticForce(Dimension.Strength) < 200) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showNumber(timer)
            basic.pause(200)
            timer += -1
        }
    }
    basic.showIcon(IconNames.Yes)
    music.playMelody("E D G F B A C5 B ", 200)
})
let timer = 0
basic.showIcon(IconNames.Happy)
timer = 0
