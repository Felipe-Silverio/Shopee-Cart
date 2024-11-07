//Casos de uso dos itens

//Criar item com subtotal certo
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal:(newPrice, newQuantity) => newPrice * newQuantity,
    }
}

export default createItem;