
import './App.css'
import {useEffect,useState} from 'react'
function App() {
  const [count,setCount] = useState(0);
 useEffect(() => {
   alert("I will render on each click")
   
 })
 function handleClick(){
  setCount(count+1);
 }
 

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <br />
      count is:{count}
    </div>
  )
}

export default App
