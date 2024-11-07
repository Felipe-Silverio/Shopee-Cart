import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];

console.log("Welcome to the your Shopee cart");

const item1 = await createItem("HotWheels Ferrari", 20.99, 1);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

//Adiciona o item ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//Remove um item do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

//Exibe o carrinho
await cartService.displayCart(myCart);

//---Deleta um item inteiro do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

//Calculo total dos preços dos itens do carrinho
await cartService.calculateTotal(myCart);



