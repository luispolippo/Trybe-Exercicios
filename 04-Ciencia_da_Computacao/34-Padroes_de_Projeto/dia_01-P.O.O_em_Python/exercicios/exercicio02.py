import statistics


class Estatistica:
    def __init__(self, numeros) -> None:
        self.__numeros = numeros

    def media(self):
        return statistics.mean(self.__numeros)

    def mediana(self):
        return statistics.median(self.__numeros)

    def moda(self):
        return statistics.mode(self.__numeros)


estatitica = Estatistica([1, 3, 5, 6, 4, 4, 2, 3, 7])
print(estatitica.media())
print(estatitica.mediana())
print(estatitica.moda())
