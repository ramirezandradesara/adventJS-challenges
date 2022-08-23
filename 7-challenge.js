// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

// const almacen = {
//   'estanteria1': {
//     'cajon1': {
//       'producto1': 'coca-cola',
//       'producto2': 'fanta',
//       'producto3': 'sprite'
//     }
//   },
//   'estanteria2': {
//     'cajon1': 'vacio',
//     'cajon2': {
//       'producto1': 'pantalones',
//       'producto2': 'camiseta' // <- ¡Está aquí!
//     }
//   }
// }

// contains(almacen, 'camiseta') // true

// const otroAlmacen = {
//   baul: {
//     fondo: {
//       objeto: "cd-rom",
//       "otro-objeto": "disquette",
//       "otra-cosa": "mando",
//     },
//   },
// };

// contains(otroAlmacen, 'gameboy') // false
// Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones. Lo importante es buscar que el producto está en los almacenes.

function contains(store, product) {

  return  typeof store == "object" ? 
  !!Object.keys(store).find(e => product === store[e] ? true : contains(store[e], product)) : false
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

console.log(contains(almacen, 'gameboy')); 

var obj = [{
  "seccion1": {
    "level1": {
      first: "John",
      last: "Doe"
    },
    "level2": {
      first: "juan",
      last: "perez"
    }
  }
}]

function printObject(o) {
  let text = '';
  Object.keys(o).forEach(key => {
    if (typeof o[key] === 'object') {
      // objeto: mostramos la clave y hacemos una llamada recursiva
      text += `${key} ${printObject(o[key])}`;
    } else {
      text += `${o[key]} `; //primitivo: directamente imprimimos el valor
    }
  });
  return text;
}

// console.log(printObject(obj));

// const obj = [{
//   "seccion1": {
//     "level1": {
//       first: "John",
//       last: "Doe" },
//     "level2": {
//       first: "juan",
//       last: "perez" }
//   }
// }]

// const ultimaIteracion = 2
// console.log(obj.length);

// function iterarObjeto(objeto, numeroIteracion) {
//   if (numeroIteracion == ultimaIteracion) {
//     console.log(objeto);
//     return;
//   }
//   Object.keys(objeto).forEach(function (key) {

//     if (typeof (objeto[key]) === "object") {
//       console.info(`objeto ${key} vamos a iterar!`);
//       iterarObjeto(objeto[key], numeroIteracion + 1)
//     }

//   });
// }

// obj.forEach(function (item) {
//   iterarObjeto(item, 0)
// });

