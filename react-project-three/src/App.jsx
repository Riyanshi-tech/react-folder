
import React,{useState} from 'react'
import './App.css'
import Card from './components/Card'  // 👈 Import the Card component
import Button from './components/Button'

function App() {
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
     <Button incrementCount={handleClick}
     text ="click me"/>
      {/* <Card>
        hello kaise hai aap
      </Card> */}
    </div>
  )
}

export default App
 