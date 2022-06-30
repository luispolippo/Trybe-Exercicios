name = input("Digite seu nome:")

for index in range(len(name)):
    for index2 in range(len(name) - index):
        print(name[index2], end="")
    print()
