import React, { useState } from "react";
import {connect} from 'react-redux';
import { addTodo } from '../../actions';

import './Form.css';

interface Props {
    title: string;
    dispatch: any
}

const Form : React.FC<Props> = ({title, dispatch}) => {

    const [todoText, setTodoText] = useState('');

    const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("inputting... "+todoText);
        dispatch(addTodo(todoText));
    }

    return <form className="form" onSubmit={handleAdd}>
        <label>
            {title} 
        </label>
        <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
}

export default connect()(Form);