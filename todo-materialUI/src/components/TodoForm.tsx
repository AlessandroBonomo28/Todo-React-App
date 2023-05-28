import React, {useState} from 'react'
import { FormControl, Button, Container,TextField } from '@mui/material'

interface TodoFormProps{
  addTodo:(text:string) => void;
}

export default function TodoForm({addTodo} : TodoFormProps) {
  const [text,setText] = useState<string>(""); 
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); // annulla la ricarica della pagina
    addTodo(text);
  }
  return (
    <Container maxWidth="sm">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <FormControl fullWidth={true}>
            <TextField label="Your todo" required={true}
                        value={text} onChange={(e)=>{
                          if(e.target.value.length>50){
                            return;
                          }
                          setText(e.target.value);
                        }}/>
            <Button 
              type="submit"
              variant="contained" 
              color="primary"
              style={{
                marginTop:5
              }}
              >ADD
            </Button>
        </FormControl>
        </form>
    </Container>
  )
}