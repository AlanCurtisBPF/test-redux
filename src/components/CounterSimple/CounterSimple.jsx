import { connect } from "react-redux";
import {
 increment as incrementAction,
 decrement as decrementAction,
 reset as resetAction,
} from "../../redux/reducers/counterSimple/counterSimpleActions";

const CounterSimple = (props) => {
  const { increment, decrement, reset, count } = props;
  const handlePlus = ()=>{
    const key = 'chad';
    const value = '1';
    increment(key ,value)
  }
  const handleMinus = ()=>{
    const key = 'chad';
    const value = '1';
    decrement(key ,value)
  }
  const handleReset = ()=>{
    const key = 'chad';
    const value = '1';
    reset(key ,value)
  }
  return (
    <div className="Conter">
      CounterSimple Comp
      <div>Count</div>
      <div>{count}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => console.log(props)}>Log</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (key, value) => dispatch(incrementAction(key, value)),
    decrement: (key, value) => dispatch(decrementAction(key, value)),
    reset: (key, value) => dispatch(resetAction(key, value)),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counterSimple.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple);
