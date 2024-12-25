import { useEffect, useRef, useState } from 'react';
import './App.css'
import { usePrev } from './hooks/usePrev';

function App() {
  const [value, setValue] = useState(0);
  const prev = usePrev(value);

  function updateValue() {
    setValue(curr => curr + 1);
  }

  return (
    <div>
      <h1>{value}</h1>
      <p>previous value is: {prev}</p>
      <button onClick={updateValue}>update value</button>
    </div>
  )
}

export default App
