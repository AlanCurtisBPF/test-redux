import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  increment,
  decrement,
  reset
} from './counterActions';
import {
    INCREMENT,
    DECREMENT,
    RESET
} from './counterActions';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('counterActions',()=>{
    let store;
    beforeEach(()=>{
        store = mockStore({ counter: {count:0} })
    })

    it('test run',()=>{
        expect(true).toEqual(true);
    });

    it('increments', ()=>{
        const payload  = {count: 1}
        const expectedActions = [
            { 
                type: INCREMENT,
                payload
            }
        ]
        store.dispatch(increment());

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('decrement', ()=>{
        const payload  = {count: -1}
        const expectedActions = [
            { 
                type: DECREMENT,
                payload
            }
        ]
        store.dispatch(decrement());

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('reset', ()=>{
        const payload  = {}
        const expectedActions = [
            { 
                type: RESET,
                payload
            }
        ]
        store.dispatch(reset());
        console.log(store.getState())

        expect(store.getActions()).toEqual(expectedActions)
    });
})
