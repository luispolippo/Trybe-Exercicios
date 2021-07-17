# Exercícios

## Parte I - Comandos de Input e Output
1. Navegue até a pasta _unix_tests_ ;
1. Crie um arquivo texto pelo terminal com o nome _skills2.txt_ e adicione os valores _Internet_ , _Unix_ e _Bash_ , um em cada linha.
1. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
1. Conte quantas linhas tem o arquivo _skills2.txt_ .
1. Crie um arquivo chamado _top_skills.txt_ usando o _skills2.txt_ , contendo as 3 primeiras skills em ordem alfabética.
1. Crie um novo arquivo chamado _phrases2.txt_ pelo terminal e adicione algumas frases de sua escolha.
1. Conte o número de linhas que contêm as letras br .
1. Conte o número de linhas que não contêm as letras br .
1. Adicione dois nomes de países ao final do arquivo _phrases2.txt_ .
1. Crie um novo arquivo chamado _bunch_of_things.txt_ com os conteúdos dos arquivos _phrases2.txt_ e _countries.txt_
1. Ordene o arquivo _bunch_of_things.txt_ .

## Parte II - Permissões
1. Navegue até a pasta _unix_tests_ ;
1. Rode o comando `ls -l` e veja quais as permissões dos arquivos;
1. Mude a permissão do arquivo _bunch_of_things.txt_ para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l` ;
>Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
4. Tire a permissão de escrita do arquivo _bunch_of_things.txt_ para todos os usuários, verifique se está correto com o comando `ls -l` ;
>Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
5. Volte à permissão do arquivo _bunch_of_things.txt_ para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt` .
>Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

## Parte III - Processos & Jobs
1. Liste todos os processos;
1. Agora use o comando `sleep 30 &` ;
1. Use a listagem de processos para encontrar o PID do processo que está executando o comando _sleep 30_ e termine a sua execução ~~(mate o processo)~~ ;
1. Execute novamente o comando `sleep 30` , mas agora sem o `&` . Depois, faça com que ele continue executando em background;
1. Crie um processo em background que rode o comando _sleep_ por 300 segundos.
1. Crie mais dois processos que rodem o comando _sleep_ por 200 e 100 segundos, respectivamente.
>Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.
7. Verifique que apenas o processo _sleep 300_ está em execução com o comando `jobs` . Suspenda a execução desse processo.
>Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
8. Retome a execução do processo _sleep 100_ em background com o comando `bg` .
1. Termine a execução de todos os processos _sleep_ ~~(mate os processos)~~ .



