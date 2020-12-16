import $ from 'jquery' //引入jquery
console.log($)

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem("n")
$number.text(n || 100)

$button1.on('click', () => {
    let n = parseInt($number.text()) //parseInt(string, radix)解析一个字符串并返回指定基数的十进制整数
    n += 1
    localStorage.setItem("n", n)
    $number.text(n)
})

$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem("n", n)
    $number.text(n)
})

$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem("n", n)
    $number.text(n)
})

$button4.on('click', () => {
    let n = parseInt($number.text())
    n = n / 2
    localStorage.setItem("n", n)
    $number.text(n)
})
