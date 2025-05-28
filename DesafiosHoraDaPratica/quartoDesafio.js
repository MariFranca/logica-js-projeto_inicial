//1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas ao site ');


//2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador e 3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = 'Mariana';
console.log(nome);
alert(`Olá ${nome}`);


//4.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemDeProgramacao = prompt('Qual a linguagem de programação você mais gosta? ');
console.log(linguagemDeProgramacao);


//5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 30;
let valor2 = 50;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);


//6.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Insira a sua idade: ');
if(idade >= 18){
    console.log(`Olá segunda a idade que voce inseriu que é ${idade} anos, você é maior de idade.`);
} else{
    console.log(`Segundo a idade que você inseriu que é ${idade} anos, você é menor de idade. `);
}


//7.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Insira um némero da sua preferência (Podendo ser positivo, negativo ou zero): ');

if(numero > 0){
    alert(`O número ${numero} é positivo.`);
} else if(numero < 0){
    alert(`O número ${numero} é negativo.`);
} else{
    alert(`O número ${numero} é zero.`);
}


//8.Use um loop while para imprimir os números de 1 a 10 no console.
contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}


//9.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt('Insira sua nota aqui: ');
if(nota <= 7){
    alert('Reprovado :(');
} else{
    alert('Aprovado :)');
}


//10.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random)

//11.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(Math.random() * 10 + 1));


//12.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random() * 1000 + 1));