import styles from './TodoApp.module.css'
import TodoForm from '../Todos/TodosForm';
import TodoList from '../TodoList/TodoList';
import NavBar from '../NavBar/NavBar'
import { useState, useEffect } from 'react';

const TodoApp = () => {
    const [todos,setTodos]=useState([]);
    const[filteredTodos,setFiltetodos]=useState([])
    const [selectedOption,setSelectedOption]=useState("All Todo")

    useEffect(()=>{
        filterTodoHandler(selectedOption.value);
    },[todos,selectedOption])
    
    const addTodo=(input)=>{

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
         const filteredTodos=todos.filter(item=>item.id!==id);
         setTodos(filteredTodos)
    }
    const updateHandler=(id,newValue)=>{
        const indexTodo=todos.findIndex(item=>item.id===id);
        const newTodo={...todos[indexTodo]};
         newTodo.text=newValue;
         const updatedTodos=[...todos]
         updatedTodos[indexTodo]= newTodo;
         setTodos(updatedTodos)

    }
    const selectHandler = (selectedOption) => {
        setSelectedOption(selectedOption);
         filterTodoHandler(selectedOption.value)
      };
   
    const filterTodoHandler=(value)=>{
          
          switch(value){
            case "completed":
            setFiltetodos(todos.filter(item=>item.isCompleted))
            break;
            case "uncompleted":
            setFiltetodos(todos.filter(item=>!item.isCompleted))
            break;
            default:
            setFiltetodos(todos)
         }};
         
         

    return ( 
        <div className={styles.container}>
          <NavBar unCompletedTodos={todos.filter(item=>item.isCompleted===false).length} onSelect={selectHandler}
          selectedOption={selectedOption}/>  
         <TodoForm submitTodo={addTodo} />
         
         <TodoList todos={filteredTodos} onComplete={completedTodoHandler} onRemove={removedHandler} onUpdateTodo={updateHandler}/>
    
            
        </div>
     );
}
 
export default TodoApp;