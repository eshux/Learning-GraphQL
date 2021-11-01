interface Todo {
  id: string;
  type: string;
}

export interface TodoType {
  todos: Todo[];
  todo: Todo;
}
