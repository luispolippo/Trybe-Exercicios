class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


# Classe Adpater
class CharacterAdapter:
    def __init__(self, character) -> None:
        self.character = character

    def attack(self):
        if isinstance(self.character, Jedi):
            return self.character.attackWithSaber()
        return self.character.attack()


StarWarsGame(CharacterAdapter(Soldier(5))).fight_enemy()
StarWarsGame(CharacterAdapter(Jedi(20))).fight_enemy()
