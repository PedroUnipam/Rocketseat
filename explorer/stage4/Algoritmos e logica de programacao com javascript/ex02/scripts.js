const students = [
    {
        name:"Pedro",
        firstTestGrade:10,
        secondTestGrade:8,
    },
    {
        name:"Lucas",
        firstTestGrade:7,
        secondTestGrade:5,
    },
    {
        name:"Carlos",
        firstTestGrade:5,
        secondTestGrade:9,
    }
]

function calculateAverage(students){

    for(let student of students) {
        let average = (student.firstTestGrade + student.secondTestGrade) / 2
        if(average >= 7){
            alert(`
            A média do(a) aluno(a) ${student.name} foi de : ${average}
            Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
            `)
        } else{
            alert(`
            A média do(a) aluno(a) ${student.name} foi de : ${average}
            Não foi dessa vez ${student.name}! Tente novamente!
            `)
        }   
    }
}

calculateAverage(students)