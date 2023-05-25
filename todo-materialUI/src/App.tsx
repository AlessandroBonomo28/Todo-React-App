import React, {useState} from "react"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Typography } from '@mui/material';
import {TodoProps} from './components/Todo'

export default function App() {
  const [todos,setTodos] = useState<TodoProps[]>([
    {
      id:1,
      title:"Fare la spesa",
      isCompleted: false
    }
  ]);
  return (
    <div>
      <Typography variant='h2' align='center' marginBottom={2} >My Todo app</Typography>
      <TodoForm/>
      <TodoList todos={[
        {
          id:2,
          title:"test",
          isCompleted:false
        }
      ]}/>
    </div>
    
  );
}