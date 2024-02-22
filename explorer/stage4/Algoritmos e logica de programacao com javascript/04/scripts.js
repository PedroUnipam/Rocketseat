/*
    Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

    A média positiva deverá ser maior que 6.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let student = prompt("Qual o seu nome?")

let noteOne = prompt("Digite sua primeira nota: ")
let noteTwo = prompt("Digite sua segunda nota: ")
let noteThree = prompt("Digite sua terceira nota: ")

noteOne = Number(noteOne)
noteTwo = Number(noteTwo)
noteThree = Number(noteThree)

let average = (noteOne + noteTwo + noteThree) / 3

average = average.toFixed(2)

if(average >= 6){
    alert("Parabéns " + student + ", você passou com uma média de " + average)
}else{
    alert(student + ", infelizmente você não passou. Sua média foi de " + average + ". Estude firme para a recuperação, boa sorte!!")
}