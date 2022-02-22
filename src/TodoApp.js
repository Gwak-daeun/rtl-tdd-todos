import React from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";

const TodoApp = () => {
    return(
        <div>
            <Todoform data-testid='helloworld' />
            <TodoList todos={[]} />
        </div>
    );
};

export default TodoApp;