const prompt = require('prompt-sync')();

let opcao = 0;
let produtos = [];

while (opcao !== 5) {
  console.log("\n===== MENU =====");
  console.log("1 - Cadastrar novo produto");
  console.log("2 - Consultar último produto");
  console.log("3 - Listar todos os produtos");
  console.log("4 - Ver valor total do estoque");
  console.log("5 - Sair");
  console.log("================");

  opcao = parseInt(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      const nome = prompt("Nome do produto: ");
      const quantidade = parseInt(prompt("Quantidade: "));
      const preco = parseFloat(prompt("Preço unitário (R$): "));

      produtos.push({ nome, quantidade, preco });
      console.log(`Produto ${nome} cadastrado com sucesso.`);
      break;

    case 2:
      if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
      } else {
        const ultimo = produtos[produtos.length - 1];
        console.log(`Produto: ${ultimo.nome}`);
        console.log(`Quantidade: ${ultimo.quantidade}`);
        console.log(`Preço: R$ ${ultimo.preco.toFixed(2)}`);
      }
      break;

    case 3:
      if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
      } else {
        console.log("\nLista de Produtos:");
        for (let i = 0; i < produtos.length; i++) {
          console.log(`${i + 1}. ${produtos[i].nome} - Qtde: ${produtos[i].quantidade}, Preço: R$ ${produtos[i].preco.toFixed(2)}`);
        }
      }
      break;

    case 4:
      let total = 0;
      for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].quantidade * produtos[i].preco;
      }
      console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);
      break;

    case 5:
      console.log("Encerrando o sistema...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
