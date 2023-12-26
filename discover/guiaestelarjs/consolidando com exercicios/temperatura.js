
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    //erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau não identificado")
    }
    //F->C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //C->F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 1.8 + 32
        degreeSign = 'F'
    }
    return formula(updatedDegree) + degreeSign
}
try {
    console.log(transformDegree("50F"))
    console.log(transformDegree("50C"))
} catch (error) {
    console.log(error.message)
}