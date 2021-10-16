# Para Fixar
Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.

A api utilizada será a **randomuser** no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome **results** . Exemplo:
```
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
      },
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      ...
    }
  ]
}
```

Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api **randomuser** . Utilize o método `componentDidMount` .

Enquanto os dados não são entregues, deve ser renderizada uma div com o conteúdo loading...

Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.

Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método `shouldComponentUpdate` .

**Dica!** Caso tenham dúvidas sobre como e onde fazer as chamadas de API, esse conteúdo pode ajudar!

* [Onde devemos integrar chamadas de APIs?](https://pt-br.reactjs.org/docs/faq-ajax.html)