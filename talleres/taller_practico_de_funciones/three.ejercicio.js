// 3. Contar elementos pares:
// Función contarPares(array) que cuente
// cuántos números pares hay.
// Ejemplo: contarPares([3, 8, 2, 10]) → 3.


const numeros = [1,3,5,7,9,24,46,68,70,71,63,71,95,102,114];

function contarPares (numeros){

     let conteo = 0;

    for (let index = 0; index < numeros.length; index++) {

         if (numeros[index] % 2 == 0){ 
             conteo ++
         }
    }
    
    return conteo
    

}

console.log(contarPares(numeros));
