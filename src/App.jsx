import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  //상태변수를 포함하고 있는 state 객체
  state = {
    todo: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
  };
  //이벤트핸들러 함수 선언
  handleChange = (e) => {
    this.setState({
      todo: e.target.value // input field의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { todo, todos } = this.state;
    const newTodo = {
      id: this.id++,
      text: todo,
      checked: false
    };

    this.setState({
      todos: [...todos, newTodo],
      todo: '', // input 초기화
    });
  }
  
  handleEnter = (e) => {
    // 눌려진 키가 Enter Key 이면 handleCreate 호출
    if (e.keyCode === 13) {
      this.handleCreate();
    }
  };

  render() {
    const { todo } = this.state;
    const { handleChange, handleCreate, handleEnter } = this;

    return (
      <TodoListTemplate form=
      {<Form 
        todo={todo} 
        myEnter={handleEnter} 
        myChange={handleChange}
        myCreate={handleCreate} />
      }>
        <TodoItemList />
      </TodoListTemplate>
    );
  } //render

}
export default App;