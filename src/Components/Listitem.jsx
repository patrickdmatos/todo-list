import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';

export default function CheckboxList({todo, deleteItem}) {
    return (
        <Paper>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <DeleteIcon onClick={() => deleteItem(todo.id)} />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.text} />
                </ListItemButton>
            </ListItem>
        </Paper>
    );
}