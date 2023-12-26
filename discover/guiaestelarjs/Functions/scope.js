// function scope
let subject

function createThink(subject) {
    subject = 'study'
    return subject 
}


console.log(createThink(subject))