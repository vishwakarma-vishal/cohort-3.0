import { useEffect, useRef, useState } from 'react';
import './App.css'
import { usePrev } from './hooks/usePrev';
import useOnline from './hooks/useOnline';
import useDebounce from './hooks/useDebounce';

function App() {
  const printHello = () => {
    console.log("print Hello");
  }

  const handler = useDebounce(printHello);
  
  return (
    <div>
      <input type='text' onChange={handler}/>
    </div>
  )
}

export default App
