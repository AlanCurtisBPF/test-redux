import {useState} from 'react';
import { connect } from "react-redux";
import {
 increment as incrementAction,
 decrement as decrementAction,
 reset as resetAction,
} from "../../redux/reducers/counterComplex/counterComplexActions";

const CounterComplex = (props) => {
  const { increment, decrement, reset, count } = props;
  const [margin , setMargin] = useState(1);

  const handlePlus = ()=>{
    increment(margin)
  }
  const handleMinus = ()=>{
    decrement(margin)
  }
  const handleReset = ()=>{
    reset()
  }

  return (
    <div className="Conter">
      CounterComplex Comp
      <div>Count</div>
      <div>{count}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => console.log(props)}>Log</button>
      <div>margin to increase or decrease by</div>
      <input type="number" value={margin} onChange={(e)=>setMargin(e.target.value)} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (margin) => dispatch(incrementAction(margin)),
    decrement: (margin) => dispatch(decrementAction(margin)),
    reset: () => dispatch(resetAction()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counterComplex.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComplex);
