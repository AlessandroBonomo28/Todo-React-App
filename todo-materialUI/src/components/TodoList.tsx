import React from 'react'
import { Container } from '@mui/material'
import Todo from './Todo'
import {TodoProps as TodoProps} from './Todo'

interface TodoListProps {
  todos: TodoProps[];
}

const TodoList = ({ todos } : TodoListProps) => {
  return (
    <Container>
        {todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
        ))}
    </Container>
  )
}

export default TodoList