import React from 'react';
import Todo from './todos';
import AddTodo from './addtodo';

class App extends React.Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(el => {
      return el.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (obj) => {
    obj.id = Math.random();
    let todos = [...this.state.todos, obj];
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODO's</h1>
        <Todo todo={this.state.todos} deletetodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
