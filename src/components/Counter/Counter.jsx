import { connect } from "react-redux";
import {
  actionTest as actionTestAction,
  increment as incrementAction,
  decrement as decrementAction,
  reset as resetAction,
} from "../../redux/reducers/counter/counterActions";

const Counter = (props) => {
  const { actionTest, increment, decrement, reset, count } = props;
  return (
    <div className="Conter">
      Counter Comp
      <div>Count</div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => console.log(props)}>Log</button>
      <button onClick={actionTest}>Test Action</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // can do this way
    // actionTest: actionTestAction,
    actionTest: () => dispatch(actionTestAction()),
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    reset: () => dispatch(resetAction()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
