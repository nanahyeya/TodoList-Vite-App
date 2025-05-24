import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    /* 
        true(myTodos 변수에 변동이 있으면) render() 호출
        false(myTodos 변수에 변동이 없으면) render() 호출 안함. 렌더링 생략
    */

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.myTodos !== nextProps.myTodos;
    }

    render() {
        const { myTodos, myToggle, myRemove } = this.props;
        const todoList = myTodos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={myToggle}
                    onRemove={myRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func
};
export default TodoItemList;