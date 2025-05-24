import { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
    /* 
        true(myTodos 변수에 변동이 있으면) render() 호출
        false(myTodos 변수에 변동이 없으면) render() 호출 안함. 렌더링 생략
    */

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

TodoItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.number,
    onToggle: PropTypes.func,
    onRemove: PropTypes.func
};

export default TodoItem