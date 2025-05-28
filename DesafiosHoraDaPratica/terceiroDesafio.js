//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contadorAdicao = 1;
while(contadorAdicao < 10){
    console.log(contadorAdicao);
    contador++;
}


//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorSubtracao = 10;
while(contadorSubtracao >= 0){
    console.log(contadorSubtracao);
    contadorSubtracao--;
}


//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagemRegressiva = prompt('Insira um numero que deseja iniciar a contagem regressiva:');
while(contagemRegressiva >= 0){
    console.log(contagemRegressiva);
    contagemRegressiva--;
}


//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagemProgressiva = prompt('Insira um número para iniciarmos a contagem progressiva:');
let contador = 0;
while(contador <= contagemProgressiva){
    console.log(contador);
    contador++;
}