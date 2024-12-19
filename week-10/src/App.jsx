import { useState, useRef } from 'react'
import './App.css'

function App() {
  // // (1.Raw variable) -> value isn't reflecting on the UI with raw variable
  // let value = 1;

  // function updateValue() {
  //   value = value + 1;
  //   console.log(value);
  // }

  // // (2.State variable) -> UI changing on value change
  // const [value, setValue] = useState(0);

  // function updateValue() {
  //   setValue(value=> value + 1);
  // }

  // // (3.useRef variable)
  // // exam-1 try to create clock with state variable 
  // // In this case the time value is not consists it will change on every render in this case when value change
  // const [value, setValue] = useState(0);
  // let time = 0;

  // // start clock
  // function updateValue() {
  //   time =setInterval(() => {
  //     setValue(value => value + 1);
  //   }, 1000);
  // }

  // function stop(){
  //   clearInterval(time);
  //   console.log(time);
  // }

  // // exam-2 try to use state variable in this case
  // // in this case the clock is working but it rendering the UI two time (one on value chage and other on time change)
  // const [value, setValue] = useState(0);
  // const [time, setTime] = useState(0);

  // // start clock
  // function updateValue() {
  //   let t = setInterval(() => {
  //     setValue(value => value + 1);
  //   }, 1000);
  //   setTime(t);
  // }

  // function stop() {
  //   clearInterval(time);
  //   console.log(time);
  // }

  // exam-3 with the help of useRef hook
  // with the help of useRef we can store the referece of time and can create a clock with one render at a second, this approach help us a one render per second
  const [value, setValue] = useState(0);
  const timeRef = useRef();

  // start clock
  function updateValue() {
    let t = setInterval(() => {
      setValue(value => value + 1);
    }, 1000);
    timeRef.current = t;
  }

  function stop() {
    clearInterval(timeRef.current);
    console.log(timeRef);
  }

  return (
    <>
      <h2>{value}</h2>
      <button onClick={updateValue}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

export default App
