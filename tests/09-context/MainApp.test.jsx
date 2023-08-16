/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Test on <MainApp />', () => {
    test('should show the Home Page', () => {
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
         );
        expect( screen.getByText('HomePage')).toBeTruthy();
    });

    test('should show the Login Page', () => {
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
         );
        expect( screen.getByText('LoginPage')).toBeTruthy();
    });
});