// Elementos capturados do HTML. As VARIÁVEIS servem para armazenar dados e as FUNÇÕES para atualizar dados. 
 
const divRelogio = document. querySelector ('.relogio');
const inputNome = document.querySelector('.inputNome');
const inputPeso = document. querySelector('.inputPeso');
const inputAltura = document. querySelector('.inputAltura');
const botao = document.querySelector('button');
const divResultado = document.querySelector('.resultado');

let nome;
let peso;
let altura;

 //Espiao - Um método para indicar 

alert(1);
// Math.random( ) - retorna um número pseudo-aleatório entre 0 e 1.
let numeroAleatorio;
numeroAleatorio = Math.floor(Math.random() * 10); // usando a função Math.floor para arredondamento
console.log(`numeroAleatorio: ${numeroAleatorio}`);

// Math.floor( ) - retorna o maior inteiro que é menor ou igual a um número.
let numeroPiso;
numeroPiso = Math.floor(3.15);
console.log(`numeroPiso: ${numeroPiso}`);


botao. addEventListener ('click',function (evento){
    evento.preventDefault()

    nome = inputNome.value;
    peso = Number(inputPeso.value);
    altura = Number(inputAltura.value);

    let resultado = calculaIMC(peso,altura); 
    console.log(resultado); 

    divResultado.classList.add('resultadoStyle'); 
    divResultado.innerHTML= `${nome}, seu IMC é ${resultado.toFixed(2)}!`;
}); 

function calculaIMC (peso,altura) {
    let imc = peso/(altura*altura); 
    return imc; 
}

// Objeto Date - consiste em funções prontas que podem ser utilizadas para manipular o tempo
const  dataInicial = new Date();
console.log(dataInicial);
console.log(dataInicial.getHours());
console.log(dataInicial.getMonth());

// Utilizando o Objeto Date para criar um relogio (sem atualização automatica)
const dataAtual = new Date ();
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
console.log(`${horas}:${minutos}:${segundos}`);

// Utilizando o Objeto Date para criar um relogio (com atualização automatica)
function atualizaRelogio () {
    const dataAtual = new Date ();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

divRelogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}
atualizaRelogio ();
const relogio = setInterval(function (){
    atualizaRelogio ();
} , 1000); 

setTimeout (function(){
    clearInterval(relogio); 
},10000); 

//Repetição de códigos - utilizar uma função
function adicionaZero (numero) {
    if (numero<10) { // if - para inserir uma condição
        numero = '0'+ numero;
    }
    return numero; 
}
// A variável let pode mudar a const não. 
