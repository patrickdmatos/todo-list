import Form from './Components/Form'
import CheckboxList from './Components/Listitem';
import { Container, List } from '@mui/material'
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const deleteItem = (id) => {
    let arrayDeltedItem = todos.filter((todo) => todo.id !== id)
    setTodos(arrayDeltedItem)
  }

  const todoHandler = (todo) => {
    setTodos([...todos,todo]);
  }
  return (
    <Container maxWidth="xs" style={{ marginTop: "1rem" }}>
      <Form todoHandler={todoHandler} />
      <List sx={{ marginTop: "1rem", width: '100%' }}>
        {todos.map((itemList) => (
          <div key={itemList.id} style={{ marginTop: "0.5rem"}}>
            <CheckboxList deleteItem={deleteItem} todo={itemList}/>
          </div>
        ))}
      </List>
    </Container>
  );
}

export default App;
