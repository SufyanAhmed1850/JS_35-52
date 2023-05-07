function date() {
    var date = new Date
    console.log(date)
} date()

function greet() {
    var nameFirst = prompt("Enter your first name.")
    var nameLast = prompt("Enter your last name.")
    console.log("Hello! " + nameFirst + " " + nameLast)
} greet()

function sum() {
    var numOne = +prompt("Enter first number to add.")
    var numTwo = +prompt("Enter second number to add.")
    console.log(numOne + numTwo)
} sum()

function calculator() {
    var numOne = +prompt("Enter first number for calculation.")
    var numTwo = +prompt("Enter second number for calculation.")
    var operator = prompt("Enter the operator.")
    console.log(eval(numOne + operator + numTwo))
} calculator()

function square(num) {
    num *= num
    console.log(num)
} square(9)

function factorial() {
    var num = +prompt("Enter a number to calc factorial")
    var fctr = num
    for (var i = 1; i < num; i++) {
        fctr *= i
    }
    console.log(fctr)
} factorial()

function counting() {
    var numStart = +prompt("Enter starting number.")
    var numEnd = +prompt("Enter starting number.")
    for (var i = numStart; i <= numEnd; i++) {
        console.log(i)
    }
} counting()

function calcHyp() {
    var base = +prompt("Enter base of a triangle.")
    var perp = +prompt("Enter perpendicular of  triangle.")
    var hypSqr
    base *= base
    perp *= perp
    hypSqr = base + perp
    var hyp = Math.sqrt(hypSqr)
    console.log(hyp)
} calcHyp()

function area(width, height) {
    var a = width * height
    console.log(a)
} area(5, 5)

function area() {
    width = arguments[0]
    height = arguments[1]
    var a = width * height
    console.log(a)
} area(5, 5)

function palindrome() {
    var word = prompt("Enter a word to check if it's palindrome.")
    var isPalindrome = word.split('').reverse().join("")
    if (word === isPalindrome) {
        console.log(word + " is Palindrome.")
    } else {
        console.log(word + " is not Palindrome.")
    }
} palindrome()

function titleCase(sentence) {
    var senArr = sentence.split(' ')
    var upperSen = []
    for (var i = 0; i < senArr.length; i++) {
        var word = senArr[i][0].toUpperCase() + senArr[i].slice(1).toLowerCase()
        upperSen.push(word)
    }
    console.log(upperSen.join(' '))
} titleCase("the quick brown for")

function longestWord(words) {
    wordsArr = words.split(' ')
    largest = ""
    for (var i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > largest.length) {
            largest = wordsArr[i]
        } else {
            continue
        }
    }
    console.log(largest)
} longestWord('Web Development Tutorial')

function countOccurrences(str, letter) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        } else {
            continue
        }
    }
    console.log("Occurrences of " + letter + " in " + str + " is " + count)
} countOccurrences('JSResourceS.com', 'o')

function calcCircumference(radius) {
    var circumference = 2 * 3.141592653589793238462643383279502884197 * radius
    console.log(+circumference.toFixed(2))
} calcCircumference(15)

function calcArea(radius) {
    radius *= radius
    var area = radius * 3.141592653589793238462643383279502884197
    console.log(+area.toFixed(2))
} calcArea(15)