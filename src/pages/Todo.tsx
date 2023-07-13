import { Avatar, Box, Card, CardContent, CardMedia, Container, CssBaseline, Grid, InputAdornment, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AccessManager from '../services/AccessManager'
import todoImage from '../assets/images/todo_task_image.jpg'
import { Controller } from 'react-hook-form';
import { AccountCircle } from '@mui/icons-material';

const defaultTheme = createTheme();
export default function Todo() {
    return (
        <div>
            <Grid sx={{ marginTop: '40px' }} container spacing={2} >
                <AccessManager permission='user.todos'>
                    {
                        (hasAccess) => (
                            hasAccess ?
                                (<>
                                    {console.log(hasAccess)}
                                    <Grid item xs={6}>
                                        <p>Create New Todo</p>
                                    </Grid>
                                </>) :
                                (<>
                                    <Grid item xs={6}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140, padding: '40px' }}
                                                image={todoImage}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="div">
                                                    Your TodoList
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    The advantages of having a to-do list include increased productivity,improved time management, enhanced organization, reduced stress levels,and a sense of accomplishment.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </>)
                        )
                    }
                </AccessManager>
                <Grid item xs={4}>
                    <p>Create New Todos</p>
                </Grid>
            </Grid>
            <Outlet />
        </div>
    )
}
