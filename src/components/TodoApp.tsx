import { Alert, AlertIcon, Center, Container, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { ITodo } from '../models/Todo';
import { useAppDispatch, useAppSelector } from '../store/redux.hooks';
import TodoSelector from '../store/selectors/todo-selector';
import TodoThunk from '../store/thunks/todo-thunk';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(TodoSelector.selectTodos);
    const loading = useAppSelector(TodoSelector.selectLoading);
    const error = useAppSelector(TodoSelector.selectError);

    const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);

    useEffect(() => {
        dispatch(TodoThunk.fetchTodo());
    }, [dispatch]);

    const handleCreate = useCallback(
        (newTodoText: string) => {
            if (newTodoText.trim() !== '') {
                dispatch(TodoThunk.createTodo(newTodoText));
            }
        },
        [dispatch]
    );

    const handleUpdate = useCallback(
        (id: string, updatedText: string) => {
            const updatedTodo: Partial<ITodo> = { text: updatedText };
            dispatch(TodoThunk.updateTodo({ id, data: updatedTodo }));
            setEditingTodo(null);
        },
        [dispatch]
    );

    const handleToggleCompleted = useCallback(
        (id: string, completed: boolean) => {
            const updatedTodo: Partial<ITodo> = { completed };
            dispatch(TodoThunk.updateTodo({ id, data: updatedTodo }));
        },
        [dispatch]
    );

    const handleDelete = useCallback(
        (id: string) => {
            dispatch(TodoThunk.deleteTodo(id));
        },
        [dispatch]
    );

    const handleEdit = useCallback(
        (todo: ITodo) => {
            setEditingTodo(todo);
        },
        []
    );

    return (
        <Center p={5}>
            <Container maxW="container.sm" centerContent>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>Todo List</Text>
                {loading && <Spinner size="xl" />}
                {error && (
                    <Alert status="error" mb={4}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <TodoForm
                    onCreate={handleCreate}
                    onUpdate={handleUpdate}
                    editingTodo={editingTodo}
                    loading={loading}
                />
                <VStack align="stretch" spacing={3} width="100%">
                    <TodoList
                        todos={todos}
                        onToggleCompleted={handleToggleCompleted}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </VStack>
            </Container>
        </Center>
    );
};

export default TodoApp;
