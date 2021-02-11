import React, { FC, useState } from 'react';

import { addTodo, onRemoveSelected } from '../stores/todo';
const TodoForm: FC = () => {
    const [content, setContent] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(content); // todo 추가
        setContent('');
    };

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };
    const removeSelectItem = (e: React.FormEvent) => {
        e.preventDefault();
        onRemoveSelected()
    }
    return (
        <div style={{ margin: '40px' }}>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChangeContent} value={content} placeholder="내용" />
                <button type="submit">입력</button>
                <button onClick={removeSelectItem}>X</button>
            </form>
        </div>

    );
};

export default TodoForm;