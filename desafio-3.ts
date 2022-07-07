// Corrigir os erros do codigo:

/*let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
*/

//Minha resposta:

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLTitleElement;

campoSaldo.innerHTML = '0'

function somarAoSaldo(soma:number) {
    campoSaldo.innerHTML = (parseInt(campoSaldo.innerHTML) +  soma).toString();
    
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    let somaFinal = parseInt(soma.value)
    if(!somaFinal){
       alert('Digite um número válido');
    } else {  
        soma.value = ''
        somarAoSaldo(somaFinal);
    }
   
});



botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
