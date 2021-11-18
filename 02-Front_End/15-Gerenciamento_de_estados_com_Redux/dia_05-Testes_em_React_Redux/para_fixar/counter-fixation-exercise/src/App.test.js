import renderWithRedux from "./renderWithRedux";
import App from "./App";
import '@testing-library/jest-dom'
import { cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe('testa valor padrão e valor mockado', () => {
  beforeEach(cleanup);
  test('if has a button and the value 0 change to 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const addButton = queryByText(/clique aqui/i);
    
    expect(addButton).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    userEvent.click(addButton);

    expect(queryByText('1')).toBeInTheDocument();
  })
  test('if has the value 10 when a value is mocked and the button works', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const addButton = queryByText(/clique aqui/i);
    
    expect(queryByText('10')).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    userEvent.click(addButton);

    expect(queryByText('11')).toBeInTheDocument();
  })
})
