import React from "react";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Testa rotas', () => {
  it('se renderiza Home', () => {
    const { history: {location: { pathname }} } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /início/i });
    expect(pathname).toBe('/');
    expect(homeLink).toBeInTheDocument();
  })

  it('se renderiza About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /sobre/i });
    userEvent.click(aboutLink);
    const { location: {pathname} } = history;
    expect(pathname).toBe('/about');
  })

  it('se renderiza Projects', () => {
    const { history } = renderWithRouter(<App />);
    const projectsLink = screen.getByRole('link', { name: /projetos/i });
    userEvent.click(projectsLink);
    const { location: {pathname} } = history;
    expect(pathname).toBe('/projects');
  })

  it('se renderiza Contact', () => {
    const { history } = renderWithRouter(<App />);
    const contactLink = screen.getByRole('link', { name: /contato/i });
    userEvent.click(contactLink);
    const { location: {pathname} } = history;
    expect(pathname).toBe('/contact');
  })

  it('se renderiza Home a partir de outra página', () => {
    const { history } = renderWithRouter(<App />);
    const contactLink = screen.getByRole('link', { name: /contato/i });
    userEvent.click(contactLink);    
    const homeLink = screen.getByRole('link', { name: /início/i });
    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  })
})