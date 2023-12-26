const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']


console.log(pilotos[2])
console.log(pilotos[0])

for (let piloto of pilotos) {
console.log(piloto)
}

//adicionar elementos
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')

console.log(senna)

// deletar um elemento

pilotos.splice(1, 1)

console.log(pilotos)

