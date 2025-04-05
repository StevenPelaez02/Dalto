// 

class Calculadora{
    constructor(){
    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2)
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2)
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2)
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2)
    }
    potencia(num1, num2){
        return parseInt(num1) ** parseInt(num2)
    }
    raizCuadrada(num1){
        return parseInt(Math.sqrt(num1))
    }
    raizCubica(num1){
        return parseInt(Math.cbrt(num1))
    }
}

const calculadora = new Calculadora()
let operacion

// alert("Que operacion deseas realizar?")
// operacion = prompt(`
//                     1. sumas
//                     2. resta
//                     3. multiplicacion
//                     4. division
//                     5. potencia
//                     6. raiz cuadrada
//                     7. raiz cubica`)

if(operacion == 1){
    let numero1 = prompt("primer numero para sumar")
    let numero2 = prompt("segundo numero para sumar")
    resultado = calculadora.sumar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 2){
    let numero1 = prompt("primer numero para restar")
    let numero2 = prompt("segundo numero para restar")
    resultado = calculadora.restar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 3){
    let numero1 = prompt("primer numero para multiplicar")
    let numero2 = prompt("segundo numero para multiplicar")
    resultado = calculadora.multiplicar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 4){
    let numero1 = prompt("primer numero para dividir")
    let numero2 = prompt("segundo numero para dividir")
    resultado = calculadora.dividir(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 5){
    let numero1 = prompt("numero base")
    let numero2 = prompt("numero a elevar")
    resultado = calculadora.potencia(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 6){
    let numero1 = prompt("numero a sacar su raiz cuadrada")
    resultado = calculadora.raizCuadrada(numero1)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 7){
    let numero1 = prompt("numero a sacar su raiz cubica")
    resultado = calculadora.raizCubica(numero1)
    alert(`tu resultado es: ${resultado}`)
}

//

const obtenerInformacion = (materia) =>{
    const materias = {
        fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"]
    }

    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias]
    } else {
        return materias
    }
}

const mostrarInfo = (materia) =>{
    let informacion = obtenerInformacion(materia)

    if(informacion !== false){
        let profesor = informacion[0][0]
        let alumnos = informacion[0]
        alumnos.shift()
        document.write(`El profesor de: <b>${informacion[1]}:</b> <b style='color:red'>${profesor}</b><br>
                        los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`)
    }
}

const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInformacion(alumno)
    let clasesPresentes = []
    let cantidad = 0
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidad++
            clasesPresentes.push(" " + info)
        }
    }
    return `<b style='color:blue'> ${alumno}</b> esta en <b>${cantidad} clases: </b><b style='color:green'>${clasesPresentes}</b><br><br>`
}

mostrarInfo("fisica")
mostrarInfo("programacion")
mostrarInfo("logica")
mostrarInfo("quimica")

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))
