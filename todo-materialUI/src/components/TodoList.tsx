import { Container } from '@mui/material'
import Todo from './Todo'
import {TodoProps as TodoProps} from './Todo'

interface TodoListProps {
  todos: TodoProps[];
  onToggleCompleted: (id:number) => void;
  onDelete: (id:number) => void;
}

export default function TodoList({ todos ,onToggleCompleted, onDelete} : TodoListProps) {
  return (
    <Container>
        {todos.sort((a, b) => b.id - a.id).map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} 
                isCompleted={todo.isCompleted}
                onToggleCompleted={onToggleCompleted}
                onDelete={onDelete}/>
        ))}
    </Container>
  )
}