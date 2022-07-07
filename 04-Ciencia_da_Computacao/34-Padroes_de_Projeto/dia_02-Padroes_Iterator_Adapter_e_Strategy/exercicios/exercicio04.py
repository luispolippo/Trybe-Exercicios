from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, iteratorStrategy) -> None:
        self._cartas = cartas
        if iteratorStrategy == "asc":
            self._position = 0
        if iteratorStrategy == "desc":
            self._position = len(cartas) - 1
        self._iteratorStrategy = iteratorStrategy

    def __next__(self):
        try:
            carta = self._cartas[self._position]
        except IndexError:
            raise StopIteration()
        else:
            if self._iteratorStrategy == "asc":
                self._position += 1
            if self._iteratorStrategy == "desc":
                self._position -= 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, iteratorStrategy="asc"):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._iteratorStrategy = iteratorStrategy

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self._iteratorStrategy)


baralho = Baralho("desc")
for carta in baralho:
    print(carta)
