import TaskItemComponent from '../components/TaskItemComponent';
import {toggleTask} from '../actions';
import {connect} from 'react-redux';

export default connect()(TaskItemComponent);
