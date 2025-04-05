#creando una lista (se pueden modificar)
lista = ["Lucas Dalto", "Soy Dalto", True, 1.85]

#creando una tupla (no pueden modificar)
tupla = ("Lucas Dalto", "Soy Dalto", True, 1.85)

#esto es valido
lista[3] = "Maquinola"

#esto no
#tupla[3] = "Maquinola" 

#creando un conjunto (set) (no se accede a elementos por su indice, no almacena datos duplicados)
conjunto = {"Lucas Dalto", "Soy Dalto", True, 1.85}

#print(conjunto[3]) -> no puede acceder al elemento

#creando un diccionario (dict) (la estrucutura es key : value y separamos con comas)
diccionario = {
    'nombre' : "Lucas Dalto",
    'canal' : "Soy Dalto",
    'esta_emocionado' : True,
    'altura' : 1.85,
    'dato_duplicado' : "Soy Dalto"
}

print(diccionario['nombre'])
print(lista[3])