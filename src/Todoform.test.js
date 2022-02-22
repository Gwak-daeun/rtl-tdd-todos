import React from "react";
import { fireEvent, render } from "@testing-library/react"; // = react-testing-library;
import Todoform from "./Tofoform";

describe('<Todoform />', () => {
    it('has input and a button', () => {
        const {getByText, getByPlaceholderText} = render(<Todoform />);
        getByPlaceholderText('할 일을 입력하세요.'); //input 태그가 있는지 없는지 확인
        getByText('등록'); //button이 있는지 없는지 
    })
    it('change input', () => {
        const {getByPlaceholderText} = render(<Todoform />);
        const input = getByPlaceholderText('할 일을 입력하세요.');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })
})