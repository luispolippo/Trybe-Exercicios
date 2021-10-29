import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const addButton = getByText(/adicionar/i);
    expect(addButton).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);
    const input = getByLabelText(/tarefa/i);
    const button = queryByText(/adicionar/i);
    userEvent.type(input, 'teste');
    userEvent.click(button);
    const tarefa = queryByText('teste');
    expect(tarefa).toBeInTheDocument();
  });
});