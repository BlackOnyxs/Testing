/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => { 
    test('Debe retornar los valores por defecto', () => {

        const { result } =  renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;
    
        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    
    });

    test('should increment the counter', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment();
        })

        expect( result.current.counter ).toBe
     });

     test('should decrement the counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);

     });

     test('should reset to initial state', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter, reset } = result.current;

        act( () => {
            reset();
        });

        expect( result.current.counter ).toBe( counter );

    });
 })