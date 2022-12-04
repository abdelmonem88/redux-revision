import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {count}</div>
      <div>
        <button className='btn' onClick={increment}>
          increase +
        </button>
        <button className='btn' onClick={decrement}>
          decrease -
        </button>
      </div>
      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
