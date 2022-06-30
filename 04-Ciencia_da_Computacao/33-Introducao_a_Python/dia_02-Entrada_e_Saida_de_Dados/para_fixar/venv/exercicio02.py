numbers = input(
    "Digite, separados por um espaço, os números que serão somados:"
)

numbers_list = numbers.split(" ")
sum = 0
for number in numbers_list:
    if number.isdigit():
        sum += int(number)
    else:
        print(f"Erro ao somar valores, {number} é um valor inválido")

print(f"A soma dos valores é {sum}")
