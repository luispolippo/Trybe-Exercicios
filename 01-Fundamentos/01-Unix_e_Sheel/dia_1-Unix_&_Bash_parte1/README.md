# Exercícios

## Parte I - Criação de arquivos e diretórios
Dica : Para criação de arquivos vazios você pode utilizar o comando _touch nome-do-arquivo.extensao_ .
1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado _unix_tests_ e navegue até ele.
1. Crie um arquivo de texto com o nome _trybe.txt_ .
1. Crie uma cópia do arquivo _trybe.txt_ com nome _trybe_backup.txt_ .
1. Renomeie o arquivo _trybe.txt_ .
1. Dentro de _unix_tests_ , crie um novo diretório chamado _backup_ .
1. Mova o arquivo _trybe_backup.txt_ para o diretório _backup_ .
1. Dentro de _unix_tests_ , crie um novo diretório chamado _backup2_ .
1. Mova o arquivo _trybe_backup.txt_ da pasta _backup_ para a pasta _backup2_ .
1. Apague a pasta _backup_ .
1. Renomeie a pasta _backup2_ para _backup_ .
1. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
1. Apague o diretório _backup_ .
1. Limpe o terminal.
**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado _skills.txt_** :
```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```
14. Mostre na tela as 5 primeiras skills do arquivo _skills.txt_ .
1. Mostre na tela as 4 últimas skills do arquivo _skills.txt_ .
1. Apague todos os arquivos que terminem em _.txt_ .

## Parte II - Manipulação & Busca
1. Na pasta _unix_tests_ , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`:

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Mostre todo o conteúdo do arquivo _countries.txt_ na tela.
1. Mostre o conteúdo de _countries.txt_ , página por página, até encontrar a Zambia .
1. Mostre novamente o conteúdo de _countries.txt_ página por página, mas agora utilize um comando para buscar por Zambia .
1. Busque por Brazil no _countries.txt_ .
1. Busque novamente por brazil , mas agora utilizando o lower case .

**Para os próximos exercícios, crie um novo arquivo chamado _phrases.txt_ e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**

7. Busque pelas frases que não contenham a palavra fox .
1. Conte o número de palavras do arquivo _phrases.txt_ .
1. Conte o número de linhas do arquivo _phrases.txt_ .
1. Crie os arquivos _empty.tbt_ e _empty.pdf_ .
1. Liste todos os arquivos do diretório _unix_tests_ .
1. Liste todos os arquivos que terminem com _txt_ .
1. Liste todos os arquivos que terminem com _tbt_ ou _txt_ .
1. Acesse o manual do comando `ls` .
