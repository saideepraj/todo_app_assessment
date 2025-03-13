import { Button, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { ITodo } from '../models/Todo';

interface TodoFormProps {
    onCreate: (text: string) => void;
    onUpdate: (id: string, updatedText: string) => void;
    editingTodo: ITodo | null;
    loading: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({ onCreate, onUpdate, editingTodo, loading }) => {
    const [newTodoText, setNewTodoText] = useState<string>('');

    useEffect(() => {
        if (editingTodo) {
            setNewTodoText(editingTodo.text);
        }
    }, [editingTodo]);

    const handleSubmit = () => {
        if (editingTodo) {
            onUpdate(editingTodo._id?.toString() || '', newTodoText);
        } else {
            onCreate(newTodoText);
        }
        setNewTodoText('');
    };

    return (
        <FormControl mb={4}>
            <FormLabel>{editingTodo ? 'Edit Todo' : 'Add a New Todo'}</FormLabel>
            <Flex>
                <Input
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder={editingTodo ? 'Edit your todo' : 'Enter a new todo'}
                    mr={2}
                    maxW="30rem"
                />
                <Button
                    colorScheme="teal"
                    onClick={handleSubmit}
                    isDisabled={newTodoText.trim() === '' || loading}
                    isLoading={loading}
                    loadingText={editingTodo ? "Saving" : "Adding"}
                >
                    {editingTodo ? 'Save' : 'Add Todo'}
                </Button>
            </Flex>
        </FormControl>
    );
};

export default TodoForm;
