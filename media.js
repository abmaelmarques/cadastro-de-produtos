const prompt = require('prompt-sync')();

let opcao = 0;
let nome = "";
let nota1 = 0, nota2 = 0, nota3 = 0;
let media = 0;
let alunos =[];

while (opcao !==3){
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar aluno e calcular media");
    console.log("2 Verificar se o aluno está Aprovado");
    console.log("3 - Sair");
    console.log("============");

    opcao =parseInt(prompt("Escolha uma opcao: "));

    switch (opcao){
        case 1:
            console.log("Voce escolheu cadastrar o Aluno.");
             nome = prompt("Digite o nome do Aluno:");
             nota1 = parseFloat(prompt("Digite a primeira nota: "));
             nota2 = parseFloat(prompt("Digite a segunda nota: "));
             nota3 = parseFloat(prompt("Digite a terceira nota: "));
             
            media =(nota1+nota2+nota3)/3;

            console.log(`\nO Aluno ${nome} teve media: ${media.toFixed(2)}`);
            
        break;

        case 2:
           
            console.log("Voce escolheu verificar a situação do Aluno.");
            
            if (media === 0){
                console.log ("Nenhuma Media Calculada. Cadastre um Aluno primeiro.");
            }else if (media >=7) {
                console.log("Situação: Aprovado");
            }else if(media >5 && media <7){
                console.log("Situação: Recuperação");
            }else{
                console.log("Situação: Reprovado");
            }
        break;

        case 3:
            console.log("\nSaindo do Sistema..");
            break;
    default:
        console.log("\nOpçao Invalida. Tente Novamente.");
            
    }
}