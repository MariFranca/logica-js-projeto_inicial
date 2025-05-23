console.log('Boas vindas ao site ');

//----------------------------------

let nome = 'Mariana';
console.log(nome);
alert(`Olá ${nome}`);

//----------------------------------

let linguagemDeProgramacao = prompt('Qual a linguagem de programação você mais gosta? ');
console.log(linguagemDeProgramacao);

//----------------------------------

let valor1 = 30;
let valor2 = 50;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

//----------------------------------

let idade = prompt('Insira a sua idade: ');
if(idade >= 18){
    console.log(`Olá segunda a idade que voce inseriu que é ${idade} anos, você é maior de idade.`);
} else{
    console.log(`Segundo a idade que você inseriu que é ${idade} anos, você é menor de idade. `);
}

//----------------------------------

let numero = prompt('Insira um némero da sua preferencia (podendo ser positivo, negativo ou zero): ');

if(numero > 0){
    alert(`O número ${numero} é positivo`);
} else if(numero < 0){
    alert(`O número ${numero} é negativo`);
} else{
    alert(`O número ${numero} é zero`);
}

//----------------------------------

contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

//----------------------------------

let nota = prompt('Insira sua nota aqui: ');
if(nota <= 7){
    alert('REPROVADO :(');
} else{
    alert('APROVADO :)');
}

//----------------------------------

console.log(parseInt(Math.random() * 10 + 1));

//----------------------------------

console.log(parseInt(Math.random() * 1000 + 1));