/*
    Capturar 2 números
    e fazer as operações matemáticas de 
    soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação mostrar um alerta com o resultado
*/

let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo


alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)