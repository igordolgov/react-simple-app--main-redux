import React from 'react'

import TodoList from '../components/todo-list' // импортруем нужные файлы
import AddTodo from '../components/add-todo'

const App = (props) => { // объявляем компонент как чистую функцию, которая
// будет получать на вход параметры (props) и выводить наружу результат
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default App // Экспортируем компонент наружу
