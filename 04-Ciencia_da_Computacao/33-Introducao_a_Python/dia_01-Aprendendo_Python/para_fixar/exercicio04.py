books_num = 60

book_price = 24.2 * (1 - 0.4)
delivery = 3 + (books_num - 1) * 0.75
cost = books_num * book_price + delivery

print(cost)
