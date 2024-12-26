import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { countAtom } from '../src/store/atom/countAtom';

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
        <Increment />
        <Decrement />
      </div>
    </RecoilRoot>
  )
}

const Count = () => {
  const count = useRecoilState(countAtom);

  return (
    <p> {count}</p>
  )
}

const Increment = () => {
  const setCountAtom = useSetRecoilState(countAtom);

  const increaseValue = () => {
    setCountAtom((c) => c + 1);
  }

  return (
    <button onClick={increaseValue}>Increment</button>
  )
}

const Decrement = () => {
  const setCountAtom = useSetRecoilState(countAtom);

  const decreaseValue = () => {
    setCountAtom(c => c - 1);
  }

  return (
    <button onClick={decreaseValue}>Decrement</button>
  )
}

export default App
