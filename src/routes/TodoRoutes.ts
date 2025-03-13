import { Router, Request, Response } from 'express';
import Todo from '../models/Todo';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post('/', async (req: Request, res: Response) => {
  const { text } = req.body;
  const newTodo = new Todo({ text, completed: false });
  await newTodo.save();
  res.status(201).json(newTodo);
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTodo);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

export default router;
