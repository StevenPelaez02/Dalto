let numeroParaSumar = 10

// while (numeroParaSumar < 6){
//     numeroParaSumar++
//     document.write(numeroParaSumar + "<br>")
// }

// do{
//     document.write(numeroParaSumar + "<br>")
//     numeroParaSumar++
// }while(numeroParaSumar < 6)

// while(numeroParaSumar < 100){
//     numeroParaSumar++
//     if(numeroParaSumar == 10)
//         break
// }

// document.write("fin")

// for(let i = 0; i < numeroParaSumar; i++){
//     document.write(i + "<br>")
// }

// let animales = ["gato", "perro", "tiranosaurio rex"]

// for(animal in animales){
//     document.write(animal + "<br>")
// }

// document.write("<br>")

// for(animal of animales){
//     document.write(animal + "<br>")
// }

array1 = ["maria", "josefa", "roberta"]
array2 = ["pedro", "marcelo", array1, "josefina"]

forRancio:
for(array in array2){
    if(array == 2){
        for(let array of array1){
            continue forRancio
            document.write(array + "<br>")
        }
    }else{
        document.write(array2[array] + "<br>")
    }
}