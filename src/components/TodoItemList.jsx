import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, myToggle, myRemove } = this.props;
        return (
            <div>
                <TodoItem text="오늘의 할일1" checked={false} />
                <TodoItem text="오늘의 할일2" checked={true} />
            </div>
        );
    }
}
TodoItemList.propTypes = {
    todos: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func
};
export default TodoItemList;