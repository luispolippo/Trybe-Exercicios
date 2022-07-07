class TV:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self) -> str:
        return f"""
          Tamanho: {self.__tamanho}
          Canal: {self.__canal}
          Volume: {self.__volume}
          Ligada: {self.__ligada}
        """


televisao_48 = TV(48)
televisao_48.ligar_desligar()
televisao_48.aumentar_volume()
televisao_48.aumentar_volume()
televisao_48.aumentar_volume()
televisao_48.diminuir_volume()
televisao_48.modificar_canal(50)
print(televisao_48)
