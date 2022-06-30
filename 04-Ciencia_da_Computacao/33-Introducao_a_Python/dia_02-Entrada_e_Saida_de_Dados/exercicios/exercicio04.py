import json
import csv

with open("books.json") as file:
    books = json.load(file)

categories = {}

for book in books:
    for category in book["categories"]:
        if not categories.get(category):
            categories[category] = 0
        categories[category] += 1

percentage_by_category = [
    [category, num_books / len(books)]
    for category, num_books in categories.items()
]

header = ["categoria", "percentagem"]

with open("books_percentage_by_category.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(percentage_by_category)
