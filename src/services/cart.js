import createItem from "./item.js";

//Quais ações o carrinho pode fazer
//Casos de uso

//Função de adicionar um item ao carrinho
async function addItem(userCart, item){
userCart.push(item);
};

//Função de deletar um item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1);
    }
};

//Função de remover itens do carrinho
//Obs: a função deleteItem() remove o item do carrinho independente da quantidade.
//A removeItem() tira apenas 1 unidade do item no carrinho
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p)=> p.name === item.name);
    
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
    }
};

//Calcular total do carrinho
async function calculateTotal(userCart){
    console.log("\nShopee cart total is:")
    //reduce() percorre um item todo e permite fazer uma ação para cada atributo do item
    const result = userCart.reduce((total, item)=> total + item.subtotal(item.price, item.quantity), 0);
    console.log(`\n 🛍️  Total:${result}`);
};

//Exibe o carrinho no terminal
async function displayCart(userCart){
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index)=> {
       console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal(item.price, item.quantity)}`);
})
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}
