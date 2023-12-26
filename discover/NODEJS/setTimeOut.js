// setTimeOut roda uma função após X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')
const checking = () => console.log('checking!!')
//setTimeout(finished, timeOut)

//cleartimeout
//let timer = setTimeout(finished, timeOut)
//clearTimeout(timer)

//setInterval

//setInterval(checking, timeOut)

//clearInterval

let interval = setInterval(checking, timeOut)
clearInterval(interval)
