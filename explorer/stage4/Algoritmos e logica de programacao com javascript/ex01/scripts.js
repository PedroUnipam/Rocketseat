let numberOne = Number(prompt("Digite o primeiro numero"))
let numberTwo = Number(prompt("Digite o segundo numero"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const restDiv = numberOne % numberTwo

console.log(`
Soma: ${sum}
Subtração: ${sub}
Multiplicação: ${mult}
Divisão: ${div}
Resto da divisão: ${restDiv}
`)

if(sum % 2 == 0){
    console.log("A soma é par")
}else{
    console.log("A soma é ímpar")
}

if(sub == 0){
    console.log("Os números são iguais")
}else{
    console.log("Os números são diferentes")
}