import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    render(<App />)
    const inputSearch = screen.getByRole('textbox', { name: /digimon/i });
    const button = screen.getByRole('button', { name: /search digimon/i });
    const doASearch = screen.getByRole('heading', { name: /faça uma pesquisa/i });
    expect(inputSearch).toBeDefined();
    expect(button).toBeDefined();
    expect(doASearch).toBeDefined();

    userEvent.type(inputSearch, 'Agumon');
    userEvent.click(button);

    const digimonName = await screen.findByRole('heading', { name: /Agumon/i });
    expect(doASearch).not.toBeInTheDocument();
    expect(digimonName).toBeInTheDocument();
    
  });
});
