import { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from './redux/actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputValue: value });
  }

  handleClick = () => {
    const { inputValue } = this.state;
    const { addTask } = this.props;
    addTask(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;
    const { tasks } = this.props;
    return (
      <>
        <div>
          <h1>Todo List</h1>
          <input type="text" value={ inputValue } onChange={ this.handleChange } placeholder="Digite a sua tarefa aqui"/>
          <button type="button" onClick={this.handleClick}>Adicionar</button>
        </div>
        <div>
          <ul>
            {
              tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))
            }
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTaskAction(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
