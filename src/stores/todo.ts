import { makeVar } from '@apollo/client';

export interface Todo {
  id: number;
  content: string;
  done: boolean;
}

const todoIdCounterVar = makeVar(0);
export const todoVar = makeVar<Todo[]>([]);

export const addTodo = (content: string) => {
  const prevId = todoIdCounterVar();
  const currentTodo = todoVar();
  const newTodo = { id: prevId + 1, content, done: false };
  todoVar([...currentTodo, newTodo]);
  todoIdCounterVar(prevId + 1);
};
export const deleteTodo = (id: number) => {
  const currentTodo = [...todoVar()];
  const deleteIndex = currentTodo.findIndex((todo) => todo.id === id);

  if (deleteIndex === -1) return;

  currentTodo.splice(deleteIndex, 1);
  todoVar(currentTodo);
};

export const selectedTodos = (todo: Todo, done: boolean) => {
  todo.done = done;
};

export const onRemoveSelected = () => {
  return todoVar(todoVar().filter((v) => v.done === false));
};

export default todoVar;
