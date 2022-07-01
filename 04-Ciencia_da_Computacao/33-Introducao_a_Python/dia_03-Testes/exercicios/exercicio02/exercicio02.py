def convert_phrases_to_phone_numbers(phrase):
    phone_number = ""
    for letter in phrase:
        if letter == "-" or letter == "0" or letter == "1":
            phone_number += letter
        if letter == "A" or letter == "B" or letter == "C":
            phone_number += "2"
        if letter == "D" or letter == "E" or letter == "F":
            phone_number += "3"
        if letter == "G" or letter == "H" or letter == "I":
            phone_number += "4"
        if letter == "J" or letter == "K" or letter == "L":
            phone_number += "5"
        if letter == "M" or letter == "N" or letter == "O":
            phone_number += "6"
        if letter == "P" or letter == "Q" or letter == "R" or letter == "S":
            phone_number += "7"
        if letter == "T" or letter == "U" or letter == "V":
            phone_number += "8"
        if letter == "W" or letter == "X" or letter == "Y" or letter == "Z":
            phone_number += "9"
    return phone_number
