import React from 'react'
import { Typography, Card, CardContent,IconButton, Container, Chip} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ITodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Todo = ({id, title, isCompleted}: ITodoItem) => {
  return (
    <div>
        <Container>
            <Card variant='outlined' style={{marginTop:35}}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <IconButton >
                        <DoneIcon />
                    </IconButton>
                    {title}
                    <IconButton style={{float:"right"}}>
                        <DeleteIcon />
                    </IconButton>
                  </Typography>
                </CardContent>
            </Card>
        </Container>
    </div>
  )
}

export default Todo