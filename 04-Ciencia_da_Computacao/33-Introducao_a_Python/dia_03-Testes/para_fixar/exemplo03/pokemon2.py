import json


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemon_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemon_by_type
