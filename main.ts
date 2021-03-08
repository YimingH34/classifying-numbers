// When you press the A button, it will increase the variable by 1.
input.onButtonPressed(Button.A, function () {
    number_set += 1
})
// When you pressed the A+B buttons, it will show the numbers first and then it will categorize the number and it will show whether a number is odd or even. 
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number_set)
    basic.pause(200)
    if (number_set == 0) {
        basic.showString("Z")
    } else if (number_set < 0) {
        basic.showString("N")
    } else {
        basic.showString("P")
    }
    basic.pause(200)
    if (number_set % 2 == 1) {
        basic.showString("Even")
    } else {
        basic.showString("Odd")
    }
})
// When you press the A button, it will increase the variable by -1. 
input.onButtonPressed(Button.B, function () {
    number_set += -1
})
// When you start the application it will reset everything to 0.
let number_set = 0
number_set = 0
