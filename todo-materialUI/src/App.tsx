import {useState} from "react"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Typography } from '@mui/material';
import {TodoProps} from './components/Todo'

export default function App() {
  const onToggleCompleted = (id:number)=>{
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        }
        return todo;
      });
    });
  }
  const addTodo = (text: string) => {
    setTodos(prev => {
      return [...prev, {
        id:Date.now(),
        isCompleted:false,
        title:text,
        onToggleCompleted:onToggleCompleted,
        onDelete:onDelete
      }]
    })
  }
  const onDelete = (id: number) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  }
  const [todos,setTodos] = useState<TodoProps[]>([
    {
      id:1,
      title:"Make a todo app",
      isCompleted:true,
      onToggleCompleted:onToggleCompleted,
      onDelete:onDelete
    },
    {
      id:2,
      title:"Delete this todo",
      isCompleted:false,
      onToggleCompleted:onToggleCompleted,
      onDelete:onDelete
    }
  ]);

  



  return (
    <div>
      <Typography variant='h2' align='center' marginTop={5} marginBottom={5} >My Todo app 🔥</Typography>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}
        onToggleCompleted={onToggleCompleted}
        onDelete={onDelete}/>
    </div>
    
  );
}