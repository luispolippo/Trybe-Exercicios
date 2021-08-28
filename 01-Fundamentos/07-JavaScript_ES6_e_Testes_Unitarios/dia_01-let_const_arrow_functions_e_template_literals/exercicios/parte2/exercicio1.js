const fatorial = (num) => num === 1 ? num : num * fatorial(num-1)


console.log(fatorial(5));