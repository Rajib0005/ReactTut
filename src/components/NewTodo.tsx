import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import todoCheckImg from '../assets/images/Todo_Checklist.jpg'
import { Button } from '@mui/material';

export default function NewTodo({todo}:{todo:string}) {

  return (
    <>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{width: '20%'}}>
              <Typography component="div" variant="h5">
                {todo}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 141, justifyContent: 'flex-start'}}
            image={todoCheckImg}
            alt="Live from space album cover"
          />
          <Button color='inherit' sx={{marginLeft: '20px'}}>Delete</Button>
        </Card>
    </>
  );
}