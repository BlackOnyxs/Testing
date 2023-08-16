/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Test on <TodoApp />', () => { 

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Use features', done: false},
            { id: 2, description: 'Why u do not use features?', done: true},
            { id: 3, description: 'Use features dude!', done: false},
        ], 
        todosCount: 3, 
        pendingTodosCount: 2, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn(),
    });

    test('should show the component correctly', () => { 

        render( <TodoApp /> );

        expect(screen.getByText('Use features')).toBeTruthy();
        expect(screen.getByText('Why u do not use features?')).toBeTruthy();
        expect(screen.getByText('Use features dude!')).toBeTruthy();
        
    });

});