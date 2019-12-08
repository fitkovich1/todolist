import React from 'react'
import "../App.css"
import {connect} from "react-redux";
import {activateEditModeAC, checkedIsDoneAC, deactivateEditModeAC, deleteTaskAC} from "../redux/reducer";


const Task = (props) => {

    let deleteTask = () => {
        props.deleteTask(props.task.id);
    };

    let changeIsDone = (e) => {
        props.checkedIsDone(e.currentTarget.checked, props.task.id);
    };

    let activateEditMode = () => {
        props.activateEditMode(!props.task.editMode, props.task.id)
    };
    let deactivateEditMode = () => {
        props.deactivateEditMode(!props.task.editMode, props.task.id)
    };

    let classForLi = props.task.isDone ? "todoList-task done" : " todoList-task";
    return (
        <div>
            <li className={classForLi}>
                <input type='checkbox' checked={props.task.isDone} onClick={changeIsDone}/>
                {props.task.editMode ?
                    <input value={props.task.title} onBlur={deactivateEditMode} autoFocus={true}/>
                    :
                    <span onClick={activateEditMode}>{props.task.id} : {props.task.title}</span>
                }
                <button onClick={deleteTask}>X</button>
            </li>
        </div>

    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskId) => {
            const action = deleteTaskAC(taskId);
            dispatch(action);
        },
        checkedIsDone: (isDone, taskId) => {
            const action = checkedIsDoneAC(isDone, taskId);
            dispatch(action)
        },
        activateEditMode: (editMode,taskId) => {
         const action = activateEditModeAC(editMode, taskId);
         dispatch(action)
        },
        deactivateEditMode: (editMode,taskId) => {
         const action = deactivateEditModeAC(editMode, taskId);
         dispatch(action)
        }
    }
};

const connectedTask = connect(null, mapDispatchToProps)(Task);

export default connectedTask;