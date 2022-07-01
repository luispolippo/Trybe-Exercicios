def fizz_buzz(n):
    numbers_list = []
    for number in range(1, n + 1):
        if number % 5 == 0 and number % 3 == 0:
            numbers_list.append("FizzBuzz")
        elif number % 5 == 0:
            numbers_list.append("Buzz")
        elif number % 3 == 0:
            numbers_list.append("Fizz")
        else:
            numbers_list.append(number)
    return numbers_list
