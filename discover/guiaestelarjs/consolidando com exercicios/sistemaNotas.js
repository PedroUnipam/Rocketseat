
function notas(nota){
    let A = nota >= 90
    let B = nota < 90 && nota >=80
    let C = nota < 80 && nota >=70
    let D = nota < 70 && nota >=60
    let F = nota < 60
    let notaF
    if(A){
        notaF = 'A'
    } else if (B) {
        notaF = 'B'
    } else if(C) {
        notaF = 'C'
    } else if(D) {
        notaF = 'D'
    } else if(F) {
        notaF = 'F'
    }
    return notaF
}
console.log(notas(50))
console.log(notas(78))