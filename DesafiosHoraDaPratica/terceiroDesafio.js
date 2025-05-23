let contadorAdicao = 1;
while(contadorAdicao < 10){
    console.log(contadorAdicao);
    contador++;
}

// -----------------------

let contadorSubtracao = 10;
while(contadorSubtracao >= 0){
    console.log(contadorSubtracao);
    contadorSubtracao--;
}

// -----------------------

let contagemRegressiva = prompt('Insira um numero que deseja iniciar a contagem:');
while(contagemRegressiva >= 0){
    console.log(contagemRegressiva);
    contagemRegressiva--;
}

// -----------------------

let contagemProgressiva = prompt('Insira um número para iniciarmos a contagem progressiva:');
let contador = 0;
while(contador <= contagemProgressiva){
    console.log(contador);
    contador++;
}