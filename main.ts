// when pressed, index increase by 1
input.onButtonPressed(Button.A, function () {
    balls += 1
})
// when pressed, index decrease by 1
input.onButtonPressed(Button.B, function () {
    strikes += 1
})
// initialize index = 0
let balls = 0
let strikes = 0
// show the value of index
basic.forever(function () {
    basic.showNumber(balls)
})
