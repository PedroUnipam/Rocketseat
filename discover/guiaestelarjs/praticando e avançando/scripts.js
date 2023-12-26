//objects

const person = {
    name: 'John',
    age:'30',
    weight: 88.6,
    isAdmin: true
}
//acessar parte específica do objeto
console.log(person.weight)
console.log(`${person.name} tem ${person.age} anos`)

//Array

const animals = [
    'Lion',//0
    'Monkey',//1
    {
        name:'Cat',
        age: '3'
    }
]
//acessar valores no array
console.log(animals[2].age)
//total de elementos do vetor
console.log(animals.length) 

