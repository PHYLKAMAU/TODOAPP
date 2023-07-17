import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const[InputText, setInputText] =useState("");
  const[todos, setTodos] =useState([]);
  const[status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] =useState([])

  return (
    <div className="App">
     <header>
      <h1>My Todo List</h1>
      </header>
      <Form 
       InputText={InputText} 
      todos ={todos}
       setTodos = {setTodos} 
       setInputText={setInputText} 
       setStatus ={setStatus} />
      <TodoList 
      setTodos ={setTodos}
      todos={todos}/>
    
    </div>
  );
}

export default App;
