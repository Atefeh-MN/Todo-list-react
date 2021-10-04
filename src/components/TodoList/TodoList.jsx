
import Todo from "./Todo";
import './todolist.css'
import { useState } from 'react';
import TodoForm from "../Todos/TodosForm";
const TodoList = ({todos,onComplete,onRemove,onUpdateTodo}) => {
    const [edit,setEdit]=useState({id:null,text:"",isComplete:false})

    const editTodo=(newValue)=>{
        onUpdateTodo(edit.id,newValue);
        setEdit({id:null,text:"",isComplete:false})
    }
    const renderTodos=()=>{
        if(todos.length===0)return<p>add some todos</p>;
        return todos.map((todo)=>{return( <Todo key={todo.id} todo={todo} onRemove={()=>onRemove(todo.id)} onComplete={()=>onComplete(todo.id)}
        onUpdate={()=>setEdit(todo)}/>)})
    };

    
    return ( 
        <div className="todolist"> 
           {edit.id?<TodoForm submitTodo={editTodo} edit={edit}/>:renderTodos()}
        </div>
     );
}
 
export default TodoList;