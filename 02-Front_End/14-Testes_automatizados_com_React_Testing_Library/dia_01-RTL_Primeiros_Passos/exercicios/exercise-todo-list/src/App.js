import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedItem: undefined,
      isButtonDisabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectItem = ({ target }) => {
    const { innerText } = target;
    this.setState({ selectedItem: innerText, isButtonDisabled: false });
  }

  removeItem = () => {
    const { selectedItem, listTodo } = this.state;
    const newList = listTodo.filter((item) => item !== selectedItem);
    this.setState(() => ({ listTodo: newList, selectedItem: undefined, isButtonDisabled: true }));
  }

  render() {
    const { listTodo, selectedItem, isButtonDisabled } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} removeItem={ this.removeItem } selectedItem={ selectedItem } isButtonDisabled={ isButtonDisabled } />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} selectItem={ this.selectItem }/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
