# Prática
## Parte 1

Agora é a hora da mão no código! No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

```
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
```

O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined , como você pôde observar no retorno do console.log(typeof patientAge) . Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.

## Parte 2

Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
1. Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
1. Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
1. Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
