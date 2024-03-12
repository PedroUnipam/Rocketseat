/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name:"Pedro",
        age: 19,
        weight: 100,
        height: 185,
    },
    {
        name:"Sonia",
        age: 54,
        weight: 70,
        height: 163,
    },
    {
        name:"Elder",
        age: 56,
        weight: 95,
        height: 180,
    },
]

let patientsNames = []

for (let patient of patients) {
    patientsNames.push(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e mede ${patient.height}cm\n  `);
}

console.log(patientsNames)

/*
    Dada a lista de pacientes, descubra imc de cada paciente e imprima

    "Paciente X possui o IMC de Y"

    Crie uma função para calcular o IMC
*/

const printPatientBmi = (patients) => {
    let patientsBmi = []
    
    for (let patient of patients) {
        let pesoQuadrado = (patient.height / 100) ** 2
        let bmi = (patient.weight / pesoQuadrado).toFixed(2) 

        patientsBmi.push(`${patient.name} tem o IMC de: ${bmi}`)
    }
    
    return patientsBmi
}

console.log(printPatientBmi(patients))