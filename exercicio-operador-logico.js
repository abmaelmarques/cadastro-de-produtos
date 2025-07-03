

let precoProdutoA = prompt("digite o preco do produtoA:");
let precoProdutoB = prompt("digite o preco do produtoB:");


if (precoProdutoA < precoProdutoB) {
	console.log("Produto A é mais barato que Produto B");
}else if (precoProdutoB < precoProdutoA){
	console.log("Produto B é mais barato que Produto A");
}else {
	console.log("Os Produtos tem o mesmo preço.")
}
