import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

const responseAPI = {
  name: "Agumon",
  img: "https://digimon.shadowsmith.com/img/agumon.jpg",
  level: "Rookie"
}
describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseAPI),
    })

    render(<Digimon digimon={ responseAPI }/>)

    const digimonName = screen.getByTestId('digimonName');
    const digimonLevel = screen.getByTestId('digimonLevel');

    expect(digimonName).toHaveTextContent('Agumon');
    expect(digimonLevel).toHaveTextContent('Rookie');
  });
});
