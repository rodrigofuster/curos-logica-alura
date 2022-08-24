function imprimeTexto(texto) {
    console.log(texto);
}

//imprimeTexto("olá mundo!")

var meutexto = "Meu nome é Pedro"; 

//imprimeTexto(meutexto)


// três formas de declarar funções 

// declaração de função 

function name(params) {
    
}

function soma(numero1, numero2) {
    const resultado = numero1 + numero2; 
    return resultado
}

//console.log(soma());

// função com parâmentros 

function multiplica( num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));