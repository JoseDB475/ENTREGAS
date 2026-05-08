// 1. Sumar elementos de un array:
// Crea una función sumarArray(array)
// que reciba un array de números y devuelva la suma.
// Ejemplo: sumarArray([1, 2, 3]) → 6.

function sumarArray (numeros){

    let suma = 0

    for (let i = 0; i<numeros.length; i++){

         suma += numeros[i]

    };
     return suma
};

const numeros = [7,75,97,103,151];

console.log(`la suma es ${sumarArray(numeros)}`);

