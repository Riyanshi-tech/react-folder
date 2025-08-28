
// import './App.css'

// function App() {
//   // function handleclick(){
//   //   alert("I am clicked")
//   // }
//   // function handlemouseover(){
//   //   alert("you are on the para")
//   // }
//   // function handleinputchange(e){
//   //   // console.log("input value get changed")
//   //   console.log("value till now:", e.target.value);
//   // }
//   return (
//     <div>
//       <button className='bg-green-500'>click me</button>
//       {/* <form >
//         <input type="text" onchange={handleinputchange} />
//         <button type='submit'>Submit </button>
//       </form> */}
//       {/* <p onMouseOver={handlemouseover} style={{border:"1px solid black"}}>I am Paragraph</p>
//     <button onClick={handleclick}>click me</button> */}
//     </div>
//   )
    
// }

// export default App
// src/App.jsx
export default function App() {
  return (
    <div className="bg-green-500 h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold text-white">
        Tailwind is Working 🎉
      </h1>
    </div>
  );
}
