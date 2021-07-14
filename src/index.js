import React from 'react' // импортируем модуль React
import ReactDOM from 'react-dom' // импортируем другой модуль React
import TodoApp from './containers/app' // импортируем модуль app.js c именем TodoApp
import { createStore } from 'redux'
import todos from './reducers'

const initialState = [ // Зададим начальное состояние приложения
  { id: 1, name: 'Настроить webpack', checked: true },
  { id: 2, name: 'Запустить webpack-dev-server', checked: true },
  { id: 3, name: 'Написать TodoApp', checked: false }
]

// Создаём хранилище (store) и передаём ему функцию-редьюсер (первый аргумент: название
// редьюсера, а второй: начальное состояние нашего приложения
const store = createStore(todos, initialState); // функция будет вызываться каждый раз,
// когда в приложении возникает событие (action)

// Указываем куда на странице мы хотим зарендерить наш компонент: метод получает на вход 
// ДВА параметра: то, что нужно зарендерить (Так как приложение не имеет своего состояния,
// в качестве пропса передаём ему store) и куда на странице это поместить (в тег с id "app")
ReactDOM.render(
  <TodoApp store={store} />, 
  document.querySelector('#app')
);
