import  './TodoForm.css';
import { useState,useEffect,useRef } from 'react';



const TodoForm = (props) => {
    const [input,setInput]=useState(props.edit? props.edit.text :"");
       const changeHandler=(e)=>{
        setInput(e.target.value)
    }
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const submitHandler=(event)=>{
      event.preventDefault();
        if(!input){
            alert('add todos ')
            return;
        }
      props.submitTodo(input);
      
      setInput("");
        
    };
    return ( 
        <form onSubmit={submitHandler}>
           <input type="text" placeholder={props.edit?"updated Todo":'what would you like to do?'} value={input} 
            onChange={changeHandler} ref={inputRef}/>
            <button className={`btnF  ${props.edit ? "updateTodo":"addTodo"}`} type='submit'>{props.edit?"update":"Add Todo"}</button>
           
      </form>
     );
}
 
export default TodoForm
