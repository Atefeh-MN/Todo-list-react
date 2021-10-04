import  './todolist.css'
const Todo = ({todo,onComplete,onRemove,onUpdate}) => {
    return ( 
        <div key={todo.id} className="container">
        <div onClick={onComplete} className={todo.isCompleted ? "completed" : "todo"}>{todo.text}</div>
        <div className="buttonContainer">
        <button className="btn "  onClick={onUpdate} >Edit</button>
        <button  className="btn remove" onClick={onRemove} >Deleted</button>
        </div>
      </div>
     );
}
 
export default Todo;