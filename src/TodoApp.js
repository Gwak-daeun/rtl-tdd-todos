import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
        id: 1,
        text: "TDD 배우기",
        done: true,
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true,
        },
]);
        return(
        <div>
            <Todoform data-testid='helloworld' />
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoApp;