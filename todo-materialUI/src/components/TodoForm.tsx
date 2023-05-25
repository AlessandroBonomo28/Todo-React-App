import React from 'react'
import { FormControl, Button, Container,TextField } from '@mui/material'
const TodoForm = () => {
  return (
    <Container maxWidth="sm">
        <FormControl fullWidth={true}>
            <TextField label="Your todo" required={true}/>
            <Button 
              variant="contained" 
              color="primary"
              style={{
                marginTop:5
              }}
              >ADD
            </Button>
        </FormControl>
    </Container>
  )
}

export default TodoForm