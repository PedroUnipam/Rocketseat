/*
Capture 10 itens para compor a lista de um supermercado

Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let lista = [];

for(let itens = 0; itens < 10; itens++){
    lista[itens] = prompt("Qual item deseja adicionar? ")
}

alert(lista)