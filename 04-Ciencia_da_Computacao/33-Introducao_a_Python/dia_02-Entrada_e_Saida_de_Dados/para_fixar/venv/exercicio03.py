students = []
with open("alunos.txt", mode="r") as file:
    for line in file:
        students.append(line)

reproved_students = []

for student in students:
    if int(student.split(" ")[1]) < 6:
        reproved_students.append(student.split(" ")[0])

with open("alunos_reprovados.txt", mode="w") as newFile:
    for student in reproved_students:
        newFile.write(f"{student}\n")

print(reproved_students)
