let nextTodoId = 4 // значение 4, потому что уже есть три задачи

// Создадим два "Action creators" (создатели событий), чтобы каждый раз
// не прописывать вручную структуру события, вместо простого вызова функции
export const addTodo = (name) => { // Экспортируем про помощи "именного экспорта"
  return { // Возвращаем action (событие)
    type: 'ADD_TODO',
    id: nextTodoId++,
    name: name
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}
