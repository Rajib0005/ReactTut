import { Box, Button, Grid, TextFieldProps } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoHOCText({ Component }: { Component: React.FC<TextFieldProps> }) {

    const {setTodos, value, setValue } = useContext(TodoContext)

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={setTodos}
        >
            <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} >
                <Grid item>
                    <Component value={value} onChange={setValue} />
                </Grid>
                <Grid item>
                    <Button type="submit" 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    sx={{ display: 'flex', borderRadius: "25px", justifyContent: 'flex-start' }} 
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
