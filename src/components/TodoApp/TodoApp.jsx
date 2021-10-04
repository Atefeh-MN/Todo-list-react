import styles from './TodoApp.module.css'
import TodoForm from '../Todos/TodosForm';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

const TodoApp = () => {
    const [todos,setTodos]=useState([]);
    const addTodoHandler=(input)=>{

        const newTodo={id:Math.floor(Math.random()*1000),text: input ,isCompleted:false};
        setTodos([...todos,newTodo]);
    };
    const completedTodoHandler=(id)=>{
        const indexTodo=todos.findIndex(item=>item.id===id);
        const newTodo={...todos[indexTodo]};
         newTodo.isCompleted =!newTodo.isCompleted;
         const updatedTodos=[...todos]
         updatedTodos[indexTodo]= newTodo;
         setTodos(updatedTodos)

    }
    const removedHandler=(id)=>{
         const updatedTodos=todos.filter(item=>item.id!==id);
         setTodos(updatedTodos)
    }
    return ( 
        <div className={styles.container}>
         <TodoForm addTodoHandler={addTodoHandler}/>
         <TodoList todos={todos} onComplete={completedTodoHandler} onRemove={removedHandler}/>
    
            
        </div>
     );
}
 
export default TodoApp;