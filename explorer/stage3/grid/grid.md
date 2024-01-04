##  PROPRIEDADES FUNDAMENTAIS

Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: os filhos`


### CONTAINER (PAI)

- display: grid;
- grid-template;
    - grid-template-columns; (grid-template-columns: 100px 200px 300px;)  organiza em 3 colunas dando a elas o tamanho escrito (grid-template-columns: 1fr 1fr 1fr;) 1 fr = 1fracao
    - grid-template-rows; 
    - grid-template-areas;
-gap;
    - row-gap;
    - column-gap;



### ITENS (FILHOS)

- grid-column;
    - grid-column-start;
    - grid-column-end;
- grid-row;
    - grid-row-start;
    - grid-row-end;

#app div:nth-child(1){
    grid-column: 1/4;
    grid-row: 2/4;
}

- grid-area;

body{
    margin: 0;
}

#app{
    display: grid;
    
    grid-template-areas:
     "header header header"
     "main main aside"
     "footer footer footer"
     ;

    grid-template-rows: 100px 1fr 100px;
    grid-template-columns: 80%;

    height: 100vh;
    border: 2px solid green;

    column-gap: 20px;
    row-gap: 50px;
}

#app > *{
    border: 1px solid red;
}

#app header{
    grid-area: header;
}

#app main{
    grid-area: main;
}


#app footer{
    grid-area: footer;
}