# Exercício

Durante seu curso na Trybe , seus projetos serão entregues através de _pushes_ nos repositórios do **GitHub** . Para podermos simular um exercício feito, você criará um arquivo _.txt_ com um nome de sua escolha (Exemplo: _trybe-skills.txt_ ) e utilizará o conteúdo abaixo.
```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```
No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:
```
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório **Git** :

* Retorne para a raiz da pasta de exercícios;
* Inicialize o repositório com `git init` ;
* Crie um arquivo de _README_ utilizando o comando `touch README.md` ;
* Crie um _commit_ inicial utilizando:
```
git add .
git commit -m "Initial commit"
```
* Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
  * Dê ao repositório um nome descritivo, como por exemplo _trybe-exercicios_ ;
  * ⚠️ Lembre-se de não inicializar o repositório com um arquivo _README.md_ , pois você já criou um nos passos anteriores! 😉
* Clique no botão *SSH* e então copie a URL do repositório;
   * Execute o comando para adicionar a URL ao repositório local `git remote add origin "URL_DO_REPOSITÓRIO"` ;
* Verifique se tudo está certo com sua URL remota utilizando o comando `git remote -v` . Seu terminal deve conter algo similar a isso:
```
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```
* Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;
* Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub ! 🤩
* Execute o comando `git push origin master` no terminal;
* Vá até o seu GitHub e verifique as novas alterações.

Agora que tal adicionar uma descrição do que é seu repositório no _README.md_ ? 💪🏼.

* O _README.md_ que você recriou é referente ao repositório _trybe-exercicios_ , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
* Uma outra coisa interessante a se fazer é adicionar um _README.md_ dentro do diretório de exercícios do dia para colocar a descrição dos exercícios que você desenvolveu;
* Lembre-se de fazer um commit quando terminar de alterar os arquivos;
* Depois do commit , faça sempre um push ;
* Confira as alterações no GitHub .
