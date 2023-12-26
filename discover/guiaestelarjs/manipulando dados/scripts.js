//Manipulando Arrays
let techs = ['html', "css", "js"]

//adicionar um item no final da array
techs.push("nodejs")

//adicionar um item no inicio da array
techs.unshift("sql")

//remover do fim
//techs.pop()

//remover do inicio
//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posicao do array
//techs.splice(1, 2)
//encontrar a posiçao de 1 elemento no array
let position = techs.indexOf('css')
techs.splice(position, 1)

console.log(position)
console.log(techs)
