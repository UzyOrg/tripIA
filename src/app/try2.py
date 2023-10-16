from collections import defaultdict, deque

# Duración de cada actividad
duracion = {
    "Excavacion": 5,
    "Cimentacion": 7,
    "Estructura_Acero": 10,
    "Albanileria": 8,
    "Instalacion_Fontaneria": 6,
    "Instalacion_Electrica": 7,
    "Acabados": 9
}

# Dependencias entre actividades
dependencias = {
    "Cimentacion": ["Excavacion"],
    "Estructura_Acero": ["Cimentacion"],
    "Albanileria": ["Cimentacion"],
    "Instalacion_Fontaneria": ["Albanileria"],
    "Instalacion_Electrica": ["Albanileria"],
    "Acabados": ["Estructura_Acero", "Instalacion_Electrica"]
}

# Función para calcular la duración total de una secuencia de actividades
def calcular_duracion(secuencia):
    duracion_total = 0
    for actividad in secuencia:
        duracion_total += duracion[actividad]
    return duracion_total

# Realizar una búsqueda topológica para determinar la secuencia de actividades
def orden_topologico(dependencias):
    grafo = defaultdict(list)
    grado_entrada = {actividad: 0 for actividad in duracion}

    for actividad, dependencia in dependencias.items():
        for dep in dependencia:
            grafo[dep].append(actividad)
            grado_entrada[actividad] += 1

    cola = deque([actividad for actividad, grado in grado_entrada.items() if grado == 0])
    secuencia = []

    while cola:
        actividad = cola.popleft()
        secuencia.append(actividad)

        for vecino in grafo[actividad]:
            grado_entrada[vecino] -= 1
            if grado_entrada[vecino] == 0:
                cola.append(vecino)

    return secuencia

secuencia_topologica = orden_topologico(dependencias)
duracion_total = calcular_duracion(secuencia_topologica)

print("Secuencia óptima de actividades:", secuencia_topologica)
print("Duración total mínima del proyecto:", duracion_total)