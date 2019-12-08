import React from 'react'
import {connect} from "react-redux";
import {addTaskAC, setTaskAC} from "../redux/reducer";
import Task from "./Task";


const TodoList = (props) => {


    let addTask = () => {
      props.addTask();
    };

    let onTitleChanged = (e) => {
        props.setTask(e.currentTarget.value); // newText
    };

    let tasks = props.tasks.map(task => <Task task={task} />);

    return (
        <div>
            <h1>TodoList</h1>
            <div>
                <input type="text" value={props.newText} onChange={onTitleChanged}/>
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks}
            </ul>
        </div>

    )
};
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        newText: state.newText,
        editMode: state.editMode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => {
            const action = addTaskAC(newTask);
            dispatch(action);
        },
        setTask: (newText) => {
          const action = setTaskAC(newText);
          dispatch(action)
        }
    }
};

const connectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connectedTodoList;