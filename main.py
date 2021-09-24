def on_button_pressed_a():
    global real_minute
    if status == 0:
        real_minute += 5
        basic.show_number(real_minute)
    if status == 1:
        basic.show_icon(IconNames.NO)
        music.play_tone(247, music.beat(BeatFraction.WHOLE))
        basic.pause(100)
        basic.clear_screen()
        basic.show_number(minute)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    for index in range(20):
        for index2 in range(5):
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(10)
        basic.clear_screen()
    control.reset()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global real_minute, minute
    real_minute = 0
    minute = 0
    basic.show_number(real_minute)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global status, minute, degree, real_degree
    status = 1
    minute = real_minute
    for index3 in range(4):
        music.play_tone(262, music.beat(BeatFraction.QUARTER))
        basic.show_number(3 - index3)
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    basic.show_string("GO!")
    degree = 180 / (minute * 60)
    for index4 in range(real_minute):
        basic.show_number(minute)
        for index5 in range(60):
            real_degree = real_degree + degree
            pins.servo_write_pin(AnalogPin.P1, real_degree)
            basic.pause(1000)
        minute = minute - 1
    music.play_melody("G B A G C5 B A B ", 120)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                # . . . .
                # # . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                # . . . .
                # # . . .
                # # # . .
    """)
    basic.show_leds("""
        . . . . .
                # . . . .
                # # . . .
                # # # . .
                # # # # .
    """)
    basic.show_leds("""
        # . . . .
                # # . . .
                # # # . .
                # # # # .
                # # # # #
    """)
    basic.show_leds("""
        # # . . .
                # # # . .
                # # # # .
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        # # # . .
                # # # # .
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        # # # # .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                . # # # #
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                . # # # #
                . . # # #
    """)
    basic.show_leds("""
        # # # # #
                # # # # #
                . # # # #
                . . # # #
                . . . # #
    """)
    basic.show_leds("""
        # # # # #
                . # # # #
                . . # # #
                . . . # #
                . . . . #
    """)
    basic.show_leds("""
        . # # # #
                . . # # #
                . . . # #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        . . # # #
                . . . # #
                . . . . #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . # #
                . . . . #
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    status = 0
    pins.servo_write_pin(AnalogPin.P1, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

degree = 0
minute = 0
real_minute = 0
real_degree = 0
status = 0
status = 0
real_degree = 0
pins.servo_write_pin(AnalogPin.P1, 0)