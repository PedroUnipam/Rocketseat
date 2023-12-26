/*comentarios são feitos assim*/
# Box model
Uma caixa retangular
Possui propriedades de uma caixa 2d
- Tamanho (altura x largura)  width x height
- Conteúdo       content
- Bordas        border
- Preenchimento interno     padding
- Espaços fora da caixa      margin

## display: block x display: inline
block:quebra linha. ex:div
inline: mesma linha. ex:strong

## margin
- margin-top  margin-right  margin-bottom  margin-left

 /* shorthand */

 margin: 12px 16px 10px 4px; (top, right, bottom, left)
 margin: 12px 16px 0; (top, right and left, bottom)
 margin: 8px 16px; (top and bottom, right and left)
 margin: 8px; (todos os lados)
 * cuidado com margin collapsing (top se ajunta ao bottom) (elementos inline não há collapsing apenas se soma)
 
 ## padding

 Preenchimento interno da caixa
- padding-top  padding-right  padding-bottom  padding-left
padding: 12px 16px 10px 4px; (top, right, bottom, left)
padding: 12px 16px 0; (top, right and left, bottom)
padding: 8px 16px; (top and bottom, right and left)
padding: 8px; (todos os lados)

*padding pode causar diferença na largura de um elemento

## border ( e outline)

As bordas da caixa
- value: `<border-style>` `<border-width>` `<border-color>`
    - style: solid, dotted, dashed, double, groove, ridge, inset, outset
    - width:`<length>`
    - color: `<color>`
div{
    /*shorthand*/
    border-top:solid 2px;

    /*style*/
    border:solid;
}
## e outline??
- difere em 4 sentidos:
    - não modifica o tamanho da caixa, pois não é parte do Box Model
    - poderá ser diferente de retangular
    - não permite ajustes individuais
    - Mais usado para acessibilidade