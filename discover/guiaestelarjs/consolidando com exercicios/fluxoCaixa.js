let saldoFinal
let receitas 
let despesas
let caixa = {
    receitas:[500, 540, 720],
    despesas:[250, 500, 872, 500],
}
function Somar(array){
    let total = 0

    for(let value of array){
        total += value
    }
    return total
}

function balancoFamilia(){
    receitas = Somar(caixa.receitas)
    despesas = Somar(caixa.despesas)

    if(receitas > despesas){
        console.log("Saldo positivo")
    } else if(despesas > receitas){
        console.log("Saldo negativo")
    }else {
        console.log("Saldo zerado")
    }
    saldoFinal = receitas - despesas
    console.log(`Seu saldo: R$${saldoFinal.toFixed(2)}`)
}

balancoFamilia()