
import './App.css'

function App() {
  // function handleclick(){
  //   alert("I am clicked")
  // }
  // function handlemouseover(){
  //   alert("you are on the para")
  // }
  function handleinputchange(e){
    // console.log("input value get changed")
    console.log("value till now:", e.target.value);
  }
  return (
    <div>
      <form >
        <input type="text" onchange={handleinputchange} />
      </form>
      {/* <p onMouseOver={handlemouseover} style={{border:"1px solid black"}}>I am Paragraph</p>
    <button onClick={handleclick}>click me</button> */}
    </div>
  )
    
}

export default App
