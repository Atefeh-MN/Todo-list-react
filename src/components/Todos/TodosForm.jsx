import styles from './TodoForm.module.css';
import { useState } from 'react';

const TodoForm = (props) => {
    const [input,setInput]=useState('');
    const changeHandler=(e)=>{
        setInput(e.target.value)
    }
    const submitHandler=(event)=>{
      event.preventDefault();
        if(!input){
            alert('add todos ')
            return;
        }
      props.addTodoHandler(input);
      setInput("");
        
    };
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='what would you like to do?' value={input} 
            onChange={changeHandler}/>
            <button type='submit'>Add Todo</button>
      </form>
     );
}
 
export default TodoForm
