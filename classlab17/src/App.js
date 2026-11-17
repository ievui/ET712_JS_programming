import { useState } from 'react';
import './App.css';

function App() {
  // list with three messages
  const messages =["I think, therefore I am", "I have a dream", "The only thing to fear is fear itself"]

  // Set an inital state for counter
  let [counter, setcounter] = useState(1)

  return (
    <div className="App">
      <h1 className='title'>Slice by Aaliyah Fowlin</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter == 1 ? "active": ""}><p>1</p></div>
          <div className={counter == 2 ? "active": ""}><p>1</p></div>
          <div className={counter == 3 ? "active": ""}><p>1</p></div>
        </div>
      

      <p className='msg'>{counter} <em style={{"color":"lightseagreen"}}>{messages[counter-1]}</em> </p>

      <div className='btngroup'>
        <button onClick={function(){counter>1 ? setcounter(counter-1): setcounter(3)}}>previous</button>
        <button onClick={function(){counter<messages.length ? setcounter(counter+1): setcounter(1)}}>Next</button>
      </div>
      </section>

    </div>
  );
}

export default App;
