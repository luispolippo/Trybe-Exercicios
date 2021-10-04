import './App.css';

const commitments = ['Estudar', 'Trabalhar', 'Almoçar', 'Pagar boleto', 'Dormir'];

const task = (value) => {
  return(
    <li className='listItem'>{value}</li>
  )
}

function App() {
  return(
    commitments.map((commitment) => task(commitment))
  )
}

export default App;
