import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'

export default function Form({todoHandler}) {
    const [text, setText] = useState(null)
    const [id, setId] = useState(1)

    const createObj = (text) => {
        const todoObj = {text:text, id: id}
        todoHandler(todoObj)
        setId(id+1)
    }

    return (
        <Paper style={{ padding: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TextField
                    id="outlined-basic"
                    label="Tarefa"
                    variant="outlined"
                    onInput={(event) => setText(event.target.value)}
                    fullWidth />
                <Button variant="text" onClick={() => createObj(text)}>Add</Button>
            </div>
        </Paper>
    )
}