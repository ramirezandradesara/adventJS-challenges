// Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

// Si no se encuentra, se devuelve null.

// Veamos unos ejemplos:

// sumPairs([3, 5, 7, 2], 10) // [3, 7]
// sumPairs([-3, -2, 7, -5], 10) // null
// sumPairs([2, 2, 3, 1], 4) // [2, 2]
// sumPairs([6, 7, 1, 2], 8) // [6, 2]
// sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
// El resultado tiene que ser un array con dos números.

// Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?

function sumPairs(numbers, result) {
  let newArray = [];
  let num2;

  for (let i = 0; i < numbers.length; i++) {
    let resultadoSplice = numbers.splice(0, 1);
    // console.log(numbers);
    // let num1 = parseInt(resultadoSplice);
    let num1 = numbers[i];
    // console.log("🚀 ~ file: 6-challenge.js ~ line 28 ~ sumPairs ~ num1", num1)
    num2 = numbers.filter((n) => num1 + n === result);
    // console.log("🚀 ~ file: 6-challenge.js ~ line 30 ~ sumPairs ~ num2", num2)

    if (num2[0] !== undefined) {
      Number(num2);
      newArray.push(num1);
      newArray.push(num2);
      break
    //   if (newArray.length === 2) {
    //     break;
    //   }
    //    else {
    //     console.log("no hay coincidencias");
    //   }
    }
  }

//   if (newArray.length === 2) {
    return console.log(newArray.flat());
//   } else {
//     return console.log(null + "****");
//   }
}

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

// const arrayRandom = [5];
// const rdo = 6

// console.log(arrayRandom.filter((n) => n + 1 === rdo));


/* codigo de algueine xd*/
// export default function sumPairs(numbers, result) {
//     let numbersCopy = [...numbers];
//     let answer = null;
//     let counter = 0;
  
//     while (numbersCopy.length > 0 && answer === null)
//     {
//       const sum = numbersCopy[0] + numbersCopy[counter + 1];
//       sum === result ? answer = [numbersCopy[0] , numbersCopy[counter + 1]] : counter++;
//       if(counter >= (numbersCopy.length - 1)) {
//         numbersCopy.shift();
//         counter = 0;
//       }
//     }
  
//     return answer;
//   }
