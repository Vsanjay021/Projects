import { useState } from 'react';
import Values from 'values.js';

import './App.css'

function App() {
const [color,setColor]= useState<string>('');
const [error,setError]= useState<boolean>(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  console.log("hello")
}

  return (
    <>
     <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={color}
        placeholder='#f15025'
      />
      <button className='btn' type='submit'>
        submit
      </button>
    </form>
  </section>
  <section className='colors'>
  </section>
    </>
   
  )
}

export default App
