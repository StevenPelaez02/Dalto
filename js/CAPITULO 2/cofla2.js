
// Problema 1
// 

// let free = false

// const validarCliente = (time)=>{
//     let edad = prompt("Cual es tu edad?")
//     if(edad >= 18){
//         if(time >= 2 && time < 7 && free == false){
//             alert("podes pasar gratis")
//             free = true;
//         } else {
//             alert(`son las $${time}:00 y podes pasar, pero debes pagar`)
//         }

//     } else {
//         alert("No podes pasar")   
//     }
// }

// validarCliente(23)
// validarCliente(244)
// validarCliente(0.2)
// validarCliente(0.6)
// validarCliente(1)
// validarCliente(2)
// validarCliente(2.4)
// validarCliente(3)



// Problema 2
// Registrar los alumnos que estan presentes y ausentes

// let cantidad = prompt("Cuantos alumnos son?")
// let alumnosTotales = []

// for(let i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0]

// }
// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre)
//     if(presencia == "p" || presencia == "P"){
//         alumnosTotales[p][1]++
//     }
// }

// for (let i = 0; i < 30; i++){
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno)
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     __________________Presentes: ${alumnosTotales[alumno][1]} <br>
//     __________________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
//     if(30 - alumnosTotales[alumno][1] > 18){
//         resultado += " REPROBADO POR INASISTENCIAS <br><br>"
//     } else {
//         resultado += "<br><br>"
//     }
//     document.write(resultado)
// }

// Problema 3
// Crear calculadora que simplifique el trabajo

const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2)
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2)
}

alert("Que operacion deseas realizar?")
operacion = prompt(`
                    1. sumas
                    2. resta
                    3. multiplicacion
                    4. division`)
if(operacion == 1){
    let numero1 = prompt("primer numero para sumar")
    let numero2 = prompt("segundo numero para sumar")
    resultado = sumar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 2){
    let numero1 = prompt("primer numero para restar")
    let numero2 = prompt("segundo numero para restar")
    resultado = restar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 3){
    let numero1 = prompt("primer numero para multiplicar")
    let numero2 = prompt("segundo numero para multiplicar")
    resultado = multiplicar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}
else if(operacion == 4){
    let numero1 = prompt("primer numero para dividir")
    let numero2 = prompt("segundo numero para dividir")
    resultado = dividir(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)
}

switch(i){
    case 1:
        //
        break
    case 2:
        //
        break
    default:
        break
}