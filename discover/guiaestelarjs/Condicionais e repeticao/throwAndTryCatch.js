//throw

function sayMyName(name = '') {
    if (name == '') {
        throw 'Name é obrigatório'
    }

    console.log('Depois do erro')
}


//try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}

console.log('após a função de erro')