from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio

    def area(self):
        return (self.raio**2) * 3.14

    def perimetro(self):
        return 2 * 3.14 * self.raio


quadrado = Quadrado(5)
print(quadrado.area())
print(quadrado.perimetro())
