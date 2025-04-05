diccionario = {
    "nombre" : 'lucas',
    "apellido" : 'dalto',
    "subs" : 1000000
}

# nos devuelve un objeto dict_item
claves = diccionario.keys()

# obteniendo un elemento con get() (si no encuentra nada el programa continua)
valor_de_kasdks = diccionario.get("kasdks")
print("Hola Papa, el programa continua")

# elimiinando todo del diiccionario
#diccionario.clear()

# eliminando un elmento del diccionario
diccionario.pop("nombre", "apellido")

# obteniendo un elemento dict_item iterable
diccionario_iterable = diccionario.items()

print(diccionario)
