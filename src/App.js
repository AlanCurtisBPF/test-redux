import './App.css';
import Counter from './components/Counter/Counter';
import CounterSimple from './components/CounterSimple/CounterSimple';

function App() {
  return (
    <div className="App">
      <CounterSimple/>
      <Counter/>
    </div>
  );
}

export default App;
