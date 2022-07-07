element_list = ["um", "dois", "tres", "quatro", "cinco"]

print(iter(element_list))

list_iterator = iter(element_list)
print(list_iterator.__next__())
print(list_iterator.__next__())
