import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByText, getByLabelText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const addButton = getByText(/adicionar/i);
    const input = getByLabelText(/tarefa/i);
    listTodo.forEach((item) => {
      userEvent.type(input, item);
      userEvent.click(addButton);
    })
    listTodo.forEach((item) => {
      const task = getByText(item);
      expect(task).toBeInTheDocument();
    })
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const ITEM_PROPS = 'teste'
    render(<Item content={ ITEM_PROPS }/>)
    const testProp = screen.getByText(ITEM_PROPS);
    expect(testProp).toBeInTheDocument();
  })
})
