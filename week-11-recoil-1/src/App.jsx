import './App.css'
import { useState, memo } from 'react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { countAtom } from '../src/store/atom/countAtom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} />
      <Increment setCount={setCount} />
      <MemoDecrement />
    </div>
  )
}

const Count = ({ count }) => {

  return (
    <p> {count}</p>
  )
}

const Increment = ({ setCount }) => {

  const increaseValue = () => {
    setCount((c) => c + 1);
  }

  return (
    <button onClick={increaseValue}>Increment</button>
  )
}


const Decrement = () => {
  const decreaseValue = () => {
  }

  return (
    <button onClick={decreaseValue}>Decrement</button>
  )
}

const MemoDecrement = memo(Decrement);

export default App
