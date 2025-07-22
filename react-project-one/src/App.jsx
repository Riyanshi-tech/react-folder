
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
  bgColor="#fdb5cdff"  // pink-ish
/> 
<UserCard 
  name="forest fairy" 
  desc="She is nature-loving and kind" 
  img={fairyimg2}
  bgColor="#a2fca9ff"  // green-ish
/>
<UserCard 
  name="golden blossom" 
  desc="She is magical and spreads happiness" 
  img={fairyimg3}
  bgColor="#f7d977ff"  // yellow-ish
/>

    </div>
  );
}

export default App;
