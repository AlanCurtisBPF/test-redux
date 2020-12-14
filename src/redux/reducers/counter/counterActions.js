

// Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// Actions
export const actionTest=()=>(dispatch, getState)=>{
    const { count } = getState().counter
    console.log('actionTest', {count})
    const type = INCREMENT
    const payload = {}
    dispatch({type, payload}) ;
}

export const increment=()=>(dispatch, getState) => {
  const {count}= getState().counter;
  const payload = {count: count+1}
  const type = INCREMENT
  dispatch({type, payload}) ;
}

  export const decrement=()=>(dispatch, getState) => {
    const {count}= getState().counter;
    const payload = {count: count-1}
    const type = DECREMENT
    dispatch({type, payload}) ;
  }

  export const reset=()=>(dispatch) => {
    const payload = {}
    const type = RESET
    dispatch({type, payload}) ;
  }
