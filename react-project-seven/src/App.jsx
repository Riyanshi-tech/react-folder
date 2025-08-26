
import './App.css'
import { useState } from 'react'
// import {useEffect,useState} from 'react'

//   const [count,setCount] = useState(0);
//   const [total,setTotal] = useState(1);
//  useEffect(() => {
//    alert("I will render on each click")
   
//  })
//  variation 2
//   useEffect(() => {
   
//  alert("Iwill run on only 1st render")
//    }
//  }, [])
// variation 3
// useEffect(() => {
//   alert("I will run every time when count is updated")
//   }
// }, [count])
// variation  4 multiple dependencies 
// useEffect(() => {
//   
//   }
// }, [count,totald])
// variation 5:
// now using the clean up function
// useEffect(() => {
//   alert("count is updated ")

//   return () => {
//     alert("count is mounted from UI");

//   }
// }, [count])

 
//  function handleClick(){
//   setCount(count+1);
//   setTotal(total+1);
//  }import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1
      } else {
        return prevCounter // do nothing if already 20
      }
    })
  }

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter > 0) {
        return prevCounter - 1
      } else {
        return prevCounter // do nothing if already 0
      }
    })
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

 

  