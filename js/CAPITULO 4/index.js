let cadena = "   prueba prueba  "
let cadena2 = 50
let resultado

// resultado = cadena.concat(cadena2) // juntar dos cadenas y retornar una nueva
// resultado = cadena.startsWith(cadena2) // mira si una cadena comienza con la otra
// resultado = cadena.endsWith(cadena2) // mira si una cadena termina con la otra
// resultado = cadena.includes(cadena2) // mira si se ecuentra dentro de la cadena
// resultado = cadena.indexOf("pru") // mira si se encuentra dentro de la cadena y devulve su posicion (la primera que encuentre)
// resultado = cadena.lastIndexOf("prueba") // mira si se encuentra dentro de la cadena y devuelve su posicion (la ultima que encuentre)

// resultado = cadena.padStart(11, "1234") //me rellena una cadena al inicion el primer valor nos dice el tamano hasta que se quiere, el segundo, con lo que se quiere rellenar
// resultado = cadena.padEnd(10, "1234") //me relle na una cadena al final el primer valor nos dice el tamano hasta que se quiere, el segundo, con lo que se quiere rellenar
// resultado = cadena.repeat(0) // me repite la cadena las veces que lo desee
// resultado = cadena.split("como") // me divide en array donde lo dividamos 
// /resultado = cadena.substring(0, 10) // me retorna una cadena desde la posicion 1 a las 2 (0, 10)
// resultado = cadena.toLocaleLowerCase() // convertir a minuscula
// resultado = cadena.toLocaleUpperCase() // convertir a MAYUSCULA
// resultado = cadena2.toString() // convertir a string
// resultado = cadena.trim() // me elimina los espacios en blanco los que estan dentro de ''\\ "'   'pedro'   '"
// resultado = cadena.trimStart() // elimina solo los espacios del final  "pedro   "
// resultado = cadena.trimEnd() // elimina solo los espacios del inicio "   pedro"

// METODOS DE ARRAYS

let nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"]
let resultados

// TRANSFORMADORES

// resultados = nombres.pop() // eliminar el ultimo elemento de un array y muestra cual elimino
// resultados = nombres.shift() // eliminar el primer elemento de un array y muestra cual elimino
// resultados = nombres.push("steven", "robert") // nos agrega un elemento al final del array y nos muestra la cantidad de elementos
// nombres.reverse() //invierte los elementos de un array
// nombres.unshift(0, 1, 2) // agrega elementos al inicio de un array
// nombres.sort() // ordena de menor a mayor o de forma alfabetica
// nombres.splice(1, 3, "gustabo") // elimina desde la posicion que le damos inicial la cantidad de elementos que le damos al final, desde la posicion 1 elimina tres elementos despues de los valores iniciales(1, 3) puedo agregar valoren dentro del array en esas posiciones (1, 3, "gustabo")
// nombres.splice(1, 0, "gustabo") // tambien puedo dar una posicion inicial y no eliminar nada (3, 0) y a partir de esa posicion agregar nuevos elementos

// ACCESORES
// resultados = nombres.join(" - ") // convierte a una sola cadena de texto pero podemas decirle como se separen los elementos entre ellos
// resultados = nombres.slice(0, -1) // devuelve una parte de array dentro de un nuevo array empezando por un inicio hasta fin (fin no incluido)

// De Repeticion

let numeros= ["abecedario", "manzana", "pedro", "bobo", "pedro"]

resultados = numeros.filter(numero => numero.length > 5)
document.write(resultados)

// numeros.forEach(numero => {
//     document.write(numero + "<br>")
// })
