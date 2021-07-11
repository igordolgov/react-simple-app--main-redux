// Презентационный компонент. Который ничего не знает о состоянии и просто отображает
// то, что им скомандовано сверху, из компонента App.
import React from 'react'

const TodoList = (props) => {
  const { todos, toggleTodo } = props // В качестве props будут массив todos и функция
  // toggleTodo для переключения статуса задачи "Сделано - Не сделано" (в синтаксисе ES2015)
  // Эта строка равнозначна строке с записью: "const todos = this.props.todos" и т.п.
  return (
    <div>
      <h2>Список задач</h2>
      <ol>
        {
          todos.map(todo => {
            const className = todo.checked ? 'checked' : '' // Определим правило,
            // по которому у нас создаётся класс (для перечёркивания Сделанного)
            return (
              <li
                key={todo.id}
                className={className}
                onClick={ev => toggleTodo(todo.id)}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default TodoList
