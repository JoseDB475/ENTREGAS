// 2.Encontrar el número mayor:
// Función numeroMayor(array) que retorne
// el número más grande de un array
// Ejemplo: numeroMayor([5, 2, 9, 1]) → 9.


const numeros = [7,9,12,45,97,87,76,36];
function sumarArray(numeros) {
   let mayor = 0

    for (let i = 0;    i<numeros.length;     i++) {
      if  (numeros [i]>mayor) {
        mayor = numeros[i]
      }
    }
    return mayor
};

console.log(sumarArray(numeros));

