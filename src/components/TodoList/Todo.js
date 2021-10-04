import  './todolist.css'
const Todo = ({todo,onComplete,onRemove}) => {
    return ( 
        <div key={todo.id} className="container">
        <div onClick={onComplete} className={todo.isCompleted ? "completed" : "todo"}>{todo.text}</div>
        <div className="buttonContainer">
        <button className="button" >Edit</button>
        <button  className="button" onClick={onRemove} >Deleted</button>
        </div>
      </div>
     );
}
 
export default Todo;