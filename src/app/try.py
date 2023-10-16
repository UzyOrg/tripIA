def secuenciar_trabajos(trabajos):

  trabajos.sort(key=lambda trabajo: trabajo.prioridad)

  # Inicializar el tiempo total de procesamiento.
  tiempo_total_procesamiento = 0

  # Procesar los trabajos uno por uno y crear una lista con la secuencia.
  
  return trabajos


class Trabajo:


  def __init__(self, duración, prioridad):
    self.duracion = duración
    self.prioridad = prioridad


if __name__ == "__main__":
  # Datos del ejercicio.
  trabajo_1 = Trabajo(2, 1)
  trabajo_2 = Trabajo(3, 2)
  trabajo_3 = Trabajo(1, 3)

  # Secuenciar los trabajos.
  secuencia = secuenciar_trabajos([trabajo_1, trabajo_2, trabajo_3])

  # Imprimir la secuencia.
  for trabajo in secuencia:
      print(f'Trabajo con prioridad {trabajo.prioridad}, duración {trabajo.duracion} horas')