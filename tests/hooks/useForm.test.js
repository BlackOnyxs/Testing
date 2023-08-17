/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Test on useForm', () => { 

    const initialForm = {
        name: 'Robin',
        email: 'robin@email.com'
    }

    test('should return default values', () => { 
        const { result } = renderHook( ()=> useForm(initialForm) );
        expect( result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        })
    });

    test('should change the name field', () => { 
        const target = {
            name: 'name',
            value: 'Eliecer'
        };

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange({ target });
        });

        expect( result.current.name).toBe( target.value );
        expect( result.current.formState.name ).toStrictEqual(target.value);

    });

    test('should reset to initial values', () => { 
        const target = {
            name: 'name',
            value: 'Eliecer'
        };

        const { result } = renderHook( () => useForm(initialForm) );
        const { onResetForm, onInputChange } = result.current;

        act( () => {
            onInputChange({ target });
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });
});