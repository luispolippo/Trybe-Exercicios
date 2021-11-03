import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    render(<TicTacToe />);
    const gameBoard = screen.getByTestId('game_board');
    expect(gameBoard.children.length).toBe(9);
  });

  test('Começar com todos os espaços em branco.', () => {
    render(<TicTacToe />);
    const gameBoard = screen.getByTestId('game_board');
    const gameBoardChildLength = gameBoard.children.length;
    for (let id = 0; id < gameBoardChildLength; id += 1) {
      const cell = screen.getByTestId(`cell_${id}`);
      const cellImg = cell.firstChild;
      expect(cellImg.src).toBe('');
    } 
    
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    render(<TicTacToe />);
    const endGame = screen.queryByText(/Fim de jogo/i);
    expect(endGame).not.toBeInTheDocument();
  });
});
