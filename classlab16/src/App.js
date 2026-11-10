import './App.css';
import User from './user'

import meerkat from './images/meerkat.png'
import woman from './images/woman.png'
import man from './images/man.png'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Aaliyah Fowlin</h1>
      <main className='container'>
        {/* user 1 */}
        <User image = {meerkat} username = "Meerkat" date = "10/15/26" msg = "I'm hungry!"/>
        {/* user 2 */}
        <User image = {woman} username = "April" date = "12/19/34" msg = "Hello world!"/>
        {/* user 3 */}
        <User image = {man} username = "Man in Black" date = "11/10/26" msg = "UFO"/>
      </main>
    </div>
  );
}

export default App;
