import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Test on Todo Reducer', () => {
    const initialState = [
      {
        id: 1,
        description: 'Demo todo',
        done: false,
      },
    ];

    test('should return the initial state', () => {
      const newState = todoReducer(initialState, {});
      expect(newState).toBe(initialState);
    });

    test('should add a new Todo', () => {
      const action = {
        type: '[TODO] Add Todo',
        payload: {
          id: 2,
          description: 'new Todo',
          done: false,
        },
      };    
      const newState = todoReducer(initialState, action);
      expect(newState.length).toBe(2);
      expect(newState).toContain(action.payload);
    }); 

    test('should delete one Todo', () => {
      const action = {
        type: '[TODO] Remove Todo',
        payload: 1,
      };
      const newState = todoReducer(initialState, action);   
      expect(newState.length).toBe(0);
    }); 

    test('should toggle a todo status', () => {
      const action = {
        type: '[TODO] Toggle Todo',
        payload: {
          id: 1,
        },
      };

      const newState = todoReducer(initialState, action);   
      expect(newState.at(0).done).toBeFalsy();
    });
});
