## Objetivo
Projeto NodeJs em aula na DIO (Digital Innovation One)
Criar um carrinho de compras baseado no carrinho de compras da shopee, onde o carrinho de compras armazene itens e faça o calculo de sub-itens automaticamente.


//Dominio da aplicação: carrinho de compras

//As entidades representadas
//Carrinho = cart.js
//Itens = item.js

No código original do curso, havia um problema em que, ao removermos um item do carrinho, a quantidade do item era corretamente reduzida, mas o preço permanecia o mesmo, refletindo a quantidade antiga. Além disso, o subtotal não era atualizado após o cálculo inicial.
Realizei algumas adaptações no código e consegui resolver essa inconsistência, garantindo que o subtotal fosse recalculado corretamente após a remoção de itens.

![alt text](image.png)
