import React, { FC } from 'react';

import { Todo, deleteTodo, selectedTodos } from '../stores/todo';

interface Props {
    todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
    const removeItem = () => {
        deleteTodo(todo.id); // todo 제거
    };

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        selectedTodos(todo, e.target.checked)
    }

    return (
        <div>
            <input type="checkbox" onChange={(e) => onSelect(e)} />
            <span>{todo.content}</span>
            <span onClick={removeItem}> ❌</span>
        </div>
    );
};

export default TodoItem;