import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AccessManager from '../services/AccessManager'
import TodoCard from '../components/TodoCard'
import TodoTabs from '../components/TodoTabs'
import NewTodo from '../components/NewTodo'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import EmptyPage from './EmptyPage'

export default function Todo() {
    const {todo} = useContext(TodoContext)
    return (
        <div className='todo-container'>
            <Grid sx={{ marginTop: '40px' }} container spacing={3} item xs={8}>
                <AccessManager permission='user.todos'>
                    {
                        (hasAccess) => (
                            hasAccess ?
                                (<>
                                    <TodoTabs />
                                </>) :
                                (
                                    <TodoCard />
                                )
                        )
                    }
                </AccessManager>
                <Grid item xs={8}>
                    {
                        todo.length ? (
                            
                            todo.map((todo)=> 
                            <ul>
                                <li><NewTodo todo={todo} /></li>    
                            </ul>
                            )
                        ): <EmptyPage />
                    }
                </Grid>
            </Grid>
            <Outlet />
        </div>
    )
}
