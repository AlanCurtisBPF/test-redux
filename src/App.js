import './App.css';
import Counter from './components/Counter/Counter';
import CounterSimple from './components/CounterSimple/CounterSimple';
import CounterComplex from './components/CounterComplex/CounterComplex';

function App() {
  return (
    <div className="App">
      <CounterComplex/>
      <CounterSimple/>
      <Counter/>
    </div>
  );
}

export default App;
