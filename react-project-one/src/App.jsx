
import UserCard from "./components/UserCard";
import fairyimg1 from "./assets/crystall_fairy.jpg";
import fairyimg2 from "./assets/forest_fairy.jpg";
import fairyimg3 from "./assets/golden_fairy.jpg";



function App() {
  return (
    <div className="container"> 
      <UserCard 
        name="crystal princess" 
        desc="She is gorgeous and pure-hearted" 
        img={fairyimg1}
      /> 
      <UserCard 
        name="forest fairy" 
        desc="She is nature-loving and kind" 
        img={fairyimg2}
      />
      <UserCard 
        name="golden blossom" 
        desc="She is magical and spreads happiness" 
        img={fairyimg3}
      />
    </div>
  );
}

export default App;
