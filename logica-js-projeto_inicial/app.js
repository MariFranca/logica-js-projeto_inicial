alert('Seja bem vindo ao nosso jogo numero secreto');

let tentativas = 1;
let numeroMaximo = 100;
let chute; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);


while(chute != numeroSecreto){
    chute = prompt(`Insira um número de 0 a ${numeroMaximo}: `);

    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}, tente de novo `);
        } else{
            alert(`O numero secreto é maior que ${chute}, tente de novo`); 
        }
        tentativas++;
    }
}
let palavras = tentativas > 1 ? 'tentativas': 'tentativa'
alert(`Parabens voce acertou o número secreto era ${numeroSecreto} com ${tentativas} ${palavras}`);