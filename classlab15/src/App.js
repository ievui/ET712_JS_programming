import './App.css';
import flower from './images/flower.jpg'

function App() {
  const username = "user123"
  return (
    <div className="App">
      <h1 style={{color: "darkblue", textAlign: "center"}}>Aaliyah Fowlin</h1>
      <h2>Welcome to react JS {10+5}</h2>
      <p>Embedded variable</p>
      <p>{username} user has id number {10+5}</p>

      <figure>
        <img src={flower} />
      </figure>
    </div>
  );
}

export default App;
