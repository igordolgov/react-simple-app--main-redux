// Главное приложение-контейнер, которое реагирует на изменения стейта
// (state, состояние приложений), и в зависимости от изменений рендерит
// свои дочерние компоненты.
import React from 'react'

import { connect } from 'react-redux' // Для того, чтобы дочерние компоненты
// могли воздействовать на store (и при этом изменялся бы интерфейс)

import TodoList from '../components/todo-list'; // импортруем нужные файлы
import AddTodo from '../components/add-todo';
import { addTodo, toggleTodo } from '../actions';

let App = (props) => { // объявляем компонент как чистую функцию, которая
// будет получать на вход параметры (props) и выводить наружу результат
  const {
    todos, addTodo, toggleTodo
  } = props;
  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => dispatch(addTodo(name)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App; // Экспортируем компонент наружу
