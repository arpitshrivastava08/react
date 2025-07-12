import { useState } from 'react' // hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // this hook is responsible to change state propagate
  // iski default value kuch bhi de sakte hai true false "", "hitseh", rtc
  let [counter, setCounter] = useState(5)

  // let counter = 15

  // what happen if in interview?
  const addValue = () => {
    console.log("clicked", counter); 
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // setCounter(counter + 1) // this will not work as it will take the old value of counter
    // abhi value 6 hi aaegi  
    // but if we use 
    setCounter((prevCounter) => {
      return prevCounter + 1
    }) // this will work as it will take the latest value of counter
    // ab value badhegi
  } 
  // yaha par counter ka value badh to raha hai par show nhi ho rha hai
  // so we use hooks UI updation ko react control karta hai so hooks 

  const removeValue = () => {
    console.log("clicked", counter); 
    if (counter > 0 ) setCounter( counter -1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
