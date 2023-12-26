# Cores

## Tipos
* background-color (para caixas)
* color (para textos)
* border-color(para-caixas)
* outros...

## Valores
 
Podemos definir os valores por

* palavra-chave (bliue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```
element{
    /*keyword values*/
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.4); /* 0-255 */
    color: rgb(34, 12, 64, 40%);

    /* <hsl()> values */
    color: hsl(40, 100%, 50%, 0.6) /* Hue - Saturation - Lumiance */

    /* Global Values */
    color: inherit;
    color: initial;
    color: unset;
    }
```css

## Referencia
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
https://convertacolor.com




