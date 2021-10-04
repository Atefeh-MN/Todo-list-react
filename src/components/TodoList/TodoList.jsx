
import Todo from "./Todo";
import './todolist.css'
const TodoList = ({todos,onComplete,onRemove}) => {
    const renderTodos=()=>{
        if(todos.length===0)return<p>add some todos</p>;
        return todos.map((todo)=>{return( <Todo key={todo.id} todo={todo} onRemove={()=>onRemove(todo.id)} onComplete={()=>onComplete(todo.id)}/>)})
    };

    
    return ( 
        <div className="todolist"> 
           {renderTodos()}
        </div>
     );
}
 
export default TodoList;