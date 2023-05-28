import { Typography, Card, CardContent,IconButton, Container} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onToggleCompleted: (id:number) => void;
  onDelete: (id:number) => void;
}

export default function Todo({id, title, isCompleted, onToggleCompleted, onDelete}: TodoProps) {
  return (
    <div>
        <Container>
            <Card variant='outlined' style={{marginTop:35}}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <IconButton onClick={()=>onToggleCompleted(id)}>
                        <DoneIcon />
                    </IconButton>
                    {title}
                    {isCompleted? " 🟢 Done": " 🟠 In progress"}
                    <IconButton style={{float:"right"}}
                                onClick={()=>onDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                  </Typography>
                </CardContent>
            </Card>
        </Container>
    </div>
  )
}

