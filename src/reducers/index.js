// функция-редьюсер должна на вход получать два параметра: предыдущее состояние,
// которое она должна верифицировать, и действие, которое повлияет на состояние
const todos = (state = [], action) => {
  switch (action.type) { // проверяем тип события
    case 'ADD_TODO': // Случай, когда мы добавляем задачу (если тип совпадает)
      return [
        ...state, // При помощи spread мы достаем каждый элемент из массива state,
        // кладём их в новый массив, а в конец ещё добавляем новый объект задачи
        { id: action.id, name: action.name, checked: false }
      ]

    case 'TOGGLE_TODO': // Случай, когда мы переключаем статус задачи
      return state.map(todo => { // Берём state, проходимся по нему (используя .map,
        // т.е. создаем НОВУЮ копию массива) и для каждого элемента массива проверяем:
        if (todo.id === action.id) { // если id равен id, который передан в action,
          // то есть, если это та задача, статус которой должен поменяться,
          return { id: todo.id, name: todo.name, checked: !todo.checked }
          // возвращаем копию данной задачи, но с обратным статусом в checked ('!')
        }
        return todo // иначе возвращаем todo (оставляем как было)
      })

    default: // Если в приложении возникло событие, к которому данный reducer не имеет
    // отношения (action.type другой), мы должны вернуть текущую версию нашего state,
    // т.е мы в данном редьюсере пропускаем обработку данного события и передаём дальше
    // следующему редьюсеру
      return state
  }
}

export default todos // Экспортируем функцию, чтобы её можно было где-то использовать
