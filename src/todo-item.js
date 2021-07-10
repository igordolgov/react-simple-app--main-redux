//Модуль для добавления новой задачи в список

import React from 'react'; //импортируем модуль React

const TodoItem = (props) => { //Создаём функциональный компонент (потому что ему не нужно состояние state, он всё будет получать через свойства props и возвращать результат)
    const className = props.checked ? 'checked' : '';

    return (
        <li 
            className={className}
            //Определим функцию, которая будет срабатывать при каждом клике на задачу:
            onClick={props.toggleTodo} //зададим обработчик клика и вызовем в нём метод toggleTodo (из файла index.js)
        >
            {props.name}
        </li>
    );
}

export default TodoItem //Экспортируем для использования в другом месте