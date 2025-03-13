import React from 'react';
import { ITodo } from '../models/Todo';
import TodoItem from './TodoItems';
import { map } from 'lodash';

interface TodoListProps {
    todos: ITodo[];
    onToggleCompleted: (id: string, completed: boolean) => void;
    onEdit: (todo: ITodo) => void;
    onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleCompleted, onEdit, onDelete }) => {
    return (
        <>
            {map(todos, (todo) => (
                <TodoItem
                    key={todo._id?.toString()}
                    todo={todo}
                    onToggleCompleted={onToggleCompleted}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default TodoList;
