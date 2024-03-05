/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite o número da opção desejada

    1.Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

---
O programa deverá capturar o número  digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
    se não houver itens cadastrados, mostre a mensagem:
        "Não há itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/
let option;
let list = [] 


while(option != 3){
    option = Number(prompt(`Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    switch(option) {
        case 1:
            let item = prompt("Qual item deseja cadastrar?")
            list.push(item)
            break;
        case 2:
            if(list.length >= 1){
                alert(list)
            }else{
                alert("Não há itens cadastrados")
            }
            break;
        case 3: 
            alert("Tchau")
        default:
            break;
    }
}

