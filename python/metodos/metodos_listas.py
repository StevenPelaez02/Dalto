
# Creando una lista con list
lista = list([34, 56, 23, True])

# devuelve la cantidad de elementos de la lista
cantidad_elementos = len(lista)

# agregando u8n elemento a la lista
lista.append(65)

# agregando un elemento a la lista en una posicion especifica
lista.insert(2, 44)

# agregando varios elementos a la lista
lista.extend([2030])

#eliminando un elemento de la lista (por su indice)
lista.pop(0)

#eliminando un elemento de la lista (por su indice)
lista.pop(-2) # -1 para eliminar el ultimo, -2 para eliminar el anteultimo, y asi sucesivamente

# removiendo un elemento de la lista por su valor
lista.remove(56)

# eliminando todos los elemento de la lista
#lista.clear()

# ordenando la lista (si usamos el poarametro reverse=True lo ordena de reversa)
lista.sort()

# invirtiendo los elementos de la lista
lista.reverse()

# verificando si un elemento se encuentra en la lista
elemento_encontrado = lista.index(23)

print(elemento_encontrado)