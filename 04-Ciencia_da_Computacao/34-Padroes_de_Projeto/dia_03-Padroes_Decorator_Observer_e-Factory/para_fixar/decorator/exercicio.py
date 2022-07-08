class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecorada:
    def __init__(self, calculadora) -> None:
        self._calculadora = calculadora

    def converte_numero(self, numero):
        if not isinstance(numero, str):
            return numero

        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self._calculadora.soma(
            self.converte_numero(x), self.converte_numero(y)
        )


class CalculadoraInglesDecorada:
    def __init__(self, calculadora) -> None:
        self._calculadora = calculadora

    def converte_numero(self, numero):
        if not isinstance(numero, str):
            return numero

        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eigth": 8,
            "nine": 9,
            "ten": 10,
        }.get(numero)

    def soma(self, x, y):
        return self._calculadora.soma(
            self.converte_numero(x), self.converte_numero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print(f"Soma de 10 + 20 é {calculadora.soma(10, 20)}")

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print(f"'oito' + 'dois' é {calculadoraDecorada.soma('oito', 'dois')}")

    calculadoraDecoradaIngles = CalculadoraInglesDecorada(calculadora)
    print(
        f"'eight' + 'two' é {calculadoraDecoradaIngles.soma('eigth', 'two')}"
    )
