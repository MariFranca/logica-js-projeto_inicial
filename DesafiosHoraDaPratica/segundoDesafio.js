//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Insira qual dia da semana:');
if(diaDaSemana == 'sabado' ==  'domingo'){
    alert('Bom final de semana!');
}
else{
    alert('Boa semana');
}


//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let inserirNumero = prompt('Insira um número positovo ou negativo: ');
if(inserirNumero < 0){
    alert('Esse numero é negativo');
}
else{
    alert('Esse número é positivo');
}


//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Insira sua pontuaçao');
if(pontuacao >= 100){
    alert('Parabéns, voce venceu!');
}
else{
    alert('Você perdeu, tente novamente para ganhar.');
}


//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoNaConta = prompt('Insira o seu saldo na conta:');
alert(`O seu saldo disponível na conta é de ${saldoNaConta}`);


//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let inserirNome = prompt('Insira seu nome:');
alert(`Seja bem vindo(a) ${inserirNome}`);

