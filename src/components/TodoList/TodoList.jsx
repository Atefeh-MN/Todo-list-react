
import {BsTrash,BsCheck } from "react-icons/bs";
import style from './todolist.module.css';
const TodoList = (props) => {
    const todolist=[...props.todos]
    return ( 
        <div>
            <p>Todo List</p>
            <ul>
                {todolist.map((p)=>{return(
                <li key={p.id}>
                  <p className={style.todo}>{p.text}</p>
                  <button className={style.button} ><BsCheck/></button>
                  <button  className={style.button}><BsTrash/></button>
                </li>)})}
            </ul>

        </div>
     );
}
 
export default TodoList;