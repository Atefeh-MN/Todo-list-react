import './navbar.css'
import Select from 'react-select';
import { useState } from 'react';
const options = [
    { value: 'All', label: 'All Todo' },
    { value: 'uncompleted', label: 'uncompleted Todo' },
    { value: 'completed', label: 'completed Todo' },
  ];
const NavBar = ({unCompletedTodos,onSelect,selectedOption}) => {
    

    if(!unCompletedTodos)return<h2>Set your today Todos!</h2>; 

    return ( <header>
        
        <span className="span">{unCompletedTodos}</span>
        <h2> are not completed</h2>
        <Select
              value={selectedOption}
              onChange={onSelect}
              options={options}
              className="select"
             />
    </header> );
}
 
export default NavBar;