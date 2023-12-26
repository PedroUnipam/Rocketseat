function sayMyName(name){
    console.log('antes de executar função callback')
    name()
    console.log('depois de executar callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
