import './App.css';
import User from './user'

import meerkat from './images/meerkat.png'
import woman from './images/woman.png'
import man from './images/man.png'

import User_feedback from './User_feedback'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Aaliyah Fowlin</h1>
     
      <main className='container'>
        {/* user 1 */}
        <User_feedback username = "Meerkat">
          <User image = {meerkat}  date = "10/15/26" msg = "I'm hungry!"/>
          </User_feedback>
        
        {/* user 2 */}
        <User_feedback username = "April">
          <User image = {woman}  date = "12/19/34" msg = "Hello world!"/>
          </User_feedback>
        
        {/* user 3 */}
        <User_feedback username = "Man in Black">
          <User image = {man}  date = "11/10/26" msg = "UFO"/>
          </User_feedback>
      </main>

      {/** POST COMMENTS */}
      <section className="postcomment">
        <ul className="commentlist">
          <li>testing</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
