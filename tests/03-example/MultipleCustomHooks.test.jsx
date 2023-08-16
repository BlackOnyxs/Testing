
import { screen, render } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';
import { fireEvent } from "@testing-library/react/types";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test on <MultipleCustomHooks />', () => { 

    const counterIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: counterIncrement
    });

    beforeEach( () =>{
        jest.clearAllMocks();
    })

    test('should show the component by default', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect( nextButton.disabled).toBeTruthy();
    });

    test('should show a quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Robin', quote: 'Think twice, code once'}],
            isLoading: false,
            hasError: null
        });



        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Think twice, code once')).toBeTruthy();
        expect( screen.getByText('Robin')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nextButton );

        expect( counterIncrement ).toHaveBeenCalled();

     })
 })