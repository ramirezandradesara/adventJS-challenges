// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// ____*____ 1 / 4
// ___***___ 3 / 3
// __*****__ 5 / 2
// _*******_ 7 / 1
// ********* 9
// ____#____ 4
// ____#____ 4

// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

// Otro ejemplo con un árbol de altura 3:

// __*__ 1 / 2
// _***_ 3 / 1
// ***** 5
// __#__ 2
// __#__ 2

// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

function createXmasTree(height) {
  let tronco =
    "_".repeat(height - 1) +
    "#" +
    "_".repeat(height - 1) +
    "\n" +
    "_".repeat(height - 1) +
    "#" +
    "_".repeat(height - 1);

  let hojas = "";
  let arbol = "";

  let asteriscos = 1;
  let guiones = height - 1;

  for (let i = 0; i < height; i++) {
    hojas +=
      "_".repeat(guiones) + "*".repeat(asteriscos) + "_".repeat(guiones) + "\n";
    asteriscos += 2;
    guiones -= 1;
  }

  arbol = hojas + tronco;
  
  return arbol;
}

createXmasTree(3);
createXmasTree(5);
createXmasTree(20);
