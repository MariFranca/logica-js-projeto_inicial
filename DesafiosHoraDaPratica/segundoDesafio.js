let diaDaSemana = prompt('Insira qual dia da semana:');
if(diaDaSemana == 'sabado' ==  'domingo'){
    alert('Bom final de semana!');
}
else{
    alert('Boa semana');
}

// --------------------------

let inserirNumero = prompt('Insira um número positovo ou negativo: ');
if(inserirNumero < 0){
    alert('Esse numero é negativo');
}
else{
    alert('Esse número é positivo');
}

// --------------------------

let pontuacao = prompt('Insira sua pontuaçao');
if(pontuacao >= 100){
    alert('Parabens, voce venceu!');
}
else{
    alert('Voce perdeu, tente novamente para ganhar');
}


// --------------------------

let saldoNaConta = prompt('Insira o seu saldo na conta:');
alert(`O seu saldo disponivel na conta é de ${saldoNaConta}`);

// --------------------------

let inserirNome = prompt('Insira seu nome:');
alert(`Seja bem vindo(a) ${inserirNome}`);

