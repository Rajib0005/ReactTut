import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card/Card';
import todoImage from '../assets/images/todo_task_image.jpg'

export default function TodoCard() {
    return (
        <div>
            <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140, padding: '40px' }}
                        image={todoImage}
                        title="green iguana"
                    />
                    <CardContent sx={{ backgroundColor: '#1976d2' }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                            Your TodoList
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'whitesmoke' }}>
                            The advantages of having a to-do list include increased productivity,improved time management, enhanced organization, reduced stress levels,and a sense of accomplishment.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
