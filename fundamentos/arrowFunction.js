// utiliza "=>" 

//Arrow com uma linha
const apresenta = nome => `meu nome é ${nome}`; 

const soma = (num1, num2) => num1 + num2; 

//console.log(apresenta("Pedro"));

//console.log(soma(2, 5));

//Arrow com mais linhas 

const somaPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return "Apenas números menores que 10."; 
    } else {
        return num1 + num2; 
    }
}

console.log(somaPequenos(9,4))