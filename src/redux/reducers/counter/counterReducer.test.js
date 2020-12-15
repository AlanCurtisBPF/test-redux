import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from './counterTypes';
import * as actions from './counterActions';
import counterReducer, {initialState} from './counterReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('counterReducer', ()=>{
    let store;
    beforeEach(() => {
      store = mockStore({ counter: { count: 0 } });
    });


    it('test run', ()=>{
        expect(true).toEqual(true)
    })

    it('should return inital state: version 01', ()=>{
        expect(counterReducer(undefined, {})).toEqual(initialState)
    });

    test('should return inital state: version 02', ()=>{
        const state = counterReducer(undefined, {type: '@@INIT'});
        expect(state).toEqual(initialState);
      });

    it( 'should handle INCREMENT', ()=>{

        const action = {
            type: types.INCREMENT,
            payload: { count: 1}
        };

        const state= counterReducer(undefined, action);

        expect(state).toEqual({count:1})
    })

    it( 'should handle INCREMENT twice', async ()=>{
        // need to be able to dispatch multiple actions to test reducer.
        /*
        const action1 = {
            type: types.INCREMENT,
            payload: { count: store.getState().counter.count + 1}
        };
        const action2 = {
            type: types.INCREMENT,
            payload: { count: store.getState().counter.count + 1}
        };
        const actions = [action1, action2]

        await actions.forEach(action=>{
            console.log({action})
            store.dispatch(action)
        })

        console.log(store.getActions())


        const actual = store.getState();
        const expected = {
            counter: {count: -5}
        }
        expect(actual).toEqual(expected)
        // */
    })
})

