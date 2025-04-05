var1 = 5
var2 = "string" // 'string' `string`
var3 = 4.5
var4 = true
var5 = null
var6 = NaN
var7 = undefined

if(var1 !== var2){
    console.log("hola")
} 
else if (true === true){
    console.log("hola")
} else {
    console.log("hola")
}

for(let i = 0; i < 10; i++){
    break
}

// for(numero in var1){
//     break
// }

// for(numero of var1){
//     break
// }

while(true && true || true || !true){
    break
}

do{
    console.log("X")
    break
}while(true)

const materias = {
    matematicas:  ["geometria", "matematicas", "fisica"],
    Español: ["plan lector", "español",],
    otras: ["artistica", "sociales"]
}

let array = [1, 2, 3, 4, "hola"]

const function1 = (var1, var2) => {
    return
}

function function2(){
    return
}

class animal{
    constructor(raza, patas, especie, peligro){
        this.raza = raza
        this.patas = patas
        this.especie = especie
        this.peligro = peligro
        this.info =`raza: ${this.raza} <br>
                    patas: ${this.patas} <br>
                    especie: ${this.especie} <br>
                    peligro: ${this.peligro} <br>`
    }
    set setRaza(newName){
        this.raza = newName
        this.info =`raza: ${this.raza} <br>
                    patas: ${this.patas} <br>
                    especie: ${this.especie} <br>
                    peligro: ${this.peligro} <br>`
    }

    get getRaza(){
        return this.raza
    }

    verInfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends animal{
    constructor(raza, patas, especie, peligro, comida, casa){
        super(raza, patas, especie , peligro)
        this.comida = comida
        this.casa = casa
    }
}
const perros = new animal("perro", 5, "marron", 4)

perros.setRaza = "haha"
// perros.verInfo()

let texto = " Hola Mundo "
let comparar = "ola"

document.write(texto.concat(comparar) + "<br>") // concatena el texto con lo que le pasemos
document.write(texto.startsWith(comparar) + "<br>") // inicia con COMPRAR
document.write(texto.endsWith(comparar) + "<br>") // termina con COMPARAR
document.write(texto.includes(comparar) + "<br>") // mira si COMPARAR esta dentro de texto
document.write(texto.indexOf(comparar) + "<br>") // muestra la posicion del primer caracter donde lo encuentre
document.write(texto.lastIndexOf(comparar) + "<br>") // muestra la posicion del ultimo caracter donde lo encuentre

document.write(texto.padStart(20, "jajaja") + "<br>") // me rellena al inicio la cadena, el primero te da el tamaño de la cadena
document.write(texto.padEnd(20, "kaaja") + "<br>") // me rellena al final la cadena, el primero te da el tamaño de la cadena
document.write(texto.repeat(3) + "<br>") // te repite la cadena las veces que tu desees
document.write(texto.split(" ") + "<br>") // me lo divide por lo que yo desee y me devuelve un array
document.write(texto.substring(0, 5) + "<br>") // me devuelve una cadena desde la primera posicion dada hasta la ultima
document.write(texto.toLowerCase() + "<br>") // convertir toda la cadena a minusculas
document.write(texto.toUpperCase() + "<br>") // convertir toda la cadena a mayusculas
document.write(texto.trim(comparar) + "<br>") // elimina los espacios al inicio y final de una cadena " hola mundo " = "hola mundo"
document.write(texto.trimStart(comparar) + "<br>") // elimina los espacios al inicio de una cadena " hola mundo " = "hola mundo "
document.write(texto.trimEnd(comparar) + "<br>") //elimina los espacios al final de una cadena " hola mundo " = "hola mundo"

let nombres = ["steven", "antonio", "kevin", "santiago"]

nombres.push("camilo") // me agrega un nombre al final del arreglo
nombres.pop() // Elimina el ultimo elemento de un arreglo
nombres.shift() // elimina el primer elemento de un arreglo
nombres.length // tamaño del arreglo
nombres.sort() // ordena de menor a mayor
nombres.reverse() // invierte el arreglo 
nombres.unshift("xxx", "xxx", "xxx") // me agrega elementos al inicio de un arreglo
nombres.splice(2, 2, "ZZZ") // se para en el indice 2 y elimina los elemtos que se deseen en este caso 2 y agrega si se desean
nombres.splice(3, 0, "AAA") //se para en el indice 2 y elimina los elemtos que se deseen en este caso 0 y agrega si se desean

document.write(nombres)


// document.write(texto.toLowerCase() + "<br>") // convertir toda la cadena a minusculas
// document.write(texto.toUpperCase() + "<br>") // convertir toda la cadena a mayusculas
// document.write(texto.replace(comparar, "ggg") + "<br>") // donde encuentre la cadena lo reemplaza por lo que queremos
// document.write(texto.length + "<br>") // te dice el tamaño de toda la cadena
// document.write(texto.repeat(2) + "<br>") // te repite la cadena las veces que tu desees
// document.write(texto.substring(" ") + "<br>") //

let numero1 = 10
let arreglos = [3, 43, 56, 444, 2, 2, 1, 453, 45]

numero1 = numero1 + numero1
numero1 = numero1 - numero1
numero1 = numero1 * numero1
numero1 = numero1 / numero1
numero1 = numero1 ** numero1

Math.sqrt(numero1)
Math.cbrt(numero1)

numero1 = Math.max(arreglos) // me devuelve el maximo
numero1 = Math.min(arreglos) // me duvuelve el minimo
numero1 = Math.floor(numero1) // me devuelve el piso
numero1 = Math.round(numero1) // me devulve el redondeo
numero1 = Math.random()*100 // numero random
numero1 = Math.fround() // redondea los numeros decimales
numero1 = Math.trunc() // elimina los decimales


Math.PI
Math.E
Math.LN10
Math.LOG10E
Math.LOG2E
Math.SQRT2
Math.pow(2)