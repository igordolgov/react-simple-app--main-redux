import React from 'react' // импортируем модуль React
import ReactDOM from 'react-dom' // импортируем другой модуль React
import TodoItem from './todo-item' // импортируем TodoItem (из файла todo-item.js)

// React-component основанный на классах (class-based)
class TodoApp extends React.Component { // создаём компонент, который будет наследовать от React.Component (базовый класс для всех Реакт-компонентов)
  constructor () { // объявляем у него конструктор (метод, который выполняется для создания экземпляра данного класса)
    super() // выполняем родительский код конструктора из Реакт-компонента
    // определим исходное состояние нашего приложения (оно должно храниться в специальном свойстве state,
    this.state = { // как правило это объект)
      todos: [ // пусть это будет массив, в котором будут три задачи (три объекта)
        { name: 'Настроить webpack', checked: true },
        { name: 'Запустить webpack-dev-server', checked: true },
        { name: 'Написать TodoApp', checked: false }
      ],
      newTodoText: '' // и текст для новой задачи
    }
  }

  toggleTodo (key) { // Создаём метод, который будет переключать классы у элементов списка
    const todos = this.state.todos.map((todo, i) => { // Создаём локальную переменную todos и с помощью метода map() проверяем каждый элемент массива todos:
      if (key === i) { // если это та задача, на которую мы кликнули (то есть, если ключ совпадает с её номером в массиве),
        return { // то мы вернём такой объект -
          name: todo.name, // name останется без изменений,
          checked: !todo.checked // а checked поменяется на обратный
        }
      } else { // иначе вернём просто todo
        return todo
      }
    })

    // Обновляем состояние приложения:
    this.setState({ todos }) // метод setState вызывает обновление состояния приложения и приложение рендерится с новыми данными
  }

  addTodo () { // создаём метод для добавления новых задач в список
    const todos = this.state.todos
    todos.push({ // добавляем новую задачу в конец списка
      name: this.state.newTodoText,
      checked: false
    })

    // Обновляем состояние приложения:
    this.setState({
      todos,
      newTodoText: ''
    })
  }

  render () { // для компонентов, основанных на классах, определяем метод render (в формате JSX),
    return ( // который будет возвращать то, что этот компонент рендерит (список из трёх пунктов)
      <div>
        <h2>Список задач</h2>
        <ol>
          {
            this.state.todos.map((todo, i) => {
            // Создаём переменную className и с помощью метода map() проверяем каждый элемент массива todos. Если в элементе есть свойство "checked", то присваиваем переменной className значение "checked", иначе присваиваем значение "" (ничего не присваиваем)
              return (
                <TodoItem // из файла todo-item.js
                  key={i}
                  name={todo.name}
                  checked={todo.checked}
                  toggleTodo={this.toggleTodo.bind(this, i)} // привяжем toggleTodo к текущему контексту
                />
              )
            })
          }
        </ol>

        <input
          type='text'
          placeholder='Новая задача'
          value={this.state.newTodoText}
          onChange={ev => { // при любых изменениях (при вводе текста в input)
            this.setState({ newTodoText: ev.target.value }) // отображать этот текст в поле input
          }}
          onKeyUp={ev => {
            if (ev.key === 'Enter') { // если нажата клавиша Enter
              this.addTodo() // выполняем функцию addTodo
            }
          }}
        />
      </div>
    )
  }
}

// Указываем куда на странице мы хотим зарендерить наш компонент:
ReactDOM.render( // метод получает на вход ДВА параметра:
// <HelloWorld />, // то, что нужно зарендерить,
  <TodoApp />, // то, что нужно зарендерить,
  document.querySelector('#app') // и куда на странице это нужно поместить (в тег с id "app")
)
