/**
 * @jest-environment jsdom
 */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react/';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Tests on <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del alma.',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('should show the pending todo', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });

    test('should show the complete todo', () => { 
        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
    });

    test('The span should call the toggle function', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('The button should call the delete function', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock }
            />
        );
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });


});