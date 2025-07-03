const prompt = require('prompt-sync')();

let opcao = 0;
let alunos = [];


while (opcao !== 5) {
  console.log("\n===== MENU =====");
  console.log("1 - Cadastrar aluno e calcular média");
  console.log("2 - Verificar se o último aluno está aprovado");
  console.log("3 - Listar todos os alunos");
  console.log("4 - Sair");

  console.log("================");

  opcao = parseInt(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      console.log("Você escolheu cadastrar o aluno.");

      const nome = prompt("Digite o nome do aluno: ");
      const nota1 = parseFloat(prompt("Digite a primeira nota: "));
      const nota2 = parseFloat(prompt("Digite a segunda nota: "));
      const nota3 = parseFloat(prompt("Digite a terceira nota: "));

      const media = (nota1 + nota2 + nota3) / 3;
      alunos.push({ nome: nome, media: media });

      console.log(`\nO aluno ${nome} teve média: ${media.toFixed(2)}`);
      break;

    case 2:
      console.log("Você escolheu verificar a situação do último aluno.");

      if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado ainda.");
      } else {
        const ultimo = alunos[alunos.length - 1];
        console.log(`Aluno: ${ultimo.nome}`);
        console.log(`Média: ${ultimo.media.toFixed(2)}`);

        if (ultimo.media >= 7) {
          console.log("Situação: Aprovado");
        } else if (ultimo.media >= 5 && ultimo.media < 7) {
          console.log("Situação: Recuperação");
        } else {
          console.log("Situação: Reprovado");
        }
      }
      break;

    case 3:
            console.log("\nLista de alunos cadastrados:");
            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
            } else {
            for (let i = 0; i < alunos.length; i++) {
                console.log(`${i + 1}. ${alunos[i].nome} - Média: ${alunos[i].media.toFixed(2)}`);
            }
            }
      break;

    case 4:
   
      console.log("\nSaindo do sistema...");
      break;


    default:
      console.log("\nOpção inválida. Tente novamente.");
  }
}
