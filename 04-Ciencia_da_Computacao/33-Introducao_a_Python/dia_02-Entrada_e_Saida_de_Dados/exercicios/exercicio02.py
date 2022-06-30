import random

chances = 1

while True:
    words = ["Trybe", "Python", "FullStack", "Joelho"]

    random_word = random.choice(words)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))

    print(scrambled_word)
    guessed_word = input("Advinhe a palavra:")

    if guessed_word.lower() == random_word.lower():
        print("Você acertou")
        exit()
    else:
        if chances >= 3:
            print("Suas chances acabaram. Você perdeu")
            exit()
        chances += 1
        print("Você errou. Tente novamente")
