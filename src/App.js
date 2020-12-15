import './App.css';
// import Counter from './components/Counter/Counter';
// import CounterSimple from './components/CounterSimple/CounterSimple';
import CounterComplex from './components/CounterComplex/CounterComplex';
import Status from './components/Status/Status';

function App() {
  return (
    <div className="App">
      <Status/>
      <CounterComplex/>
      {/* <CounterSimple/>
      <Counter/> */}
    </div>
  );
}

export default App;
