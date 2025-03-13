// TodoItem.tsx
import { EditIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { ITodo } from '../models/Todo';

interface TodoItemProps {
    todo: ITodo;
    onToggleCompleted: (id: string, completed: boolean) => void;
    onEdit: (todo: ITodo) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleCompleted, onEdit, onDelete }) => {
    return (
        <Flex key={todo._id?.toString()} align="center" justify="space-between" p={4} borderBottom="1px solid" borderColor="gray.200">
            <Checkbox
                isChecked={todo.completed}
                onChange={() => onToggleCompleted(todo._id?.toString() || '', !todo.completed)}
            >
                {todo.text}
            </Checkbox>
            <Flex align="center">
                <IconButton
                    aria-label="Edit Todo"
                    icon={<EditIcon />}
                    size="sm"
                    colorScheme="blue"
                    onClick={() => onEdit(todo)}
                    mr={2}
                />
                <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => onDelete(todo._id?.toString() || '')}
                >
                    Delete
                </Button>
            </Flex>
        </Flex>
    );
};

export default TodoItem;
