let materias = {
    fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"]
    }


const inscribir = (alumno, materia) =>{
    let personas = materias[materia]
    if(personas.length >= 21){
        document.write(`lo siento <b>${alumno}</b> las clases ya estan llenas<br><br>`)
    } else {
        personas.push(alumno)
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
                }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
                }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programcion'],
                logica: personas,
                quimica: materias['quimica']
                }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programcion'],
                logica: materias['logica'],
                quimica: personas
                }
        }
        document.write(`Felicidades ${alumno}! te has inscrito a ${materia} correctamente<br><br>`)
    }
}

document.write(materias["fisica"] + "<br><br>")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
inscribir("pedrito", "fisica")
document.write(materias["fisica"] + "<br><br>")