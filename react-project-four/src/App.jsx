import Card from './components/Card'
import './App.css'

import { useState } from 'react';

function App() {
 const [name,setName]=useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/><Card title="Card2" name={name} setName={setName}/>
      <p>I am inside Parent component and value of name is {name}</p>
    </div>
    
  )
}

export default App
