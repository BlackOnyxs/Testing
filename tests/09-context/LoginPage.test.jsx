/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Test on <LoginPage />', () => {

    const setUser = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });

    test('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );
        expect( setUser ).toBeCalledWith( { id: 123, name: 'Juan', email: 'juan@google.com' } );

    });


});