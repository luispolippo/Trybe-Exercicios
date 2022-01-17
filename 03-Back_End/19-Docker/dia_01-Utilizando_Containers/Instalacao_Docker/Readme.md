# Instalando Docker
Instalação feita usando de base o S.O. Ubuntu, para outras instalações consulte a [documentação de instalação](https://docs.docker.com/engine/install/).


## Desinstalando versões anteriores antes de começar a instalação

Execute o seguinte comendo no terminal:
```
sudo apt-get remove docker* containerd runc
```
Caso nenhum dos pacotes esteja instalado, esse comando retornará um erro ```E: Impossível encontrar o <nome-do-pacote>``` , nesse caso, é só prosseguir com a instalação.

>Detalhe, o Docker preserva informações sobre imagens, containers , volumes e redes na pasta ```/var/lib/docker/``` . Nesse processo, esses arquivos não são apagados.

## Atualizando os repositórios do sistema

Há 3 formas de instalar o Docker: via repositórios, via pacotes ```.deb``` e via scripts específicos.

Aqui iremos instalar via repositórios para facilitar futuras atualizações.

No terminal use o seguinte comando para atualizar os pacotes do apt:

```
sudo apt-get update
```

Você também pode atualizar os pacotes do S.O. antes da instalação:

```
sudo apt-get upgrade
```

## Habilitando HTTPS para apt

Instale os seguintes pacotes, eles são recomendados pela documentação oficial para habilitar a utilização dos repositórios via HTTPS pelo apt-get , precisaremos disso para prosseguir a instalação:

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

## Adicionando chave de acesso ao repositório remoto

Adicione a chave GPG* oficial do Docker:

> *Para adicionar uma camada de segurança nas transferências de dados entre computadores remotos no Linux, é possível que eles se comuniquem utilizando um sistema de chaves pública e privada, como o GPG (GnuPG) .

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Se tudo correr bem, você não deve receber nenhum retorno visual.

## Adicionando repositório

Para adicionar o repositório oficial, execute o seguinte comando*:

```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Perceba que adicionamos o repositório ```stable``` (em ```$(lsb_release -cs) stable``` ), isso significa que teremos somente o repositório com as versões estáveis do Docker.

> *Em distribuições baseadas no Ubuntu (como o ```Linux Mint``` ), talvez você precise alterar o comando $```(lsb_release -cs)``` para uma versão do ubuntu que seja compatível com aquele sistema. Exemplo: Caso você utilize o ```Linux Mint Tessa``` , você deve alterar o valor para ```bionic``` .

## Instalando Docker Engine

Primeiro, vamos garantir que os índices dos pacotes do apt estão atualizados, já que adicionamos um novo repositório:

```
sudo apt-get update
```

Iremos instalar a última versão estável do Docker Engine - Commmunity , que é uma versão mantida pela própria comunidade, já que o Docker é Open-source . Faremos isso com a interface de linha de comando (CLI) e o ```containerd``` *.

> *O containerd é um serviço que funciona em segundo plano ( daemon ) e é utilizado no funcionamento dos containers .

Para isso, execute no terminal:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## Adicionando um usuário ao grupo de usuários docker

__⚠️ Atenção ⚠️: Esse procedimento faz com que seu usuário tenha os mesmos privilégios do usuário root (o superusuário no linux) na execução dos comandos Docker*, então use-o com moderação, apenas em ambiente de desenvolvimento.*__

> *Por padrão, o Docker faz a vinculação (bind) entre o sistema operacional hospedeiro e o cliente via socket Unix (um tipo de conexão que possui mais performance) e não via porta TCP (que possui menos performance) .
>Sockets Unix são de uso exclusivo do usuário root . Sendo assim, qualquer comando do Docker que executarmos irá exigir ser iniciado como ```root``` , ou com ```sudo``` por qualquer usuário.

Para evitar o uso de sudo em todos os comandos Docker que formos executar, vamos dar as devidas permissões ao nosso usuário. Primeiro crie um grupo chamado ```docker``` :

```
sudo groupadd docker
```
>Caso ocorra uma mensagem: ```groupadd: grupo 'docker' já existe``` , é só prosseguir.

E então, use o comando abaixo para adicionar seu usuário a este novo grupo. obs.: execute o comando exatamente como ele está abaixo :

```
sudo usermod -aG docker $USER
```

Para ativar as alterações realizadas aos grupos, você pode realizar logout e login de sua sessão, ou executar no terminal:

```
newgrp docker
```

__Obs: Se caso após finalizar o terminal a configuração for perdida, você pode executar o comando abaixo como forma de contornar o problema__

```
sudo chmod 666 /var/run/docker.sock
```

## Iniciando o Deamon do Docker

Para consultar o status do daemon do Docker, execute:

```
sudo systemctl status docker
```

Esse comando deve retornar algo como um pequeno relatório sobre o serviço, onde consta seu status de funcionamento:

```
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Thu 2021-09-23 11:55:11 -03; 2s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
    Process: 2034 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0>
   Main PID: 2034 (code=exited, status=0/SUCCESS
```

Caso o parâmetro Active esteja como stop/waiting ou no nosso caso, como inactive , rode o comando start para iniciá-lo:

```
sudo systemctl start docker
```
Ao consultar o status novamente, o processo deverá estar como ```start/ running/ active ```.

Habilite o daemon do Docker para iniciar durante o boot :

```
sudo systemctl enable docker
```

## Validando a instalação

Para validar se tudo ocorreu como deveria na instalação, vamos executar um hello world do Docker:

```
docker run hello-world
```

O terminal deve retornar uma mensagem com dicas.

