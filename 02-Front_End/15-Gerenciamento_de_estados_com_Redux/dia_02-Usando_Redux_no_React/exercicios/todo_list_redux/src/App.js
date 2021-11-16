import { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction, removeTaskAction } from './redux/actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      selectedItemIndex: '',
      isRemoveDisabled: true,
    }
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputValue: value });
  }

  handleAddClick = () => {
    const { inputValue } = this.state;
    const { addTask } = this.props;
    addTask(inputValue);
    this.setState({ inputValue: '' });
  }

  handleItemClick = (index) => {
    this.setState({ selectedItemIndex: index, isRemoveDisabled: false });
  }

  handleRemoveClick = () => {
    const { selectedItemIndex } = this.state;
    const { removeTask } = this.props;
    removeTask(selectedItemIndex);
    this.setState({ selectedItemIndex: '', isRemoveDisabled: true });
  }

  render() {
    const { inputValue, isRemoveDisabled } = this.state;
    const { tasks } = this.props;
    return (
      <>
        <div>
          <h1>Todo List</h1>
          <input type="text" value={ inputValue } onChange={ this.handleChange } placeholder="Digite a sua tarefa aqui"/>
          <button type="button" onClick={this.handleAddClick}>Adicionar</button>
          <button type="button" onClick={this.handleRemoveClick} disabled={isRemoveDisabled}>Remover</button>
        </div>
        <div>
          <ul>
            {
              tasks.map((task, index) => (
                <li key={index} onClick={() => this.handleItemClick(index)}>{task}</li>
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
  removeTask: (index) => dispatch(removeTaskAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
