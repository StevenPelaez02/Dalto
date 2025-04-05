cadena1 = "Hola,Maquina,Como,Estas"
cadena2 = "Bienvenido maquinola"

print(dir(cadena1))

#Covierte a mayusculas
resultado = cadena1.upper()

#Covierte a minusculas
resultado = cadena1.lower()

#primera letra en mayuscula
primer_letra_mayusc = cadena1.capitalize()

#buscamos una cadena en otra cadena, si no hay coincidencias devuelve -1
busqueda_find = cadena1.find("steven")

#buscamos una cadena en otra cadena, si no hay coincidencias lanza una excepcion
busqueda_index = cadena1.index("s")

#si es numerico devolvemos true, si no devolvemos false
es_numeriuco = cadena1.isnumeric()

# si es alfanumerico devolvemos true, sino devolvemos false
es_alfanumerico = cadena1.isalpha()

#contamos las coincidencias de una cadeena, dentro de otra cadena, devuelve la cantidad de coincidencias
contar_coincidencias = cadena1.count("a")

#contamos cuantos caracteres tiene una cadena
contar_caracteres = len(cadena1)

#verificamos si una cadena empieza con otra cadena dada, si es asi devuelve true
empieza_con = cadena1.startswith("H")

#verificamos si una cadena termina con otra cadena dada, si es asi devuelve true
termina_con = cadena1.endswith("even")

#reemplaza un pedazo de una cadena dada, por otra
cadena_nueva = cadena1.replace(",", " ")

#Separa cadenas con la cadena que le pasemos
cadena_separada = cadena1.split(",")


print(cadena_separada[0])