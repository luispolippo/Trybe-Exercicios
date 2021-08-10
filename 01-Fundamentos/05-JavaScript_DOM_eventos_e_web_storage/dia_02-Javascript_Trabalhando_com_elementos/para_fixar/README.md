# Para Fixar

## Buscando Elementos

Adicione o código abaixo a uma página HTML e adicione uma tag script . Você deverá fazer tudo a seguir usando somente JavaScript .
```
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

1. Acesse o elemento elementoOndeVoceEsta .
1. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
1. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
1. Acesse o primeiroFilho a partir de pai .
1. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
1. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
1. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
1. Agora acesse o terceiroFilho a partir de pai .

## Criando Elementos

1. Crie um irmão para elementoOndeVoceEsta .
1. Crie um filho para elementoOndeVoceEsta .
1. Crie um filho para primeiroFilhoDoFilho .
1. A partir desse filho criado, acesse terceiroFilho .

## Removendo Elementos

* Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
