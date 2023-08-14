import { useState}  from "react";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Addtodoaction, Removetodoaction } from './actions/Todoactions';

function App(){
const[todo, setTodo]=useState();
const dispatch=useDispatch();
const Todo= useSelector(state=>state.Todo);
const { todos } = Todo;
const handleSubmit=(e)=>{
 
    e.preventDefault();
    dispatch(Addtodoaction(todo));
  }
const removeHandler=(t)=>{
  dispatch(Removetodoaction(t));
}

  return (
    <div className="App">
    <header className='header'>
      
    </header>  
      <h2>my ToDo List </h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter Task'/>
        onChange={(e)=>setTodo(e.target.value)}
        <button type='submit'>Add</button>
          
             </form>
             <ul>
              {
                todos && todos.map((t)=>( 
            <li key={t.id} className='singletodo'>
             <span className='todotask'>{t.todo}</span>
             <span><button>
              onClick={()=>removeHandler(t)}
              Delete</button></span>
      </li>))}  
      </ul>
    </div>
  );
}

export default App;
