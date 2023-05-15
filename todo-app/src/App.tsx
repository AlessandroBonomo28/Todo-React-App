import { useState } from 'react'
import Todo, { ToDoProps } from './components/Todo'
import { CustomButton } from './components/CustomButton'
import { CustomText } from './components/CustomText'
import { Container } from './components/Container'
import { TodoListItem } from './components/TodoListItem'



function App() {
  const [todos, setTodos] = useState<ToDoProps[]>([]);
  const [curId,setId] = useState(0);
  const addTodo = () =>{
    const inputName = document.getElementById("todoName") as HTMLInputElement
    const id = curId;
    setId(id+1);
    const todo : ToDoProps= {
      name: inputName.value, isCompleted: false,id:id ,toggleCompleted: ()=> toggleTodo(id)
    }
    setTodos([...todos,todo])
  }
  const deleteTodo = (id : number) =>{
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }
  const toggleTodo = (id: number) => {
    let todoToUpdate = todos.find((t)=> t.id == id)!;
    let newTodos = [...todos];
    todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
    setTodos(newTodos);
  };
  return (
    <>
      <Container>
        <div className="addTodo">
          <h1>Your Todo list</h1>
          <CustomText type="text" id="todoName" placeholder='Your todo' maxLength={20}/>
          <CustomButton onClick={addTodo}>Add todo</CustomButton>
        </div>
        <ul className='todoList'>

          {todos.map((todo)=>{
            return (
              <TodoListItem>
                <Todo id={todo.id} name={todo.name} isCompleted={todo.isCompleted} toggleCompleted={() => toggleTodo(todo.id)}></Todo>
                <CustomButton onClick={() => deleteTodo(todo.id)}>Delete</CustomButton>
              </TodoListItem>
            );
          })}
        </ul>
      </Container>
    </>
  )
}

export default App
