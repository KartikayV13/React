
import { useState } from 'react';
import './App.css';

function App() {

  const[color , setColor] = useState("red")

  return (
<div className='hero'>
  <div className='container' style={{backgroundColor : color}} >
    <h1>BG Changer</h1>
  </div>
  <div className='btns'>
    <div className='bar'>
      <button className='colrbtn red' onClick={() => setColor("red")}>Red</button>
      <button className='colrbtn blue' onClick={() => setColor("blue")}>Blue</button>
      <button className='colrbtn green' onClick={() => setColor("green")}>Green</button>
      <button className='colrbtn violet' onClick={() => setColor("violet")}>Violet</button>
      <button className='colrbtn yellow' onClick={() => setColor("yellow")}>Yellow</button>
      <button className='colrbtn pink' onClick={() => setColor("pink")}>Pink</button>
    </div>
  </div>
</div>
  );
}

export default App;
