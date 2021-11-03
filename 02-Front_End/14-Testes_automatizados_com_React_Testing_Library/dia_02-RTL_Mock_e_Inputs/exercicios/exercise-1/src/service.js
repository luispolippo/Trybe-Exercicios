export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
}

export const toUpper = (string) => {
  return string.toUpperCase()
}

export const firstLetter = (string) => {
  return string[0];
}

export const concatStrings = (string1, string2) => {
  return string1.concat(string2);
}
