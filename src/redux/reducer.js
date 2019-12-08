const ADD_TASK = "TodoList/Reducer/ADD_TASK";
const DELETE_TASK = "TodoList/Reducer/DELETE_TASK";
const SET_TASK = "TodoList/Reducer/SET_TASK";
const CHECKED_IS_DONE = "TodoList/Reducer/CHECKED_IS_DONE";
const ACTIVATE_EDIT_MODE = "TodoList/Reducer/ACTIVATE_EDIT_MODE";
const DEACTIVATE_EDIT_MODE = "TodoList/Reducer/DEACTIVATE_EDIT_MODE";



const initialState = {
    tasks: [
        {id: 0, title: "Css", isDone: false, editMode: false},
        {id: 1, title: "JS", isDone: false, editMode: false},
        {id: 2, title: "HTML", isDone: false, editMode: false},
        {id: 3, title: "REACT JS", isDone: false, editMode: false}
    ],
    nextTaskId: 4,
    newText: ""
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
              id: state.nextTaskId,
                title: state.newText
            };

            return {
                ...state,
                tasks: [...state.tasks, newTask], nextTaskId: state.nextTaskId + 1,
                newText: ""
            };
            case SET_TASK:
            return {
                ...state, newText: action.newText
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id != action.taskId)
            };
        case CHECKED_IS_DONE:
            return {
                ...state,
                tasks: state.tasks.map(t => {
                    if(t.id !== action.taskId){
                        return{
                            ...t
                        }
                    } else {
                        return {
                            ...t,
                            isDone: action.isDone
                        }
                    }
                })
        };
        case ACTIVATE_EDIT_MODE:
           return {
               ...state,
                tasks: state.tasks.map(t => {
                    if(t.id !== action.taskId){
                        return {...t}
                    } else {
                        return {
                            ...t,
                            editMode: action.editMode
                        }
                    }
                })
        }
        case DEACTIVATE_EDIT_MODE:
           return {
               ...state,
                tasks: state.tasks.map(t => {
                    if(t.id !== action.taskId){
                        return {...t}
                    } else {
                        return {
                            ...t,
                            editMode: action.editMode
                        }
                    }
                })
        }

    }
    return state
};


export const addTaskAC = (newTask) => {
    return {
        type: ADD_TASK,
        newTask: newTask
    }
};
export const deleteTaskAC = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
};
export const setTaskAC = (newText) => {
    return {
        type: SET_TASK,
        newText: newText
    }
};
export const checkedIsDoneAC = (isDone, taskId) => {
    return {
        type: CHECKED_IS_DONE,
        isDone: isDone,
        taskId: taskId
    }
};
export const activateEditModeAC = (editMode,taskId) => {
    return {
        type: ACTIVATE_EDIT_MODE,
        editMode: editMode,
        taskId: taskId
    }
};
export const deactivateEditModeAC = (editMode,taskId) => {
    return {
        type: DEACTIVATE_EDIT_MODE,
        editMode: editMode,
        taskId: taskId
    }
};


export default reducer;