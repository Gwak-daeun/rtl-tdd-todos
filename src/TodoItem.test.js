import React from "react";
import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TODO 배우기',
        done: false
    };
    const setup = (props = {}) => {
        const initialProps = {todo: sampleTodo};
        const utils = render(<TodoItem {...initialProps} {...props} />);
        const {getByText} = utils;
        const todo = props.todo || initialProps.todo;
        const button = getByText('삭제');
        const span = getByText(todo.text);
        return {...utils, button, span};
    };
    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });
})