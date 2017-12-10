import TaskListComponent from '../components/TaskListComponent';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasks : !state.taskReducer ? [] : state.taskReducer
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;