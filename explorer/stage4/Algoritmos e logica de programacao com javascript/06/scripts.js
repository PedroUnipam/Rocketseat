/*
Jogo da advinhação

Apresente a mensagem ao usuáruio:
"Advinhe o número que estou pensando. Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas
*/

const randomNumber = Math.round(Math.random() * 10) //ceil arredonda para cima, floor para baixo e round ele olha se está .5 ou mais

let result = prompt("Adivinhe o número que estou pensando. Está entre 0 e 10")

let attempts = 1

while(Number(result) != randomNumber){
    attempts++
    result = prompt("Erro, tente novamente:")
}

alert("Parabéns! Você adivinhou o número em " + attempts + " tentativas")