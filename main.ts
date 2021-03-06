input.onButtonPressed(Button.A, function () {
    if (status == 0) {
        vi = vi + 1
        if (vi >= 配列.length) {
            vi = 0
        }
        real_minute = 配列[vi]
        basic.showNumber(real_minute)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.pause(100)
        basic.clearScreen()
        basic.showNumber(minute)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 20; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(10)
        }
        basic.clearScreen()
    }
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    real_minute = 0
    minute = 0
    basic.showNumber(real_minute)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    status = 1
    minute = real_minute
    for (let index = 0; index <= 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    degree = 180 / (minute * 60)
    real_degree = 0
    pins.servoWritePin(AnalogPin.P1, real_degree)
    for (let index = 0; index < real_minute; index++) {
        if (status == 0) {
            break;
        }
        basic.showNumber(minute)
        for (let index = 0; index < 60; index++) {
            if (status == 0) {
                break;
            }
            real_degree = real_degree + degree
            pins.servoWritePin(AnalogPin.P1, real_degree)
            basic.pause(1000)
        }
        minute = minute - 1
    }
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    status = 0
    pins.servoWritePin(AnalogPin.P1, 0)
})
let degree = 0
let minute = 0
let real_minute = 0
let vi = 0
let 配列: number[] = []
let real_degree = 0
let status = 0
status = 0
real_degree = 0
配列 = [
1,
5,
10,
15,
30,
60,
90
]
vi = 100
pins.servoWritePin(AnalogPin.P1, 0)
