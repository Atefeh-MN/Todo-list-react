import styles from './TodoApp.module.css'
import TodoForm from '../Todos/TodosForm';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

const TodoApp = () => {
    const [todos,setTodos]=useState([]);
    const addTodoHandler=(input)=>{

        const newTodo={id:Math.floor(Math.random()*1000),text: input ,isComplieted:false};
        setTodos([...todos,newTodo]);
    };
    return ( 
        <div className={styles.container}>
         <TodoForm addTodoHandler={addTodoHandler}/>
         <TodoList/>
    
            
        </div>
     );
}
 
export default TodoApp;