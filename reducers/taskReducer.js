import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from "../actions/actionTypes";

const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ];
        case TOGGLE_ONE_TASK:
            return tasks.map(task =>
                (task.taskId === action.taskId) ? {...tasks, completed: !task.completed} : task
            );
        default:
            return tasks;
    }
};

export default taskReducer;
